import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Klaus';
  m1 = 'a';
  success = false;
  image;

  constructor(){
  }

  ngOnInit() {
    this.m1 = "hello from app.component.ts";

    // Set up to receive messages from the service worker when the app is in the background.
    navigator.serviceWorker.addEventListener('message', (event:MessageEvent) => {

      if(event.data.hasOwnProperty('image')){
        this.image = event.data;
        this.success = true;
        console.log(event.data);
      }
    });
  }
}
