import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OrderdetailsService {

  constructor() { }

  cardetails = [
    {
    id : 1,
    name : "mustang",
    cardetails : "sports",
    carimg : "assets/images/img1.jpg",
    price : 100,
  },
  {
    id : 2,
    name : "lamborgini",
    cardetails : "sports",
    carimg : "assets/images/img2.jpg",
    price : 100,
  },
  {
    id : 3,
    name : "dodge",
    cardetails : "sports",
    carimg : "assets/images/img3.jpg",
    price : 100,
  },
  {
    id : 4,
    name : "bmw",
    cardetails : "luxury",
    carimg : "assets/images/img4.jpg",
    price : 100,
  },
  {
    id : 5,
    name : "chevorlet",
    cardetails : "sports",
    carimg : "assets/images/img5.jpg",
    price : 100,
  },
  {
    id : 6,
    name : "cars",
    cardetails : "sports",
    carimg : "assets/images/banner.jpg",
    price : 100,
  }
]
}
