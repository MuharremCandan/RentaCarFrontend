import { Car } from "./car";
import { CarImage } from "./carImage";

export interface CarDetail extends Car{
  carImage: CarImage[];
}
