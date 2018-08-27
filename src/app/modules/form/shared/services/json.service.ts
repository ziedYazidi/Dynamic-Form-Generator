import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {Field} from '../../../../models/field';
import {HttpClient} from '@angular/common/http';
import { map } from 'rxjs/operators';
import {FormControl, FormGroup, ValidatorFn, Validators} from '@angular/forms';
import {isObject} from 'util';
import {InputValidators} from '../validators/input.validators';
import {environment} from '../../../../../environments/environment';
import {User} from '../../../../models/user';

@Injectable({
  providedIn: 'root'
})
export class JsonService {
  json: any;
  private host: string;
  constructor(private http: HttpClient) {
    this.host = environment.host;
  }


  getUsers(){
    return this.http.get(this.host + "/users")
  }

  addUser(user){
    return this.http.post(this.host + "/users/", user);
  }

  // Create Text Area from File
  getInputs(data: string): any[] {
    let inputs: any[] = [];
    this.json = data;
    var obj = JSON.parse(this.json);
    if(typeof obj[0] === 'object' ){
      for(let ind in obj) {
        let object = obj[ind];
        let tab: Field[]= [];
        for(let elem in object){
          let _input: Field = {key:object[elem].key, value:object[elem].value, class:object[elem].class, option:object[elem].option};
          tab.push(_input);
        }
        inputs.push(tab)
      }
    }
    else {
      let tab: Field[]= [];
      for(let elem in obj){
        let _input: Field = {key:obj[elem].key, value:obj[elem].value, class:obj[elem].class, option:obj[elem].option};
        tab.push(_input);
      }
      inputs.push(tab);
    }
    return inputs;

  }


//  Create formGroup from TextAreas
  toFormGroup(inputs: any[]): FormGroup{
    let group: any = [];
    inputs.forEach(input => {
      console.log("OPTION", input.option);
      group[input.key] = new FormControl(input.value, InputValidators.validate(input.option));
    });
    return new FormGroup(group);
  }


}
