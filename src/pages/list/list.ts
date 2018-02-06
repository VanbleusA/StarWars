import { Component } from '@angular/core';
import { NavController, NavParams, ModalController } from 'ionic-angular';
import { DetailPage } from '../detail/detail';

@Component({
  selector: 'page-list',
  templateUrl: 'list.html'
})
export class ListPage {
  selectedItem: any;
  icons: string[];
  items: Array<{title: string, icon: string}>;

  constructor(public navCtrl: NavController, public navParams: NavParams, public modalCtrl: ModalController) {
    // If we navigated to this page, we will have an item available as a nav param
    this.selectedItem = navParams.get('item');

    // Let's populate this page with some filler content for funzies
    this.icons = ['flask', 'wifi', 'beer', 'football', 'basketball', 'paper-plane', 'american-football', 'boat', 'bluetooth', 'build'];

    this.items = [];
    for (let i = 1; i < 11; i++) {
      this.items.push({
        title: 'Theme ' + i,
        icon: this.icons[i - 1]
      });
    }
  }

  itemTapped(event, item) {
    //this.navCtrl.push(DetailPage, { item: item });
    let modal = this.modalCtrl.create(DetailPage, item);
    modal.present();
  }
}
