import { Component, OnInit } from "@angular/core";
import { WebsocketService } from "./websocket.service";
import { StockService } from "./stock.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
  providers: [WebsocketService, StockService]
})
export class AppComponent {
  data: any
  constructor(private stockService: StockService) {
    stockService.messages.subscribe(msg => {
      console.log("Response from websocket: " + msg.author);
      this.data = msg;
    });
    
  }

  ngOnInit() {
    // ..
  }

  private message = {
    author: "Yogesh Nogia",
    message: "this is a test message"
  };

  sendMsg() {
    console.log("new message from client to websocket: ", this.message);
    this.stockService.messages.next(this.message);
    this.message.message = "";
  }
}
