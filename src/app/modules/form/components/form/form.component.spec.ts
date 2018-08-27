import {async, ComponentFixture, getTestBed, inject, TestBed} from '@angular/core/testing';

import { FormComponent } from './form.component';
import {GridComponent} from '../grid/grid.component';
import {GeneratedCodeComponent} from '../generated-code/generated-code.component';
import {ReactiveFormsModule} from '@angular/forms';
import {MatDialogModule} from '@angular/material';
import {HttpClientModule} from '@angular/common/http';
import {JsonService} from '../../shared/services/json.service';
import {XmlService} from '../../shared/services/xml.service';
import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';
import {HttpClient} from '@angular/common/http';

describe('FormComponent', () => {
  let component: FormComponent;
  let fixture: ComponentFixture<FormComponent>;

  beforeEach(async(() => {

    TestBed.configureTestingModule({
      declarations: [ FormComponent , GridComponent, GeneratedCodeComponent],
      imports:[
        ReactiveFormsModule,
        MatDialogModule,
        HttpClientModule
      ],
      providers:[
        JsonService,
        XmlService
      ]
    }).compileComponents();



  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });


  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
