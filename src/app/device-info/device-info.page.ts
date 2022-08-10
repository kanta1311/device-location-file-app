import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Device } from '@awesome-cordova-plugins/device/ngx';
import { DeviceMotion, DeviceMotionAccelerationData } from '@awesome-cordova-plugins/device-motion/ngx';


@Component({
  selector: 'app-device-info',
  templateUrl: './device-info.page.html',
  styleUrls: ['./device-info.page.scss'],
})
export class DeviceInfoPage implements OnInit {

  currentAcceleration:any;
  subscription:any
  screenWidth:number;
  screenHeight:number;
  constructor(public navCtrl:NavController,
    public device: Device,
    private deviceMotion: DeviceMotion,) {

   }


  ngOnInit() {
  }

  getAcceleration(){
    // this.deviceMotion.getCurrentAcceleration().then((acceleration:DeviceMotionAccelerationData)=>{
    //   console.log(acceleration)
    //   this.currentAcceleration=acceleration
    // }).catch(error=>{

    // })

    this.subscription = this.deviceMotion.watchAcceleration().subscribe((acceleration: DeviceMotionAccelerationData) => {
      console.log(acceleration);
      this.currentAcceleration=acceleration
    });
  }

  stopAcceleration(){
    this.currentAcceleration.unsubscribe();
  }
}
