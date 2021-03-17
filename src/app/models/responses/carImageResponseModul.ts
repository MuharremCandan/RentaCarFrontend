import { CarImage } from "../entities/carImage";
import { ResponseModel } from "./responseModel";

export interface CarImageResponseModel extends ResponseModel{
    data:CarImage[]
}