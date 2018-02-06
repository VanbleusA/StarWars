import { Component } from '@angular/core';
import { NavController, NavParams, ViewController } from 'ionic-angular';

@Component({
  selector: 'page-specie',
  templateUrl: 'specie.html'
})
export class DetailSpecie {
  selectedItem: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController) {
    this.selectedItem = navParams.data;
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }
}
