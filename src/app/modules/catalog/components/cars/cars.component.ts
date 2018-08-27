import { Component, OnInit } from '@angular/core';
import {CatalogService} from '../../catalog.service';
import {Car} from '../../../../models/car';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css']
})
export class CarsComponent implements OnInit {

  cars: Car[];
  constructor(private catalogService: CatalogService) {
  }

  ngOnInit() {
    this.catalogService.findAllCars().subscribe(cars=>{
      this.cars = cars;
    })
  }

}
