import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OrderdetailsService } from 'src/app/service/orderdetails.service';



@Component({
  selector: 'app-menupage',
  templateUrl: './menupage.component.html',
  styleUrls: ['./menupage.component.scss']
})
export class MenupageComponent {
  constructor (private param : ActivatedRoute,private service : OrderdetailsService){}
  getmenuid : any;
  menudata : any;

  ngOnInit() : void {

    this.getmenuid = this.param.snapshot.paramMap.get('id');
    // console.log(this.getmenuid,'getmenu');

    if(this.getmenuid)
    {
      this.menudata = this.service.cardetails.filter((value)=>{
        return value.id == this.getmenuid;
      })
    }

  }
}
