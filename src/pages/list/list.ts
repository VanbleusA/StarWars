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

  // Réaction au clic sur un élément
  itemTapped(event, item) {
    switch (item.type) {
      case 1:
        // Modal pour les films
        this.modalCtrl.create(DetailPeople, item).present();
        break;
      case 2:
        // Modal pour les films
        this.modalCtrl.create(DetailFilm, item).present();
        break;
      case 3:
        // Modal pour les vaisseaux
        this.modalCtrl.create(DetailStarship, item).present();
        break;
      case 4:
        // Modal pour les véhicules
        this.modalCtrl.create(DetailVehicle, item).present();
        break;
      case 5:
        // Modal pour les espèces
        this.modalCtrl.create(DetailSpecie, item).present();
        break;
      case 6:
        // Modal pour les planètes
        this.modalCtrl.create(DetailPlanet, item).present();
        break;
    }
  }
}
