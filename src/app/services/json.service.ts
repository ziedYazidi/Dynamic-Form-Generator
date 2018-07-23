import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {Textarea} from '../models/textarea';
import {HttpClient} from '@angular/common/http';
import { map } from 'rxjs/operators';
import {FormControl, FormGroup, ValidatorFn, Validators} from '@angular/forms';
import {isObject} from 'util';
import {InputValidators} from '../components/form/input.validators';

@Injectable({
  providedIn: 'root'
})
export class JsonService {
  json: any;
  constructor(private http: HttpClient) { }

  // Create Text Area from File
  getInputs(data: string): any[] {
    let inputs: any[] = [];
    this.json = data;
    var obj = JSON.parse(this.json);
    if(typeof obj[0] === 'object' ){
      for(let ind in obj) {
        let object = obj[ind];
        let tab: Textarea[]= [];
        console.log("OBJECT", object);
        for(let elem in object){
          let _input: Textarea = {name:elem,value:object[elem]};
          tab.push(_input);
        }
        inputs.push(tab)
      }
    }
    else {
      let tab: Textarea[]= [];
      for(let elem in obj){
        let _input: Textarea = {name: elem, value:obj[elem]};
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
      group[input.name] = new FormControl(input.value, InputValidators.validate(input.value.option));
    });
    return new FormGroup(group);
  }


}
