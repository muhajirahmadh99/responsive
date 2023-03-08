import { Component } from '@angular/core';
import { OrderdetailsService } from 'src/app/service/orderdetails.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  constructor(private service : OrderdetailsService){}
  cardata : any;
  ngOnInit (): void{
     this.cardata = this.service.cardetails;
  }

}
