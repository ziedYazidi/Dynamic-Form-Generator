import {Component, Input, OnInit} from '@angular/core';
import {Textarea} from '../../models/textarea';
import {FormArray, FormGroup} from '@angular/forms';
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
  inputs: Textarea[] = [];
  form: FormGroup = new FormGroup({});
  payLoad: any;
  active: boolean = false;

  constructor(private jsonService: JsonService, private xmlService: XmlService, private http: HttpClient) {};


  getData(text: string){
    if(text.charAt(0)== '{' || text.charAt(0)== '['){
      this.inputs = this.jsonService.getInputs(text);
      this.form = this.jsonService.toFormGroup(this.inputs);
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
