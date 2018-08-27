import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneratedCodeComponent } from './generated-code.component';

describe('GeneratedCodeComponent', () => {
  let component: GeneratedCodeComponent;
  let fixture: ComponentFixture<GeneratedCodeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GeneratedCodeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GeneratedCodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
