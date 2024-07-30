import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KonvaDemoComponent } from './konva-demo.component';

describe('KonvaDemoComponent', () => {
  let component: KonvaDemoComponent;
  let fixture: ComponentFixture<KonvaDemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KonvaDemoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KonvaDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
