import {ModuleWithProviders, NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {FormComponent} from './form/form.component';
import {HttpClientModule} from '@angular/common/http';
import {JsonService} from '../services/json.service';
import {XmlService} from '../services/xml.service';
import {DataTablesModule} from 'angular-datatables';

@NgModule({
  imports: [CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    DataTablesModule],
  declarations: [
    FormComponent
  ],

  exports: [FormComponent]
})
export class FormGeneratorModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: FormGeneratorModule,
      providers: [JsonService, XmlService]
    }
  }
}
