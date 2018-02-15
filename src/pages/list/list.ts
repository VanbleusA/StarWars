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
    // Par défaut on créé une modal pour les personnages
    let modal = this.modalCtrl.create(DetailPeople, item);
    switch (item.id) {
      case 2:
        // Modal pour les films
        modal = this.modalCtrl.create(DetailFilm, item);
        break;
      case 3:
        // Modal pour les vaisseaux
        modal = this.modalCtrl.create(DetailStarship, item);
        break;
      case 4:
        // Modal pour les véhicules
        modal = this.modalCtrl.create(DetailVehicle, item);
        break;
      case 5:
        // Modal pour les espèces
        modal = this.modalCtrl.create(DetailSpecie, item);
        break;
      case 6:
        // Modal pour les planètes
        modal = this.modalCtrl.create(DetailPlanet, item);
        break;
    }
    modal.present();
  }
}
