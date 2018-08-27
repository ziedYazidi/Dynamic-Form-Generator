import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { NotificationsService } from "angular4-simple-notifications";
import { Router } from "@angular/router";
import { User } from "../../../../models/user";
import {JsonService} from '../../shared/services/json.service';

@Component({
  selector: 'app-user-dialog',
  templateUrl: 'user-dialog.component.html',
  styleUrls: ['user-dialog.component.scss']
})
export class UserDialogComponent implements OnInit {

  public form: FormGroup;
  public user: User;

  constructor(public dialogRef: MatDialogRef<UserDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    public fb: FormBuilder, private service: JsonService) {
    this.form = this.fb.group({
      id: null,
      nom: [null, Validators.compose([Validators.required])],
      prenom: [null, Validators.compose([Validators.required])],
      email: [null, Validators.compose([Validators.required])],
      //Validators.pattern("^[a-z0-9._%+-]+@dauphine.tn$")
      photo: null,
      firstLogin: null,
      pwd: null,
      etatChangementPwd: null,
      histo: null,
    });
  }

  ngOnInit() {
    this.user = this.data.user;
    if (this.user) {
      this.form.setValue(this.user);
    }
    else {
      this.user = new User();

    }
  }

  close(): void {
    this.dialogRef.close();
  }

  /**
   *
   */
  save() {
    this.service.addUser(this.form.value).subscribe(resp => {
      let message;
      if (this.form.value.id != null) {
        message = "modifié";
      } else {
        message = "ajouté";
      }
      this.dialogRef.close();
    });
  }

}
