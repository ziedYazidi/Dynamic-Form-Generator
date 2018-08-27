import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FormComponent } from './modules/form/components/form/form.component';
import {FormGeneratorModule} from './modules/form/form.module';
import {RouterModule} from '@angular/router';
import {HttpClientModule} from '@angular/common/http';
import {HomeComponent} from './shared/components/home/home.component';
import { NavbarComponent } from './shared/components/navbar/navbar.component';
import {CatalogModule} from './modules/catalog/catalog.module';
import {CarsComponent} from './modules/catalog/components/cars/cars.component';
import {CarComponent} from './modules/catalog/components/car/car.component';
import {DauphineComponent} from './modules/form/components/dauphine/dauphine.component';
import {BookComponent} from './modules/form/components/book/book.component';
import {GridComponent} from './modules/form/components/grid/grid.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
  ],
  imports: [
    BrowserModule,
    FormGeneratorModule,
    CatalogModule,
    RouterModule.forRoot([
      {
        path:'',
        component:HomeComponent
      },
      {
        path:'contract/:id',
        component:BookComponent
      },
      {
        path:'dauphine',
        component:DauphineComponent
      },
      {
        path:'jsonForm',
        component:FormComponent
      },
      {
        path:'cars/:id',
        component:CarComponent
      },
      {
        path:'cars',
        component:CarsComponent
      }
    ])
  ],

  bootstrap: [AppComponent]
})
export class AppModule { }
