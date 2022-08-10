import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(public navCtrl:NavController) {}

  gotoDevicePage(){
    this.navCtrl.navigateForward('device-info')
  }

  gotoGeolocationPage(){
    this.navCtrl.navigateForward('geolocation')
  }
  gotoPDFGeneratePage(){
    this.navCtrl.navigateForward('pdfgenerator')
  }
}
