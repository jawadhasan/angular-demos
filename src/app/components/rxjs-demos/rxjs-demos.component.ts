import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  ViewChild,
} from '@angular/core';
import {
  Subject,
  Observer,
  concat,
  from,
  fromEvent,
  interval,
  map,
  merge,
  of,
  take,
  tap,
  Observable,
} from 'rxjs';

import { allProducts, allCategories } from '../../data';

@Component({
  selector: 'app-rxjs-demos',
  templateUrl: './rxjs-demos.component.html',
  styleUrls: ['./rxjs-demos.component.css'],
})
export class RxjsDemosComponent implements OnInit, AfterViewInit {
  apples$: any[] = ['Apple1', 'Apple2'];

  @ViewChild('para') para: ElementRef;
  @ViewChild('myButton') myButton: ElementRef;

  constructor() {}

  ngOnInit(): void {
    console.log(`of operator`);
    of(this.apples$) //1. Single Array of Apples [Apple1, Apple2] as one single item is emitted.; or of(2,4,6,8)
      .subscribe((item) => console.log(item));

    //2. from
    console.log(`from operator`);
    from(this.apples$).subscribe((item) => console.log(`${item}`));

    console.log(`from with spread operator`);
    from([...this.apples$]).subscribe((item) => console.log(`${item}`));

    //combine two streams into one
    let allProucts$ = from(allProducts);
    let allCategories$ = from(allCategories);

    concat(allProucts$, allCategories$).subscribe((item) => console.log(item));
  }

  ngAfterViewInit(): void {
    //fromEvent

    const paraStream$ = fromEvent(this.para.nativeElement, 'click').subscribe(
      () => console.log('para clicked')
    );

    // fromEvent(this.myButton.nativeElement, 'click').subscribe((e) =>
    //   console.log('button clicked', e)
    // );

    fromEvent(this.myButton.nativeElement, 'click').subscribe((e) => {
      console.log('button clicked', e);

      //generally we want to perform some actions
      let allProucts$ = from(allProducts);
      let allCategories$ = from(allCategories);

      concat(allProucts$, allCategories$).subscribe((item) =>
        console.log(item)
      );
    });

    //interval
    //const num = interval(1000).subscribe(console.log);
  }

  mapExample() {
    console.log('map example');
    from([20, 15, 10])
      .pipe(
        tap((item) => console.log(item)),
        map((item) => item * 2),
        map((item) => item - 10),
        map((item) => {
          if (item === 0) {
            throw new Error('zero detected');
          }
          return item; //explicit return
        })
      )
      .subscribe({
        next: (item) => console.log(item),
        error: (error) => console.log(error),
        complete: () => console.log('complete'),
      });
  }

  mergeExample() {
    console.log('merge demo');
    merge(of(2, 5, 9), of(10, 20, 30)).subscribe((x) => console.log(x));
  }

  takeExample() {
    console.log('take demo');

    of(10, 20, 30)
      .pipe(take(2))
      .subscribe((x) => console.log(x));
  }

  mapExample2() {
    //sample only
    let mapped = [1, 2, 3, 4, 5, 6, 7].map(
      (it) => <any>{ _id: it, title: 'title ' + it }
    );
  }

  subjectExample() {

    let subject$ = new Subject();

    //subscribing
    subject$.subscribe(value => console.log(`Observer-1" ${value}`));
    subject$.subscribe(value => console.log(`Observer-2" ${value}`));
    //both observers are now added to observers array of subject.

    //subject produce values when their next() method is called:

    //1. calling it directly
    subject$.next('Hello');

    //2. subject subscribe to another observable and proxy values

    //define a source observable
    let source$ = new Observable(subscriber=>{
      subscriber.next('Greetings!');
    });

    //passing subject as observer
    source$.subscribe(subject$);


  }


}
