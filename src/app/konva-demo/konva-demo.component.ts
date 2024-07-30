import { Component, OnInit } from '@angular/core';
import Konva from 'konva';

@Component({
  selector: 'app-konva-demo',
  templateUrl: './konva-demo.component.html',
  styleUrls: ['./konva-demo.component.css']
})
export class KonvaDemoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.sampleKonvaSetup();

  }


  sampleKonvaSetup(){

// first we need to create a stage
var stage = new Konva.Stage({
  container: 'konva-container',   // id of container <div>
  // width: 200,
  // height: 200
  width: window.innerWidth - 100,
  height: window.innerHeight - 150
});

// then create layer
var layer = new Konva.Layer();

// create our shape
var circle = new Konva.Circle({
  x: stage.width() / 2,
  y: stage.height() / 2,
  radius: 70,
  fill: 'red',
  stroke: 'black',
  strokeWidth: 4
});

// add the shape to the layer
layer.add(circle);

// add the layer to the stage
stage.add(layer);

// draw the image
layer.draw();
  }

}
