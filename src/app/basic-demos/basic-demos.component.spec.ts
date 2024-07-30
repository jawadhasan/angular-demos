import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicDemosComponent } from './basic-demos.component';

describe('BasicDemosComponent', () => {
  let component: BasicDemosComponent;
  let fixture: ComponentFixture<BasicDemosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BasicDemosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BasicDemosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
