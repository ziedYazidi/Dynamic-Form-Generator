import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {environment} from '../../../environments/environment';
import {Car} from '../../models/car';
import {Contract} from '../../models/contract';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})




export class CatalogService {

  private kongGateway: string;
  constructor(private http: HttpClient) {
    this.kongGateway = environment.kongGateway;
  }

  bookingHttpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
      'Host':'tn.bd.booking'
    })
  };
  catalogHttpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
      'Host':'tn.bd.catalog'
    })
  };

  findAllCars(){
    return this.http.get<Car[]>(this.kongGateway + "/car/findAll", this.catalogHttpOptions);
  }

  getCarById(carId: number){
    return this.http.get<Car>(this.kongGateway + "/car/find/" + carId, this.catalogHttpOptions);
  }

  saveContract(contract: Contract): Observable<Contract>{
    return this.http.post<Contract>(this.kongGateway+ "/contract/save", contract, this.bookingHttpOptions)
  }
}
