import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'app-canvas-demo',
  templateUrl: './canvas-demo.component.html',
  styleUrls: ['./canvas-demo.component.css'],
})
export class CanvasDemoComponent implements OnInit, AfterViewInit {
  pageTitle: 'Canvas Demo';

  @ViewChild('mainCanvas') canvasElem: ElementRef;

  constructor() {}

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    const canvas = this.canvasElem.nativeElement;
    let ctx = canvas.getContext('2d');
    console.log(canvas);
  }

  drawRect() {
    const canvas = this.canvasElem.nativeElement;
    let ctx = canvas.getContext('2d');

    //drawing on canvas
    ctx.fillStyle = 'green';
    ctx.fillRect(0, 0, 100, 80); // draw at 0,0 (widht 100, height 80)
  }

  drawLine() {
    const canvas = this.canvasElem.nativeElement;
    let ctx = canvas.getContext('2d');

    //moves the starting point of drawing to x=100,y=0
    ctx.moveTo(100, 0);

    //will create a line from startpoint (x=100,y=0) to endpoint (x=200, y=100)
    ctx.lineTo(200, 100);

    //actually draw
    ctx.stroke();
  }

  drawPath() {
    const canvas = this.canvasElem.nativeElement;
    let ctx = canvas.getContext('2d');

    ctx.beginPath();
    ctx.moveTo(10, 10);
    ctx.lineTo(100, 10);
    ctx.lineTo(100, 100);
    ctx.lineTo(10, 100);
    ctx.closePath();
    ctx.fillStyle = 'red';
    ctx.fill();
    ctx.stroke();
  }

  drawCircle() {
    const canvas = this.canvasElem.nativeElement;
    let ctx = canvas.getContext('2d');
    ctx.beginPath();
    // ctx.arc(100, 100, 60, 0, 2 * Math.PI);
    ctx.arc(100, 100, 60, this.degToRad(0), this.degToRad(360), false);
    ctx.fillStyle = 'red';
    ctx.fill();
    // ctx.strokeStyle('red');
    ctx.stroke();
  }

  drawText() {
    const canvas = this.canvasElem.nativeElement;
    let ctx = canvas.getContext('2d');

    let text = 'Welecome to HTML-5';
    ctx.font = '22px Arial';

    ctx.fillText(text, 50, 50);
    ctx.strokeText(text, 50, 100);
  }

  drawGradient() {
    const canvas = this.canvasElem.nativeElement;
    let ctx = canvas.getContext('2d');

    let gradient = ctx.createLinearGradient(0, 0, 200, 0); //specify position and size. Gradient is for
    gradient.addColorStop(0, 'red');
    gradient.addColorStop(0.5, 'blue');
    gradient.addColorStop(1, 'green');
    ctx.fillStyle = gradient;
    ctx.fillRect(10, 10, 190, 80); //our rectangle is smaller than gradient area, thats why green is not shown (150->190 green show)
  }

  //

  drawImage() {
    const canvas = this.canvasElem.nativeElement;
    let ctx = canvas.getContext('2d');
    ctx.scale(2, 2); // Doubles size of anything draw to canvas.

    let x = 10;
    let y = 20;

    let width = 200;
    let height = 300;

    //image
    var helloWorldImage = new Image();
    helloWorldImage.onload = function () {
      //The anonymous callback function will be executed when the onload event occurs. When the image has loaded,

      //ctx.drawImage(helloWorldImage, x, y); //Simply draw
      ctx.drawImage(helloWorldImage, x, y, width, height);
    };
    helloWorldImage.src = '/assets/images/hive.svg'; //'https://www.w3schools.com/html/html5.gif'; //cross origin issue
  }

  rotate() {
    const canvas = this.canvasElem.nativeElement;
    let ctx = canvas.getContext('2d');

    let w = 150;
    let h = 150;

    ctx.translate(canvas.width / 2, canvas.height / 2);
    ctx.rotate(Math.PI / 4);

    ctx.fillStyle = 'red';
    ctx.fillRect(0, 0, w, h);
  }

  scale() {
    const canvas = this.canvasElem.nativeElement;
    let ctx = canvas.getContext('2d');

    let w = 150;
    let h = 150;

    ctx.scale(1, 0.5);

    ctx.fillStyle = 'red';
    ctx.fillRect(0, 0, w, h);
  }

  SaveStateAndRestore() {
    const canvas = this.canvasElem.nativeElement;
    let ctx = canvas.getContext('2d');

    ctx.fillStyle = 'yellow';
    ctx.fillRect(0, 0, 200, 200);
    ctx.save();

    ctx.fillStyle = 'red';
    ctx.fillRect(15, 15, 100, 100);
    ctx.save();

    ctx.fillStyle = 'blue';
    ctx.fillRect(30, 30, 100, 100);
    ctx.restore();

    ctx.fillRect(45, 45, 100, 100);
    ctx.restore();

    ctx.fillRect(60, 60, 100, 100);
  }

  private degToRad(degrees) {
    return (degrees * Math.PI) / 180;
  }

  clear() {
    const canvas = this.canvasElem.nativeElement;
    let ctx = canvas.getContext('2d');
    ctx.clearRect(0, 0, canvas.width, canvas.height); //reset canvas
  }

  drawChart() {
    const canvas = this.canvasElem.nativeElement;
    let ctx = canvas.getContext('2d');
    this.showChart(ctx, canvas);
  }

  showChart(ctx, canvas) {
    //clear the canvas
    canvas.widht = canvas.widht;

    //hard-coded values, can get via AJAX
    let productSales = new Array();
    productSales[0] = 'Jan, 170';
    productSales[1] = 'Feb, 320';
    productSales[2] = 'Mar, 350';
    productSales[3] = 'Apr, 170';
    productSales[4] = 'May, 240';
    productSales[5] = 'Jun, 370';
    productSales[6] = 'Jul, 330';
    productSales[7] = 'Aug, 390';
    productSales[8] = 'Sep, 300';
    productSales[9] = 'Oct, 205';
    productSales[10] = 'Nov, 290';
    productSales[11] = 'Dec, 388';

    //bar-chart graph (couple of axis, couple of bars)

    this.createBarChart(ctx, productSales, 30, 20, canvas.height - 20);
  }

  createBarChart(ctx, data, startX, barWidth, chartHeight) {
    ctx.lineWidth = '1.2'; //this line will be used for drawing of axis
    let startY = 480;

    this.createAxis(ctx, startX, startY, startX, 20); //vertical axis
    this.createAxis(ctx, startX, startY, 650, startY); // Horizontal axis

    ctx.lineWidth = '0.0'; //reset the line-width
    let maxValue = 0;

    for (let i = 0; i < data.length; i++) {
      let item = data[i].split(',');
      let itemName = item[0];
      let itemValue = item[1];

      if (parseInt(itemValue) > maxValue) {
        maxValue = itemValue;
      }

      ctx.fillStyle = 'blue';
      let valX = 20 + startX + i * barWidth + i + i * 30;
      let valY = chartHeight - itemValue;
      this.createBar(ctx, valX, valY, barWidth, itemValue);

      //place text below the horizontal axis
      ctx.textAlign = 'left';
      ctx.fillStyle = 'black';
      let valYY = chartHeight + 15;
      ctx.fillText(itemName, valX, valYY);
    }
  }

  createAxis(ctx, startX, startY, endX, endY) {
    ctx.beginPath();
    ctx.moveTo(startX, startY);
    ctx.lineTo(endX, endY);
    ctx.closePath();
    ctx.stroke();
  }

  createBar(ctx, x, y, widht, height) {
    ctx.beginPath();
    ctx.rect(x, y, widht, height);
    ctx.closePath();
    ctx.stroke();
    ctx.fill();

    ctx.closePath();
  }
}
