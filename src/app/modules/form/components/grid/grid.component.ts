import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Form, FormArray, FormGroup} from '@angular/forms';
import {JsonService} from '../../shared/services/json.service';
import {HttpClient} from '@angular/common/http';
import {XmlService} from '../../shared/services/xml.service';
import {Field} from '../../../../models/field';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.css']
})
export class GridComponent {

  Object = Object;

  @Input()
  inputs: any[] = [];

  @Input()
  form: FormGroup = new FormGroup({
    subForms: new FormArray([])
  });

  @Input()
  active: boolean;

  @Output()
  outputEmitter= new EventEmitter<number>();

  generateCode(i: number){
    this.outputEmitter.emit(i);
  }

  get subForms(){
    return this.form.get("subForms");
  }

  getHeaders(): any[]{
    var headers: any[] =[];
    (this.inputs[0] as Field[]).forEach(element =>{
      headers.push(element.key)
    })
    return headers;
  }


}
