import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { SharePhotoComponent } from './components/share-photo/share-photo.component';
import { HomeComponent } from './components/home/home.component';
import { NetbokhaldApiService } from './services/netbokhald-api.service';

@NgModule({
  declarations: [
    AppComponent,
    SharePhotoComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ServiceWorkerModule.register('my-service-worker.js', { enabled: environment.production })
  ],
  providers: [NetbokhaldApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
