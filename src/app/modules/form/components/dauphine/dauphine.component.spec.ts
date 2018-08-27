import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DauphineComponent } from './dauphine.component';

describe('DauphineComponent', () => {
  let component: DauphineComponent;
  let fixture: ComponentFixture<DauphineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DauphineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DauphineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
