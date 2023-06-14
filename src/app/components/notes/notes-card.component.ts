import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-notes-card',
  template: `<div class="card   mb-3">
    <div class="card-header text-white bg-primary ">
      <h6>{{ note.title }}</h6>
    </div>
    <div class="card-body">
      <p class="card-text">{{ note.content }}</p>
      <div [innerHTML]="note.details"></div>
      <!-- <textarea id="w3review" name="w3review" rows="4" cols="40">{{ note.details }}</textarea> -->
      <!-- <p>{{ note.categoryId }}</p> -->
    </div>
  </div>`,
  styles: [''],
})
export class NotesCardComponent implements OnInit {
  @Input() note: any;
  constructor() {}

  ngOnInit(): void {}
}
