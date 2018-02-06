import { Component } from '@angular/core';
import { NavController, NavParams, ViewController } from 'ionic-angular';

@Component({
  selector: 'page-people',
  templateUrl: 'people.html'
})
export class DetailPeople {
  selectedItem: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController) {
    this.selectedItem = navParams.data;
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }
}
