import { Component } from '@angular/core';
import { NavController, NavParams, ViewController } from 'ionic-angular';

@Component({
  selector: 'page-vehicle',
  templateUrl: 'vehicle.html'
})
export class DetailVehicle {
  selectedItem: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController) {
    this.selectedItem = navParams.data;
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }
}
