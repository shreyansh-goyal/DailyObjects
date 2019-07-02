import { Component, OnInit } from '@angular/core';
import {itemService} from "../shared/item.service"
@Component({
  selector: 'app-shoppingscreen',
  templateUrl: './shoppingscreen.component.html',
  styleUrls: ['./shoppingscreen.component.sass']
})
export class ShoppingscreenComponent implements OnInit {
  items: any;
  constructor(private itemService:itemService) {
  }

  ngOnInit() {
    this.itemService.fetchLadiesHandbag().subscribe(
      (data:any)=>{
          this.itemService.ItemData=data.data.slice();
          this.items = this.itemService.ItemData.slice();
          console.log(this.itemService.ItemData);
      },
      (err)=>{
          console.log(err);
      },
      ()=>{
          console.log("completes with the fetch call");
      }
  )
  }

}
