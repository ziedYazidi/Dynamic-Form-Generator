import { Component, OnInit } from '@angular/core';
import {Field} from '../../../../models/field';
import {UserFieldAdapter} from '../../../../models/userFieldAdapter';
import {FormArray, FormGroup} from '@angular/forms';
import {User} from '../../../../models/user';
import {JsonService} from '../../shared/services/json.service';
import {UserDialogComponent} from '../user-dialog/user-dialog.component';
import {MatDialog} from '@angular/material';

@Component({
  selector: 'app-dauphine',
  templateUrl: './dauphine.component.html',
  styleUrls: ['./dauphine.component.css']
})
export class DauphineComponent implements OnInit {

  inputs: any[] = [];
  form: FormGroup = new FormGroup({
    subForms: new FormArray([])
  });
  active: boolean = false;

  constructor(private jsonService: JsonService,
              public dialog: MatDialog) { }

  ngOnInit() {
  }
  get subForms(){
    return this.form.get('subForms');
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

  public openUserDialog(user: User) {
    let dialogRef = this.dialog.open(UserDialogComponent, {
      data: {
        user: user,
      },
    });
  }

}
