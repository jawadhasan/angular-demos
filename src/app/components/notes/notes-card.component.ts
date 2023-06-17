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
      <br />
      <b>{{ note.categoryId | DisplayNoteCategory }}</b>
    </div>
  </div>`,
  styles: [''],
})
export class NotesCardComponent implements OnInit {
  @Input() note: any;
  constructor() {}

  ngOnInit(): void {}
}
