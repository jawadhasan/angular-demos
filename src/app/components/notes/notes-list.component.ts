import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-notes-list',
  template: `<div>
    <h3>NOTES</h3>
    <hr />

    <div class="row">
      <!-- Cards List -->
      <div *ngFor="let note of notes" class="col-4 my-3">
        <app-notes-card [note]="note"></app-notes-card>
      </div>
    </div>
    <p  class="float-right"><b>Jawad Hasan Shani</b></p>
  </div>`,
  styles: [''],
})
export class NotesListComponent implements OnInit {
  notes: any[];

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.apiService.getNotes().subscribe(
      (data: any) => {
        console.log(data);
        this.notes = data;
      },
      (err: any) => console.log(err)
    ); //this.notes = data.result);
  }
}
