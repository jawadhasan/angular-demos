import { Component, OnInit } from '@angular/core';
import Konva from 'konva';

@Component({
  selector: 'app-konva-demo',
  templateUrl: './konva-demo.component.html',
  styleUrls: ['./konva-demo.component.css'],
})
export class KonvaDemoComponent implements OnInit {
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
    this.sampleKonvaSetup();
  }

  sampleKonvaSetup() {
    // first we need to create a stage
    this.stage = new Konva.Stage({
      container: 'konva-container', // id of container <div>
      // width: 200,
      // height: 200
      width: window.innerWidth - 100,
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
}
