import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CarsComponent} from './components/cars/cars.component';
import {RouterModule} from '@angular/router';
import { CarComponent } from './components/car/car.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [
    CarsComponent,
    CarComponent
  ]
})
export class CatalogModule {

}
