import { Rental } from "./rental";

export interface RentalResponseModel extends Rental{
    data:Rental[]
}