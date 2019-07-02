import { Component, OnInit, Input } from '@angular/core';
import {itemService} from "../shared/item.service" 
@Component({
  selector: 'app-item-card',
  templateUrl: './item-card.component.html',
  styleUrls: ['./item-card.component.scss']
})
export class ItemCardComponent implements OnInit {
  @Input('index') index;
  itemData: any;
  constructor(private itemservice:itemService) { }

  ngOnInit() {
    this.itemData = this.itemservice.ItemData[this.index];
    console.log(this.itemData);
  }

}
