import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {Textarea} from '../models/textarea';
import {HttpClient} from '@angular/common/http';
import { map } from 'rxjs/operators';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {isObject} from 'util';

@Injectable({
  providedIn: 'root'
})
export class JsonService {
  json: any;
  constructor(private http: HttpClient) { }

  // Create Text Area from File
  getInputs(data: string): Textarea[] {
    let inputs: Textarea[] = [];
    this.json = data;
    var obj = JSON.parse(this.json);
    for(let ind in obj) {
      if(typeof obj[ind] === 'object' ){
        let object = obj[ind];
        for(let elem in object){
          let _input: Textarea = {name:elem,value:object[elem]};
          inputs.push(_input);
        }
      }
      else{
        let _input: Textarea = {name:ind,value:obj[ind]};
        inputs.push(_input);
      }
    }
    console.log(inputs);
    return inputs;

  }


//  Create formGroup from TextAreas
  toFormGroup(inputs: Textarea[]): FormGroup{
    let group: any = [];
    inputs.forEach(input => {
      group[input.name] = new FormControl(input.value, Validators.required);
    });
    return new FormGroup(group);
  }


}
