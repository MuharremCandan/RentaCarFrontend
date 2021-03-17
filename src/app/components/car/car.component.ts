import { Component, OnInit } from '@angular/core';
import { Car } from 'src/app/models/entities/car';
import { CarService } from 'src/app/services/car.service/car.service';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css'],
})
export class CarComponent implements OnInit {
  cars: Car[] = [];
dataLoaded=false;

  constructor(private carService: CarService) {}

  ngOnInit(): void {
    this.getCars();
  }

  getCars() {
    this.carService.getCars().subscribe((response) => {
      this.cars = response.data
      this.dataLoaded=true;
    });
  }
}

//.subscribe(response=>{this.cars = response.data}  bu kodun amacı => asenkron çalışıyor mesela sıralı çalışma vardır ya üstten aşağı burda ise o değil alttaki daha önce çalışabilir.
