import { Component } from '@angular/core';
import { NavController, NavParams, ModalController } from 'ionic-angular';
import { StarWarsServiceProvider } from '../../providers/star-wars-service/star-wars-service';
import { DetailPage } from '../detail/detail';

@Component({
  selector: 'page-list',
  templateUrl: 'list.html'
})
export class ListPage {
  selectedItem: any;
  items: Array<{title: string, icon: string}>;

  constructor(public navCtrl: NavController, public navParams: NavParams, public modalCtrl: ModalController, public starWarsService: StarWarsServiceProvider) {
    this.selectedItem = navParams.get('item');
    this.items = navParams.get('items');
  }

  itemTapped(event, item) {
    this.starWarsService.load(item.url)
    .then(data => {
      var selectedItem = {};
      selectedItem = {
        title: data.name,
        theme: item.theme,
        icon: data.name.toLowerCase().replace(' ', '_')
      };
      let modal = this.modalCtrl.create(DetailPage, selectedItem);
      modal.present();
    });
  }
}
