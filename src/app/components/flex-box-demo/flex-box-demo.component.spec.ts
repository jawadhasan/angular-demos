import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlexBoxDemoComponent } from './flex-box-demo.component';

describe('FlexBoxDemoComponent', () => {
  let component: FlexBoxDemoComponent;
  let fixture: ComponentFixture<FlexBoxDemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FlexBoxDemoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FlexBoxDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
