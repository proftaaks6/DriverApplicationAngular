import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PointSquareComponent } from './point-square.component';

describe('PointSquareComponent', () => {
  let component: PointSquareComponent;
  let fixture: ComponentFixture<PointSquareComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PointSquareComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PointSquareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
