import { Component, NgZone } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { NetbokhaldApiService } from 'src/app/services/netbokhald-api.service';

@Component({
  selector: 'app-share-photo',
  templateUrl: './share-photo.component.html',
  styleUrls: ['./share-photo.component.scss']
})
export class SharePhotoComponent {

  success;
  image;

  constructor(public netbokhaldApi: NetbokhaldApiService, public zone: NgZone) {

    this.success = false;

    console.log("Hallo");

    // Set up to receive messages from the service worker when the app is in the background.
    navigator.serviceWorker.onmessage = (event) => {
      this.zone.run(() => {
        let file = event.data.file;

        this.image = URL.createObjectURL(file);
        console.log(this.image);

        var reader = new FileReader();
        reader.readAsDataURL(file);

        reader.onloadend = () => {
          this.image = reader.result as string;
          this.success = true;

          //TODO: this.netbokhaldApi.sendImage(image);

          console.log("success", this.success);
          console.log("Base64 Image: ", this.image);
        }
      });
    };
  }


}
