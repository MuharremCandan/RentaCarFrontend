import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Rental } from 'src/app/models/entities/rental';
import { ListResponseModel } from 'src/app/models/responses/listResponseModel';


@Injectable({
  providedIn: 'root',
})
export class RentalService {
  apiUrl = 'https://localhost:44379/api/rentals/getdetail';
  constructor(private httpClient: HttpClient) {}

  getRentals(): Observable<ListResponseModel<Rental>> {
    return this.httpClient.get<ListResponseModel<Rental>>(this.apiUrl);
  }
}
