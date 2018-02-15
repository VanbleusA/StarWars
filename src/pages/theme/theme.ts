import { Component } from "@angular/core";
import { NavController, NavParams, LoadingController } from "ionic-angular";
import { StarWarsServiceProvider } from '../../providers/star-wars-service/star-wars-service';
import { ListPage } from "../list/list";
import { AssociationPage } from "../association/association";

@Component({
  selector: "page-theme",
  templateUrl: "theme.html"
})
export class ThemePage {
  resources: Array<{type: number, title: string, icon: string, full: any}>;

  constructor(public navCtrl: NavController, public navParams: NavParams, public loadingCtrl: LoadingController, public starWarsService: StarWarsServiceProvider) {
    // Initialisation des thèmes de l'application
    this.resources = [];
    this.resources.push({ type: 1,    title: "Personnages",  icon: "darth_vader",     full: null });
    this.resources.push({ type: 2,    title: "Films",        icon: "leia_organa",     full: null });
    this.resources.push({ type: 3,    title: "Vaisseaux",    icon: "luke_skywalker",  full: null });
    this.resources.push({ type: 4,    title: "Véhicules",    icon: "owen_lars",       full: null });
    this.resources.push({ type: 5,    title: "Espèces",      icon: "r2-d2",           full: null });
    this.resources.push({ type: 6,    title: "Planètes",     icon: "c-3po",           full: null });
  }

  // Méthode de navigation vers la page de l'association
  associationTapped(event) {
    this.navCtrl.push(AssociationPage);
  }

  // Réaction au clic sur un thème
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

  // Chargement des données des personnages
  loadPeople(item) {
    // Création et affichage du loader
    var loader = this.loadingCtrl.create();
    loader.present();

    this.starWarsService.loadPeople()
    .then(data => {
      // Chargement des résultats
      var items = [];
      data["results"].forEach(element => {
        items.push({
          type: item.type,
          title: element.name,
          icon: element.name.toLowerCase().replace(' ', '_'),
          full: element
        });
      });
      this.navCtrl.push(ListPage, { item: item, items: items });
      
      // Enlèvement du loader
      loader.dismiss();
    })
    .catch(exception => {
      console.error(exception);
      
      // Enlèvement du loader
      loader.dismiss();
    });
  }

  // Chargement des données des films
  loadFilms(item) {
    // Création et affichage du loader
    var loader = this.loadingCtrl.create();
    loader.present();

    this.starWarsService.loadFilms()
    .then(data => {
      // Chargement des résultats
      var items = [];
      data["results"].forEach(element => {
        items.push({
          type: item.type,
          title: "Star Wars - " + element.title,
          icon: element.title.toLowerCase().replace(' ', '_'),
          full: element
        });
      });
      this.navCtrl.push(ListPage, { item: item, items: items });
      
      // Enlèvement du loader
      loader.dismiss();
    })
    .catch(exception => {
      console.error(exception);
      
      // Enlèvement du loader
      loader.dismiss();
    });
  }

  // Chargement des données des vaisseaux
  loadStarships(item) {
    // Création et affichage du loader
    var loader = this.loadingCtrl.create();
    loader.present();

    this.starWarsService.loadStarships()
    .then(data => {
      // Chargement des résultats
      var items = [];
      data["results"].forEach(element => {
        items.push({
          type: item.type,
          title: element.name,
          icon: element.name.toLowerCase().replace(' ', '_'),
          full: element
        });
      });
      this.navCtrl.push(ListPage, { item: item, items: items });
      
      // Enlèvement du loader
      loader.dismiss();
    })
    .catch(exception => {
      console.error(exception);
      
      // Enlèvement du loader
      loader.dismiss();
    });
  }

  // Chargement des données des véhicules
  loadVehicles(item) {
    // Création et affichage du loader
    var loader = this.loadingCtrl.create();
    loader.present();

    this.starWarsService.loadVehicles()
    .then(data => {
      // Chargement des résultats
      var items = [];
      data["results"].forEach(element => {
        items.push({
          type: item.type,
          title: element.name,
          icon: element.name.toLowerCase().replace(' ', '_'),
          full: element
        });
      });
      this.navCtrl.push(ListPage, { item: item, items: items });
      
      // Enlèvement du loader
      loader.dismiss();
    })
    .catch(exception => {
      console.error(exception);
      
      // Enlèvement du loader
      loader.dismiss();
    });
  }

  // Chargement des données des espèces
  loadSpecies(item) {
    // Création et affichage du loader
    var loader = this.loadingCtrl.create();
    loader.present();

    this.starWarsService.loadSpecies()
    .then(data => {
      // Chargement des résultats
      var items = [];
      data["results"].forEach(element => {
        items.push({
          type: item.type,
          title: element.name,
          icon: element.name.toLowerCase().replace(' ', '_'),
          full: element
        });
      });
      this.navCtrl.push(ListPage, { item: item, items: items });
      
      // Enlèvement du loader
      loader.dismiss();
    })
    .catch(exception => {
      console.error(exception);
      
      // Enlèvement du loader
      loader.dismiss();
    });
  }

  // Chargement des données des planètes
  loadPlanets(item) {
    // Création et affichage du loader
    var loader = this.loadingCtrl.create();
    loader.present();

    this.starWarsService.loadPlanets()
    .then(data => {
      // Chargement des résultats
      var items = [];
      data["results"].forEach(element => {
        items.push({
          type: item.type,
          title: element.name,
          icon: element.name.toLowerCase().replace(' ', '_'),
          full: element
        });
      });
      this.navCtrl.push(ListPage, { item: item, items: items });
      
      // Enlèvement du loader
      loader.dismiss();
    })
    .catch(exception => {
      console.error(exception);

      // Enlèvement du loader
      loader.dismiss();
    });
  }
}
