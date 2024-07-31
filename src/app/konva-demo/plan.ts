/*
 Config data to laod a sample plan
*/
const planData = {
  tables: [
    {shape: 'circle-4', x: 800, y: 800},
    {shape: 'square-4', x: 800, y: 300},
    {shape: 'square-4', x: 300, y: 800},
    {shape: 'square-4', x: 1300, y: 800},
    {shape: 'square-4', x: 800, y: 1300},
  ]
}

// Config data for chairs
const chairSize = {
  width: 60,
  height: 60,
  outerWidth: 60,
  outerHeight: 60,
}


// Config data for tables
const tableData = {
  "square-4": {
    shape: 'rect',
    width: 200,
    height: 200,
    chairPositions: [
      {x: 0, y: 0.5, angle: 0},
      {x: 0.5, y: 0, angle: 90},
      {x: 1, y: 0.5, angle: 180},
      {x: 0.5, y: 1, angle: 270},
    ]
  },
  "square-6": {
    shape: 'rect',
    width: 200,
    height: 100,
    chairPositions: [
      {x: 0, y: 0.5, angle: 0},
      {x: 0.33, y: 0, angle: 90},
      {x: 0.66, y: 0, angle: 90},
      {x: 1, y: 0.5, angle: 180},
      {x: 0.33, y: 1, angle: 270},
      {x: 0.66, y: 1, angle: 270}
    ]
  },
  "circle-4": {
    shape: 'circle',
    radius: 120,
    chairPositions: [
      {x: 0, y: 0.5, angle: 0},
      {x: 0.5, y: 0, angle: 90},
      {x: 1, y: 0.5, angle: 180},
      {x: 0.5, y: 1, angle: 270},
    ]
  },
}

// This will be our very simple model
const model = {
  tables: new Map(),
  chairs: new Map()
}


// Just a utility class providing the ID generator.
class Utils {

  static getUUID () {
    try {
      // try the crypto API - note this requires that the page is served via HTTPS.
      return self.crypto.randomUUID()
    }
    catch (err){
      // Apparaently there is an issue with crypto so use the pseudo approach.
      return Utils.PseudoGuid()
    }
  }

  static PseudoGuid (){ // Make a GUID to use in unique id assignment
    const fC = Utils.getSegment;
    return (fC() + fC() + "-" + fC() + "-" + fC() + "-" + fC() + "-" + fC() + fC() + fC());
  }

  static getSegment(){
    return (((1 + Math.random()) * 0x10000)|0).toString(16).substring(1).toUpperCase();
  }

  // given a value parameter, return true if it is an object (must not null or array) and false otherwise
  static isObject(value) {
    return (
      typeof value === 'object' && value !== null && !Array.isArray(value)
    );
  }

   // Use center-center distance check for non-rotated rects.
  static hasOverlap (r1, r2) {

    console.log('r1', r1)
    console.log('r2', r2)
    const center1 = r1.x + r1.width/2
    const center2 = r2.x + r2.width/2
    const middle1 = r1.y + r1.height/2
    const middle2 = r2.y + r2.height/2

    return ((Math.abs(center1 - center2) <= ((r1.width + r2.width)/2)) && (Math.abs(middle1 - middle2) <= ((r1.height + r2.height)/2)))

  }

}

// Undo stack is wrappied in a class.
class UndoStack {

  undoStack = new Array()
  idx = -1 // indicates the current slot in the stack
  max = -1 // marks the upper limit of the stack.

  // save a change into the stack and apply it to the model
  apply(change){

    // set the max stack pointer for the new entry
    this.max = this.idx + 1

    this.undoStack[this.max] = change;

    this.applyRedo()

  }

  // Given target and source JS objects, merge the attrs from the source into the target.
  // If the attr is an object then merge its attributes individually (deep merge).
  mergeAttributes(target, source){

    // Only prcoess the attrs of the source
    for (let attrName of Object.keys(source)){

      // only process if the target has an attr of that exact name
      if (target.hasOwnProperty(attrName)){

        // If the target attr is an object then handle it via another call into the merge process, thus
        // supporting deep merging
        if (Utils.isObject(target[attrName])){
          this.mergeAttributes(target[attrName], source[attrName])
        }
        else {
          // when thet attr is not an object, replace the attr value on the target with the source value.
          target[attrName] = source[attrName]
        }

      }

    }

  }

  // re-do a change
  applyRedo() {

    if (this.idx >= this.max){
      console.log('No more redos available')
      return
    }

    // move the pointer to the next change
    this.idx = this.idx + 1

    const change =  this.undoStack[this.idx]

    // Get the target object
    let target = null;
    switch (change.obj.type){
      case 'table':
        target = model.tables.get(change.obj.id)
        break;
      case 'chair':
        target = model.chairs.get(change.obj.id)
        break;
      // other cases as needed.
      default:
        throw new Error("Unexpected object type in redo [" + change.obj.type + "]")
    }

    // Apply the attrs from the change to the target
    this.mergeAttributes(target, change.after)


    // Special handling per object
    if (change.obj.type === 'table'){

      target.setFocus(true)

    }
    else if (change.obj.type === 'chair'){

      const table =  model.tables.get(target.parentId)
      table.setFocus(true)
      table.draw()

    }

    target.draw()

  }

  // Un-do the current change
  applyUndo(){

    // if there is a change to appy
    if (this.idx <= -1){
      console.log('No more undos available')
      return
    }

    const change =  this.undoStack[this.idx]

    // Get the target object
    let target = null
    switch (change.obj.type){
      case 'table':
        target = model.tables.get(change.obj.id)
        break;
      case 'chair':
        target = model.chairs.get(change.obj.id)
        break;
      // other cases as needed.
      default:
        throw new Error("Unexpected object type in redo [" + change.obj.type + "]")
    }

    // Apply the attrs from the change to the target
    this.mergeAttributes(target, change.before)

    // Special handling per object
    if (change.obj.type === 'table'){

      target.setFocus(true)

    }
    else if (change.obj.type === 'chair'){

      const table =  model.tables.get(target.parentId)
      table.setFocus(true)
      table.draw()

    }
    target.draw()

    // move the pointer to the previous change
    this.idx = this.idx - 1;

  }

}
