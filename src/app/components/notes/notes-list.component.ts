import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, EMPTY, catchError, combineLatest, map } from 'rxjs';
import { NotesService } from 'src/app/components/notes/notes.service';

@Component({
  selector: 'app-notes-list',
  templateUrl: './notes-list.component.html',
  styles: [''],
})
export class NotesListComponent implements OnInit {
  title: string = 'NOTES';

  // notes$ = this.notesService.notes$.pipe(
  //     catchError(err=> EMPTY)
  //   );

  notes$ = combineLatest([
    this.notesService.notes$,
    this.notesService.selectedCategoryAction$,
  ]).pipe(
    map(([notes, categoryFilter]) =>
      //JavaScript array filter
      notes.filter((note) =>
        categoryFilter.id > 0 ? note.categoryId === categoryFilter.id : true
      )
    ),
    catchError((err) => EMPTY)
  );

  selectedCategory: any;
  categories: any[] = [
    { id: 0, name: 'ALL' },
    { id: 1, name: 'Docker CLI' },
    { id: 10, name: 'Linux' },

    { id: 50, name: 'JavaScript' },
    { id: 90, name: 'AWS' },
    { id: 95, name: 'Agile' },

    { id: 100, name: 'General' },
  ];

  constructor(private notesService: NotesService) {}

  ngOnInit(): void {
    this.selectedCategory = this.categories[0];
  }

  //category select
  categoryChanged(e): void {
    this.notesService.selectCategory(e);
  }
}
