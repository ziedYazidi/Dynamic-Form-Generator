import {ModuleWithProviders, NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {FormComponent} from './components/form/form.component';
import {HttpClientModule} from '@angular/common/http';
import {JsonService} from './shared/services/json.service';
import {XmlService} from './shared/services/xml.service';
import {DataTablesModule} from 'angular-datatables';
import { GeneratedCodeComponent } from './components/generated-code/generated-code.component';
import { GridComponent } from './components/grid/grid.component';
import {MatFormFieldModule, MatInputModule, MatSelectModule} from '@angular/material';
import { MatDialogModule } from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {UserDialogComponent} from './components/user-dialog/user-dialog.component';

@NgModule({
  imports: [CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    DataTablesModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    MatDialogModule,
    BrowserAnimationsModule
  ],
  declarations: [
    FormComponent,
    GeneratedCodeComponent,
    GridComponent,
    UserDialogComponent
  ],

  exports: [FormComponent, FormsModule, GridComponent, GeneratedCodeComponent],
  entryComponents:[
    UserDialogComponent
  ]
})
export class FormGeneratorModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: FormGeneratorModule,
      providers: [JsonService, XmlService]
    };
  }
}
