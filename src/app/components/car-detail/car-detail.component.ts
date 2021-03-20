import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CarDetail } from 'src/app/models/entities/carDetail';
import { CarImage } from 'src/app/models/entities/carImage';
import { CarDetailService } from 'src/app/services/carDetail.service/car-detail.service';
import { CarImageService } from 'src/app/services/carImage.service/car-image.service';

@Component({
  selector: 'app-car-detail',
  templateUrl: './car-detail.component.html',
  styleUrls: ['./car-detail.component.css'],
})
export class CarDetailComponent implements OnInit {
  carDetails: CarDetail[];
  carImages: CarImage[];
  constructor(
    private carDetailsService: CarDetailService,
    private activatedRoute: ActivatedRoute,
    private carImageService:CarImageService
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      return this.getCarDetailsByCarId(params['carId']);
    });
  }

  getCarDetailsByCarId(carId: number) {
    this.carDetailsService.getCarDetailsById(carId).subscribe((response) => {
      this.carDetails = response.data;
    });
  }
  getCurrentImageClass(image: CarImage) {
    if (image == this.carImages[0]) {
      return 'carousel-item active';
    } else {
      return 'carousel-item';
    }
  }
 
}
