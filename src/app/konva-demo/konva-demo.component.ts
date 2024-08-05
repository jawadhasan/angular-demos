import { Component, OnInit } from '@angular/core';
import Konva from 'konva';

@Component({
  selector: 'app-konva-demo',
  templateUrl: './konva-demo.component.html',
  styleUrls: ['./konva-demo.component.css'],
})
export class KonvaDemoComponent implements OnInit {
  opts:any; //options

  stage: any; //konva stage
  layer: any; //konva layer

  tr1 = new Konva.Transformer();

  tr = new Konva.Transformer({
    // centeredScaling: true,
    // keepRatio: true,
    anchorSize: 20,
    anchorCornerRadius: 5,
    anchorFill: 'red',
    anchorStroke: 'black',
    anchorStrokeWidth: 2,
    borderEnabled: true,
    enabledAnchors: ['top-left', 'top-right', 'bottom-left', 'bottom-right']
  });

  constructor() {}

  ngOnInit(): void {

    //intialize options
    this.opts = {
      id: 'grid1',
      stage: this.stage,
      origin: { x: 0, y: 0 },
      range: {
        posX: 800,
        posY: 800,
        negX: -200,
        negY: -100,
        width: 0,
        height: 0,
        minY: 0,
      },
      flipY: false,
      direction: 'y-dn', //'y-up' 'y-dn\
      stepX: 50,
      stepY: 50,
      showGrid: true,
      defaultGridSize: `800x800`, //hard-coded for now
      zoomStep: 0.2,
      scale: 1,
      enableWheel: false,
    };

    //initilize konva
    this.sampleKonvaSetup();
  }

  sampleKonvaSetup() {
    // first we need to create a stage
    this.stage = new Konva.Stage({
      container: 'konva-container', // id of container <div>
      // width: 200,
      // height: 200
      width: window.innerWidth - 200,
      height: window.innerHeight - 150,
    });

    // then create layer
    this.layer = new Konva.Layer();

    // create our shape
    var circle = new Konva.Circle({
      x: this.stage.width() / 2,
      y: this.stage.height() / 2,
      radius: 70,
      fill: 'red',
      stroke: 'black',
      strokeWidth: 4,
    });

    // add the shape to the layer
    this.layer.add(circle);

    //add transformer to layer
    this.layer.add(this.tr);

    // connect the transformer to the group/object.
    this.tr.nodes([circle]);

    // add the layer to the stage
    this.stage.add(this.layer);

    // draw the image
    this.layer.draw();
  }



  //TOOLBAR
  clearSelection(){

  }
  addText() {
    var tempId = Math.floor(Date.now() / 1000).toString(); //+Math.random().toString(36); //.valueOf().toString(36)
    console.log(tempId);

    let txtItem = new Konva.Text({
      x: this.opts.origin.x,
      y: this.opts.origin.y,
      text: `${tempId}_${new Date()}`,
      fontSize: 30,
      fontFamily: 'Calibri',
      fill: 'black',
      draggable: true,
      id: tempId,
    });

    this.layer.add(txtItem);
  }


}
