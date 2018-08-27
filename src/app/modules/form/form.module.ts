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
import {MatDatepickerModule, MatFormFieldModule, MatInputModule, MatNativeDateModule, MatSelectModule} from '@angular/material';
import { MatDialogModule } from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {UserDialogComponent} from './components/user-dialog/user-dialog.component';
import { HomeComponent } from '../../shared/components/home/home.component';
import { CarsComponent } from '../catalog/components/cars/cars.component';
import { DauphineComponent } from './components/dauphine/dauphine.component';
import { BookComponent } from './components/book/book.component';

@NgModule({
  imports: [CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatDatepickerModule,
    MatNativeDateModule,
    DataTablesModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    MatDialogModule,
    BrowserAnimationsModule,
    HttpClientModule
  ],
  declarations: [
    FormComponent,
    GeneratedCodeComponent,
    GridComponent,
    UserDialogComponent,
    HomeComponent,
    DauphineComponent,
    BookComponent
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
