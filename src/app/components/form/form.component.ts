import {Component, Input, OnInit} from '@angular/core';
import {Textarea} from '../../models/textarea';
import {AbstractControl, Form, FormArray, FormGroup} from '@angular/forms';
import {JsonService} from '../../services/json.service';
import {XmlService} from '../../services/xml.service';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators';
import {decoratorArgument} from 'codelyzer/util/astQuery';

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
      this.active = true;
      console.log("inputs", this.form.get('subForms'));
      console.log("FORM", this.form);
    }

    if(text.charAt(0)=='<'){
      this.inputs = this.xmlService.getInputs(text);
      this.form = this.xmlService.toFormGroup(this.inputs);
    }
    this.active = true;
  }

  onSubmit(text: any): void {
    var html = "<form [formGroup]="+"form"+" (ngSubmit)="+"onSubmit()"+"> <br>";

    for(let ind in text) {
      html = html +
        "<div class="+"form-group"+">" +
        "   <label [attr.for]="+ind+">"+ind+"</label>" +
        "   <input id="+ind+" type=text"+" class=form-control>"+text[ind] +
        "</div>"
    }

    html = html + "</form>";
    this.payLoad = JSON.stringify(html, null, 2);
  }




}
