import {Component, Input, OnInit, Output} from '@angular/core';
import {FormArray, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-generated-code',
  templateUrl: './generated-code.component.html',
  styleUrls: ['./generated-code.component.css']
})
export class GeneratedCodeComponent{

  @Input()
  html: string;

  @Input()
  payLoad: any;

}
