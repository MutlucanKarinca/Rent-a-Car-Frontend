import { Customer } from "./customer";

export interface CustomerResponseModel extends Customer{
    data:Customer[]
}