import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { WebsocketService } from './websocket.service';
import { StockService } from './stock.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    WebsocketService,
    StockService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
