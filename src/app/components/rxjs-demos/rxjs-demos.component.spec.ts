import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RxjsDemosComponent } from './rxjs-demos.component';

describe('RxjsDemosComponent', () => {
  let component: RxjsDemosComponent;
  let fixture: ComponentFixture<RxjsDemosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RxjsDemosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RxjsDemosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
