import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Car } from 'src/app/models/entities/car';
import { ListResponseModel } from 'src/app/models/responses/listResponseModel';

@Injectable({
  providedIn: 'root',
})
export class CarService {
  apiUrl = 'https://localhost:44379/api/';
  constructor(private httpClient: HttpClient) {}

  getCars(): Observable<ListResponseModel<Car>> {
    let newPath = this.apiUrl + 'cars/getdetails';
    return this.httpClient.get<ListResponseModel<Car>>(newPath);
  }
  getCarByCarId(carId:number): Observable<ListResponseModel<Car>> {
    let newPath = this.apiUrl + 'cars/getdetailsbycarid?carId='+carId;
    return this.httpClient.get<ListResponseModel<Car>>(newPath);
  }

  getCarsByBrand(brandId: number): Observable<ListResponseModel<Car>> {
    let newPath = this.apiUrl + 'cars/getdetailsbybrandid?brandId=' + brandId;
    return this.httpClient.get<ListResponseModel<Car>>(newPath);
  }

  getCarsByColor(colorId: number): Observable<ListResponseModel<Car>> {
    let newpath = this.apiUrl + 'cars/getdeailsbycolorid?colorId=' + colorId;
    return this.httpClient.get<ListResponseModel<Car>>(newpath);
  }
}
