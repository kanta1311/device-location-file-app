import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { Device } from '@awesome-cordova-plugins/device/ngx';
import { DeviceMotion } from '@awesome-cordova-plugins/device-motion/ngx';
import { Geolocation } from '@awesome-cordova-plugins/geolocation/ngx';
import { NativeGeocoder} from '@awesome-cordova-plugins/native-geocoder/ngx';
import { PDFGenerator } from '@ionic-native/pdf-generator/ngx';
import { FileOpener } from '@awesome-cordova-plugins/file-opener/ngx';
import { HttpClientModule } from '@angular/common/http';
import { File } from '@ionic-native/file/ngx';
import { HTTP } from '@ionic-native/http/ngx';
@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule,HttpClientModule],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    Device,DeviceMotion,Geolocation,NativeGeocoder,PDFGenerator,FileOpener,File, HTTP],
  bootstrap: [AppComponent],
})
export class AppModule {}
