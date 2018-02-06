import { Component } from '@angular/core';
import { NavController, NavParams, ModalController } from 'ionic-angular';
import { DetailPeople } from '../people/people';
import { DetailFilm } from '../film/film';
import { DetailStarship } from '../starship/starship';
import { DetailVehicle } from '../vehicle/vehicle';
import { DetailSpecie } from '../specie/specie';
import { DetailPlanet } from '../planet/planet';

@Component({
  selector: 'page-list',
  templateUrl: 'list.html'
})
export class ListPage {
  selectedItem: any;
  items: Array<{id: number, title: string, icon: string, data: any}>;

  constructor(public navCtrl: NavController, public navParams: NavParams, public modalCtrl: ModalController) {
    this.selectedItem = navParams.get('item');
    this.items = navParams.get('items');
  }

  itemTapped(event, item) {
    let modal = this.modalCtrl.create(DetailPeople, item);
    switch (item.id) {
      case 2:
        modal = this.modalCtrl.create(DetailFilm, item);
        break;
      case 3:
        modal = this.modalCtrl.create(DetailStarship, item);
        break;
      case 4:
        modal = this.modalCtrl.create(DetailVehicle, item);
        break;
      case 5:
        modal = this.modalCtrl.create(DetailSpecie, item);
        break;
      case 6:
        modal = this.modalCtrl.create(DetailPlanet, item);
        break;
    }
    modal.present();
  }
}
