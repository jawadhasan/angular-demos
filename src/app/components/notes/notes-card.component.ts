import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-notes-card',
  template: `<div class="card   mb-3">
    <div class="card-header text-white bg-danger ">
      <h6>{{ note.title }}</h6>
    </div>
    <div class="card-body">
      <p class="card-text">{{ note.content }}</p>
      <p>{{ note.details }}</p>
    </div>
  </div>`,
  styles: [''],
})
export class NotesCardComponent implements OnInit {
  @Input() note: any;
  constructor() {}

  ngOnInit(): void {}
}
