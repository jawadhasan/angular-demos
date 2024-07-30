import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-basic-demos',
  templateUrl: './basic-demos.component.html',
  styleUrls: ['./basic-demos.component.css']
})
export class BasicDemosComponent implements OnInit {

  links:any[]=[
    {id:"1",text:"RxJS",link:"rxjs"},
    {id:"2",text:"Products (Redux)",link:"products"},
    {id:"3",text:"Flex Demos",link:"flexdemo"},
    {id:"4",text:"Template Ref",link:"sample"},
    {id:"5",text:"Forms",link:"forms"},
    {id:"6",text:"Devices",link:"devices"},
    {id:"7",text:"Quotes",link:"quotes"},
    {id:"8",text:"Canvas",link:"canvas"},
    {id:"9",text:"About",link:"about"}
  ];

  constructor(private router: Router ) { }

  ngOnInit(): void {
    console.log(this.links);
  }

  gotoLink(link:string):void{
    //performance.mark('routingStart');
    this.router.navigateByUrl(`/${link}`)
  }


}
