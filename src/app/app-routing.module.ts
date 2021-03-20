import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrandComponent } from './components/brand/brand.component';
import { CarDetailComponent } from './components/car-detail/car-detail.component';
import { CarImageComponent } from './components/car-image/car-image.component';
import { CarComponent } from './components/car/car.component';
import { ColorComponent } from './components/color/color.component';
import { CustomerComponent } from './components/customer/customer.component';
import { RentalComponent } from './components/rental/rental.component';
import { CarImageService } from './services/carImage.service/car-image.service';

const routes: Routes = [
  { path: '', pathMatch: 'full', component: CarComponent }, // ekranda ilk ne gösterilsin (tıklanmadığında)
  { path: 'cars', component: CarComponent },
  { path: 'cars/:brandId', component: CarComponent },
  { path: 'cars/:colorId', component: CarComponent },
  { path: 'cars/:carId', component: CarComponent },
  { path: 'cars/car/:carId', component: CarImageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
