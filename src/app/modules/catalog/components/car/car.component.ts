import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {CatalogService} from '../../catalog.service';
import {Car} from '../../../../models/car';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent implements OnInit {

  car: Car;
  constructor(private route: ActivatedRoute, private catalogService: CatalogService) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      let carId = +params.get('id');
      this.catalogService.getCarById(carId).subscribe(car =>{
        this.car = car;
      });
    })
  }

}
