import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-notes-list',
  template: `<div>
    <h3>NOTES</h3>

    <!-- Select -->
    <div class="row">
      <div class="col col-md-4">
        <select
          class="form-select"
          [(ngModel)]="selectedCategory"
          (change)="categoryChanged(selectedCategory)"
        >
          <option *ngFor="let category of categories" [ngValue]="category">
            {{ category.name }}
          </option>
        </select>
      </div>
    </div>

    <hr />

    <div class="row">
      <!-- Cards List -->
      <div *ngFor="let note of notes" class="col-4 my-3">
        <app-notes-card [note]="note"></app-notes-card>
      </div>
    </div>
    <p class="float-right"><b>Jawad Hasan Shani</b></p>
  </div>`,
  styles: [''],
})
export class NotesListComponent implements OnInit {
  notes: any[];
  orgNotes: [];
  selectedCategory: any;
  categories: any[] = [
    { id: 0, name: 'ALL' },
    { id: 1, name: 'Docker CLI' },
    { id: 10, name: 'Linux CLI' },

    { id: 100, name: 'General' },
  ];
  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    //http AJAX call
    this.apiService.getNotes().subscribe(
      (data: any) => {
        console.log(data);
        this.notes = data;
        this.orgNotes = data; //saving copy of the original data

        this.selectedCategory = this.categories[0];//todo //this.categories.find(cat => cat.id === 20); //first category as default
      },
      (err: any) => console.log(err)
    ); //this.notes = data.result);
  }

  //category select
  categoryChanged(e): void {
    console.log(e);
    this.notes = this.orgNotes.slice(); //refreshing local-data

    //TODO: from API
    if (e.id == 0) {
      //ALL
    } else {
      //apply filter
      this.notes = this.notes.filter((note) => note.categoryId == e.id); //return this.notes.find(note => note.categoryId === e.id)
    }
  }
}
