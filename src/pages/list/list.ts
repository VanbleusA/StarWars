import { Component } from '@angular/core';
import { NavController, NavParams, ModalController } from 'ionic-angular';
import { DetailPage } from '../detail/detail';

@Component({
  selector: 'page-list',
  templateUrl: 'list.html'
})
export class ListPage {
  selectedItem: any;
  items: Array<{title: string, icon: string}>;
  association: {title: string, icon: string};

  constructor(public navCtrl: NavController, public navParams: NavParams, public modalCtrl: ModalController) {
    // If we navigated to this page, we will have an item available as a nav param
    this.selectedItem = navParams.get('item');

    this.items = [];
    for (let i = 1; i < 7; i++) {
      this.items.push({
        title: this.selectedItem.title + i,
        icon: "luke_skywalker"
      });
    }
  }

  itemTapped(event, item) {
    let modal = this.modalCtrl.create(DetailPage, item);
    modal.present();
  }
}
