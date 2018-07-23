import {Component, Input, OnInit} from '@angular/core';
import {Textarea} from '../../models/textarea';
import {AbstractControl, Form, FormArray, FormGroup} from '@angular/forms';
import {JsonService} from '../../services/json.service';
import {XmlService} from '../../services/xml.service';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators';
import {decoratorArgument} from 'codelyzer/util/astQuery';
import {el} from '@angular/platform-browser/testing/src/browser_util';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {
  @Input() file: string;
  inputs: any[] = [];
  form: FormGroup = new FormGroup({
    subForms: new FormArray([])
  });
  payLoad: any;
  active: boolean = false;
  Object = Object;

  constructor(private jsonService: JsonService, private xmlService: XmlService, private http: HttpClient) {};

  get subForms(){
    return this.form.get("subForms");
  }

  getFormControl(i: number){
    return ((this.form.get("subForms") as FormArray).controls[i] as FormGroup).controls;
  }

  getFormGroup(i: number){
    return ((this.form.get("subForms") as FormArray).controls[i] as FormGroup);
  }

  getHeaders(): any[]{
    var headers: any[] =[];
    for(let colName in Object.keys(this.form.get('subForms').value[0][0])){
      headers.push(Object.keys(this.form.get('subForms').value[0][colName])[0]);
    }
    return headers;
  }

  // getInputs():
  getOutputData(objIndex): any[]{
    let tab: string []= [];
    var i= 0;
    while (i < Object.keys(this.getFormControl(objIndex)).length){
      tab[Object.keys(this.getFormControl(objIndex)[i].value)[0]] = this.getFormControl(objIndex)[i].value[Object.keys(this.getFormControl(objIndex)[i].value)[0]];
      i++;
    }
    return tab;
  }

  getData(text: string){
    if(text.charAt(0)== '{' || text.charAt(0)== '['){
      this.inputs = this.jsonService.getInputs(text);
      if(Array.isArray(this.inputs[0])){
        for(let element of this.inputs){
          (this.form.get('subForms') as FormArray).push(this.jsonService.toFormGroup(element));
        }
      }
      else {
        (this.form.get('subForms') as FormArray).push(this.jsonService.toFormGroup(this.inputs));
      }
    }

    if(text.charAt(0)=='<'){
      this.inputs = this.xmlService.getInputs(text);
      if(Array.isArray(this.inputs[0])){
        for(let element of this.inputs){
          (this.form.get('subForms') as FormArray).push(this.xmlService.toFormGroup(element));
        }
      }
      else {
        (this.form.get('subForms') as FormArray).push(this.xmlService.toFormGroup(this.inputs));
      }
    }
    console.log(this.getFormControl(0)[0]);
    console.log(this.getFormControl(0)[1]);
    this.active = true;
  }

  generateCode(i: any): void {
    var text = this.getOutputData(i);
    var html = '<form [formGroup]="form" (ngSubmit)="onSubmit()">' + "\n";
    for(let ind in text) {
      html = html +
      '<div class="form-group">' + '\n'+
      '   <label for='+ind+'>'+ind+'</label>' + '\n'+
      '   <input id='+ind+' type="text"'+' class="form-control" ' +  + ' >'+text[ind] + '\n'+
      '</div>' +'\n'

    }

    html = html + '<div *ngIf="active">\n' +
      '   <button class="btn btn-primary" type="submit" >Submit</button>\n' +
      '</div>' + '\n' +
      '</form>';
    this.payLoad = html;
  }
}
