import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CarImage } from 'src/app/models/entities/carImage';
import { ListResponseModel } from 'src/app/models/responses/listResponseModel';

@Injectable({
  providedIn: 'root',
})
export class CarImageService {
  apiUrl = 'https://localhost:44379/api/';

  constructor(private httpClient: HttpClient) {}

  getCarImages(): Observable<ListResponseModel<CarImage>> {
    debugger;
    let newPath = this.apiUrl + 'carImages/getall';
    return this.httpClient.get<ListResponseModel<CarImage>>(newPath);
  }

  getCarImageByCarId(carId: number): Observable<ListResponseModel<CarImage>> {
    let newPath = this.apiUrl + 'carImages/getbycarid?carId=' + carId;
    return this.httpClient.get<ListResponseModel<CarImage>>(newPath);
  }
}
