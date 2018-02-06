import { Component } from '@angular/core';
import { NavController, NavParams, ModalController } from 'ionic-angular';
import { ListPage } from '../list/list';
import { AssociationPage } from '../association/association';

@Component({
  selector: 'page-theme',
  templateUrl: 'theme.html'
})
export class ThemePage {
  resources: Array<{title: string, icon: string}>;

  constructor(public navCtrl: NavController, public navParams: NavParams, public modalCtrl: ModalController) {
    this.resources = [];
    this.resources.push({
      title: 'Personnages',
      icon: "luke_skywalker"
    });
    this.resources.push({
      title: 'Films',
      icon: "luke_skywalker"
    });
    this.resources.push({
      title: 'Vaisseaux',
      icon: "luke_skywalker"
    });
    this.resources.push({
      title: 'Véhicules',
      icon: "luke_skywalker"
    });
    this.resources.push({
      title: 'Espèces',
      icon: "luke_skywalker"
    });
    this.resources.push({
      title: 'Planètes',
      icon: "luke_skywalker"
    });
  }

  associationTapped(event) {
    this.navCtrl.push(AssociationPage);
  }

  itemTapped(event, item) {
    this.navCtrl.push(ListPage, { item: item });
  }
}
