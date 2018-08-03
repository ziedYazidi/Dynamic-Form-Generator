import {Component, Input, OnInit} from '@angular/core';
import {Field} from '../../shared/models/field';
import {AbstractControl, Form, FormArray, FormGroup} from '@angular/forms';
import {JsonService} from '../../shared/services/json.service';
import {XmlService} from '../../shared/services/xml.service';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators';
import {decoratorArgument} from 'codelyzer/util/astQuery';
import {el} from '@angular/platform-browser/testing/src/browser_util';
import {User} from '../../shared/models/user';
import {UserFieldAdapter} from '../../shared/models/userFieldAdapter';
import {UserDialogComponent} from '../user-dialog/user-dialog.component';
import {MatDialog} from '@angular/material';


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {
  inputs: any[] = [];
  form: FormGroup = new FormGroup({
    subForms: new FormArray([])
  });
  payLoad: any;
  active: boolean = false;
  html: string;
  constructor(public dialog: MatDialog, private jsonService: JsonService, private xmlService: XmlService, private http: HttpClient) {};

  get subForms(){
    return this.form.get('subForms');
  }

  getFormControl(i: number){
    return ((this.form.get('subForms') as FormArray).controls[i] as FormGroup).controls;
  }

  getFormGroup(i: number){
    return ((this.form.get('subForms') as FormArray).controls[i] as FormGroup);
  }

  public openUserDialog(user: User) {
    let dialogRef = this.dialog.open(UserDialogComponent, {
      data: {
        user: user,
      },
    });
  }

  getUsers(){
    let fields: Field[] = [];
    this.jsonService.getUsers().subscribe(resp =>{
      for (let index in resp){
        let user: User = resp[index];
        let userFieldAdapter: UserFieldAdapter = new UserFieldAdapter(user);
        userFieldAdapter.makeFit(fields);
      }
      this.inputs = fields;
      if(Array.isArray(this.inputs[0])){
        for(let element of this.inputs){
          (this.form.get('subForms') as FormArray).push(this.jsonService.toFormGroup(element));
        }
      }
      else {
        (this.form.get('subForms') as FormArray).push(this.jsonService.toFormGroup(this.inputs));
      }
      for(let elem in this.subForms.value){
        console.log('TESSSTT', elem);
      }
      console.log('FORM', this.form);
      this.active = true;
    });
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
      for(let elem in this.subForms.value){
        console.log('TESSSTT', elem);
      }
      console.log('FORM', this.form);
    }
    //
    // if(text.charAt(0)=='<'){
    //   this.inputs = this.xmlService.getInputs(text);
    //   if(Array.isArray(this.inputs[0])){
    //     for(let element of this.inputs){
    //       (this.form.get('subForms') as FormArray).push(this.xmlService.toFormGroup(element));
    //     }
    //   }
    //   // else {
    //   //   (this.form.get('subForms') as FormArray).push(this.xmlService.toFormGroup(this.inputs));
    //   // }
    // }
    this.active = true;
  }

  getOutputData(objIndex): any[]{
    let tab: string []= [];
    (this.inputs[objIndex] as Field[]).forEach(element=>{
      tab[element.key] = element.value;
    });
    return tab;
  }

  generateCode(i){
    var text = this.getOutputData(i);
    this.html = '<form [formGroup]="form" (ngSubmit)="onSubmit()">' + '\n';
    for(let ind in text) {
      this.html = this.html +
      '<div class="form-group">' + '\n'+
      '   <label for='+ind+'>'+ind+'</label>' + '\n'+
      '   <input id='+ind+' type="text"'+' class="form-control"> '+text[ind] + '\n'+
      '</div>' +'\n';

    }

    this.html = this.html + '<div *ngIf="active">\n' +
      '   <button class="btn btn-primary" type="submit" >Submit</button>\n' +
      '</div>' + '\n' +
      '</form>';
    this.payLoad = this.html;
  }

}
