import { Component } from "@angular/core";
import { NavController, NavParams, ModalController } from "ionic-angular";
import { StarWarsServiceProvider } from '../../providers/star-wars-service/star-wars-service';
import { ListPage } from "../list/list";
import { AssociationPage } from "../association/association";

@Component({
  selector: "page-theme",
  templateUrl: "theme.html"
})
export class ThemePage {
  resources: Array<{type: number, title: string, icon: string, data: any}>;

  constructor(public navCtrl: NavController, public navParams: NavParams, public modalCtrl: ModalController, public starWarsService: StarWarsServiceProvider) {
    this.resources = [];
    this.resources.push({
      type: 1,
      title: "Personnages",
      icon: "darth_vader",
      data: null
    });
    this.resources.push({
      type: 2,
      title: "Films",
      icon: "leia_organa",
      data: null
    });
    this.resources.push({
      type: 3,
      title: "Vaisseaux",
      icon: "luke_skywalker",
      data: null
    });
    this.resources.push({
      type: 4,
      title: "Véhicules",
      icon: "owen_lars",
      data: null
    });
    this.resources.push({
      type: 5,
      title: "Espèces",
      icon: "r2-d2",
      data: null
    });
    this.resources.push({
      type: 6,
      title: "Planètes",
      icon: "c-3po",
      data: null
    });
  }

  associationTapped(event) {
    this.navCtrl.push(AssociationPage);
  }

  itemTapped(event, item) {
    // TODO local storage des requêtes
    switch (item.type) {
      case 1:
        this.loadPeople(item);
        break;
      case 2:
        this.loadFilms(item);
        break;
      case 3:
        this.loadStarships(item);
        break;
      case 4:
        this.loadVehicles(item);
        break;
      case 5:
        this.loadSpecies(item);
        break;
      case 6:
        this.loadPlanets(item);
        break;
    }
  }

  loadPeople(item) {
    this.starWarsService.loadPeople()
    .then(data => {
      var items = [];
      data["results"].forEach(element => {
        items.push({
          type: item.type,
          title: element.name,
          icon: element.name.toLowerCase().replace(' ', '_'),
          data: element
        });
      });
      this.navCtrl.push(ListPage, { item: item, items: items });
    });
  }

  loadFilms(item) {
    this.starWarsService.loadFilms()
    .then(data => {
      var items = [];
      data["results"].forEach(element => {
        items.push({
          type: item.type,
          title: "Star Wars - " + element.title,
          icon: element.title.toLowerCase().replace(' ', '_'),
          data: element
        });
      });
      this.navCtrl.push(ListPage, { item: item, items: items });
    });
  }

  loadStarships(item) {
    this.starWarsService.loadStarships()
    .then(data => {
      var items = [];
      data["results"].forEach(element => {
        items.push({
          type: item.type,
          title: element.name,
          icon: element.name.toLowerCase().replace(' ', '_'),
          data: element
        });
      });
      this.navCtrl.push(ListPage, { item: item, items: items });
    });
  }

  loadVehicles(item) {
    this.starWarsService.loadVehicles()
    .then(data => {
      var items = [];
      data["results"].forEach(element => {
        items.push({
          type: item.type,
          title: element.name,
          icon: element.name.toLowerCase().replace(' ', '_'),
          data: element
        });
      });
      this.navCtrl.push(ListPage, { item: item, items: items });
    });
  }

  loadSpecies(item) {
    this.starWarsService.loadSpecies()
    .then(data => {
      var items = [];
      data["results"].forEach(element => {
        items.push({
          type: item.type,
          title: element.name,
          icon: element.name.toLowerCase().replace(' ', '_'),
          data: element
        });
      });
      this.navCtrl.push(ListPage, { item: item, items: items });
    });
  }

  loadPlanets(item) {
    this.starWarsService.loadPlanets()
    .then(data => {
      var items = [];
      data["results"].forEach(element => {
        items.push({
          type: item.type,
          title: element.name,
          icon: element.name.toLowerCase().replace(' ', '_'),
          data: element
        });
      });
      this.navCtrl.push(ListPage, { item: item, items: items });
    });
  }
}
