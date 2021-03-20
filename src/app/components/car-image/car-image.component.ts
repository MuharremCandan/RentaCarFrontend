import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Car } from 'src/app/models/entities/car';
import { CarImage } from 'src/app/models/entities/carImage';
import { CarService } from 'src/app/services/car.service/car.service';
import { CarImageService } from 'src/app/services/carImage.service/car-image.service';

@Component({
  selector: 'app-car-image',
  templateUrl: './car-image.component.html',
  styleUrls: ['./car-image.component.css'],
})
export class CarImageComponent implements OnInit {
  carImages: CarImage[] = [];
  cars: Car[];
  car: Car;
  currentCarImage: CarImage;
  path = 'https://localhost:44379';

  constructor(
    private carImageService: CarImageService,
    private activatedRoute: ActivatedRoute,
    private carService: CarService
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      if (params['carId']) {
        this.getCarImageByCarId(params['carId']);
      } else {
        this.getCarImages();
      }
    });
    this.activatedRoute.params.subscribe((params) => {
      if (params['carId']) {
        this.getCarDetailsByCarId(params['carId']);
      } else {
      }
    });
  }

  getCarImages() {
    this.carImageService.getCarImages().subscribe((response) => {
      this.carImages = response.data;
    });
  }

  getCarImageByCarId(carId: number) {
    this.carImageService.getCarImageByCarId(carId).subscribe((response) => {
      this.carImages = response.data;
    });
  }
  getCarDetailsByCarId(carId: number) {
    this.carService.getCarByCarId(carId).subscribe((response) => {
      this.cars = response.data;
    });
  }
}
