import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ItemCardComponent } from './item-card/item-card.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {itemService} from "../app/shared/item.service"
import {dataServices} from "../app/shared/data.service"
import {HttpClientModule} from "@angular/common/http";
import { ShoppingscreenComponent } from './shoppingscreen/shoppingscreen.component'
import {MatToolbarModule} from '@angular/material/toolbar'; 
@NgModule({
  declarations: [
    AppComponent,
    ItemCardComponent,
    ShoppingscreenComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule,
    HttpClientModule,
    MatToolbarModule
  ],
  providers: [itemService,dataServices],
  bootstrap: [AppComponent]
})
export class AppModule { }
