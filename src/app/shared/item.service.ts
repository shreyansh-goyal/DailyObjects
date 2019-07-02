import {Items} from "../models/item.model";
import {dataServices} from "./data.service"
import { OnInit } from '@angular/core';
import {Injectable} from "@angular/core"
@Injectable()
export class itemService implements OnInit{
    ItemData:any;                        //ItemData:Items[];
    constructor(private dataservice:dataServices){};
    ngOnInit()
    {
    }
    fetchLadiesHandbag()
    {
        return this.dataservice.getLadiesHandbagData();
    }
}