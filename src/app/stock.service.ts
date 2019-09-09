import { Injectable } from "@angular/core";
import { Observable, Subject } from "rxjs/Rx";
import 'rxjs/add/operator/map';
import { WebsocketService } from "./websocket.service";

//const STOCK_URL = "ws://stocks.mnet.website";
const STOCK_URL = "wss://echo.websocket.org";

export interface Message {
  author: string;
  message: string;
}

@Injectable({
  providedIn: 'root'
})
export class StockService {
  public messages: Subject<Message>;

  constructor(wsService: WebsocketService) {
    this.messages = <Subject<Message>>wsService.connect(STOCK_URL).map(
      (response: MessageEvent): Message => {
        let data = JSON.parse(response.data);
        console.log(data);
        return data;
      }
    );
  }
}