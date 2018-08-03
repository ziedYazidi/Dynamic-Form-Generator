import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FormComponent } from './FormModule/components/form/form.component';
import {FormGeneratorModule} from './FormModule/form.module';
import {RouterModule} from '@angular/router';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    FormGeneratorModule,
    RouterModule.forRoot([
      {
        path:'',
        component:FormComponent
      }
    ])
  ],

  bootstrap: [AppComponent]
})
export class AppModule { }
