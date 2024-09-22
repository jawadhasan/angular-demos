import { Component, OnInit } from '@angular/core';
import { PostsService } from './posts.service';
import { BehaviorSubject, combineLatest, switchMap } from 'rxjs';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent {

  posts$ = this.postsService.postsWithCategories$;


  private _searchFilter: string = '';
  set searchFilter(value) {
    this._searchFilter = value;
    this.postsService.performSearch(value); //3. emit to actionStream
  }
  get searchFilter() {
    return this._searchFilter;
  }


  constructor(private postsService:PostsService) { }


}
