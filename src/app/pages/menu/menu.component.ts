import { Component } from '@angular/core';
import { OrderdetailsService } from 'src/app/service/orderdetails.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent {
  constructor(private service : OrderdetailsService){}
  cardata : any;
  ngOnInit (): void{
     this.cardata = this.service.cardetails;
  }
}
