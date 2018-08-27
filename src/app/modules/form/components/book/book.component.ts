import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {CatalogService} from '../../../catalog/catalog.service';
import {FormBuilder} from '@angular/forms';
import {Car} from '../../../../models/car';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {

  car: Car;
  constructor(private route: ActivatedRoute,
              private catalogService: CatalogService,
              public fb: FormBuilder) {}

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      let carId = +params.get('id');
      this.catalogService.getCarById(carId).subscribe(car =>{
        this.car = car;
      });
    })
  }

  submit(f){
    let contract = f.value;
    var today = new Date();
    contract['contractDate']= today;
    contract['carId']= 1;
    this.catalogService.saveContract(contract).subscribe(reponse =>{
      console.log(reponse);
    })
  }

}
