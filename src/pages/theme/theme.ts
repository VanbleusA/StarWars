import { Component } from "@angular/core";
import { NavController, NavParams, LoadingController } from "ionic-angular";
import { Storage } from '@ionic/storage';
import { StarWarsServiceProvider } from '../../providers/star-wars-service/star-wars-service';
import { ListPage } from "../list/list";
import { AssociationPage } from "../association/association";

@Component({
  selector: "page-theme",
  templateUrl: "theme.html"
})
export class ThemePage {
  resources: Array<{type: number, title: string, icon: string, full: any}>;

  constructor(public navCtrl: NavController, public navParams: NavParams, public loadingCtrl: LoadingController, public storage: Storage, public starWarsService: StarWarsServiceProvider) {
    
    // Initialisation des thèmes de l'application
    this.resources = [];
    this.resources.push({ type: 1,    title: "Personnages",  icon: "personnages",   full: null });
    this.resources.push({ type: 2,    title: "Films",        icon: "films",         full: null });
    this.resources.push({ type: 3,    title: "Vaisseaux",    icon: "vaisseaux",     full: null });
    this.resources.push({ type: 4,    title: "Véhicules",    icon: "vehicules",     full: null });
    this.resources.push({ type: 5,    title: "Espèces",      icon: "especes",       full: null });
    this.resources.push({ type: 6,    title: "Planètes",     icon: "planetes",      full: null });
  }

  // Méthode de navigation vers la page de l'association
  associationTapped(event) {
    this.navCtrl.push(AssociationPage);
  }

  // Réaction au clic sur un thème
  itemTapped(event, item) {
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
    
    // Vérification des données en cache
    this.storage.get(item.title)
    .then((items) => {
      if (items) {

        // Navigation vers la liste des personnages
        this.navCtrl.push(ListPage, { item: item, items: items });
        
        // Enlèvement du loader
        loader.dismiss();
      }
      else {

        // Appel au service des personnages
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
    
          // Mise en cache des résultats
          this.storage.set(item.title, items);
    
          // Navigation vers la liste des personnages
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
    })
    .catch((exception) => {
      console.error(exception);
    });
  }

  // Chargement des données des films
  loadFilms(item) {

    // Création et affichage du loader
    var loader = this.loadingCtrl.create();
    loader.present();
    
    // Vérification des données en cache
    this.storage.get(item.title)
    .then((items) => {
      if (items) {

        // Navigation vers la liste des films
        this.navCtrl.push(ListPage, { item: item, items: items });
        
        // Enlèvement du loader
        loader.dismiss();
      }
      else {
      
        // Appel au service des films
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
  
          // Mise en cache des résultats
          this.storage.set(item.title, items);
  
          // Navigation vers la liste des films
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
    })
    .catch((exception) => {
      console.error(exception);
    });
  }

  // Chargement des données des vaisseaux
  loadStarships(item) {
    // Création et affichage du loader
    var loader = this.loadingCtrl.create();
    loader.present();
    
    // Vérification des données en cache
    this.storage.get(item.title)
    .then((items) => {
      if (items) {

        // Navigation vers la liste des vaisseaux
        this.navCtrl.push(ListPage, { item: item, items: items });
        
        // Enlèvement du loader
        loader.dismiss();
      }
      else {

        // Appel au service des vaisseaux
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
    
          // Mise en cache des résultats
          this.storage.set(item.title, items);
    
          // Navigation vers la liste des vaisseaux
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
    })
    .catch((exception) => {
      console.error(exception);
    });
  }

  // Chargement des données des véhicules
  loadVehicles(item) {

    // Création et affichage du loader
    var loader = this.loadingCtrl.create();
    loader.present();
    
    // Vérification des données en cache
    this.storage.get(item.title)
    .then((items) => {
      if (items) {

        // Navigation vers la liste des vaisseaux
        this.navCtrl.push(ListPage, { item: item, items: items });
        
        // Enlèvement du loader
        loader.dismiss();
      }
      else {

        // Appel au service des véhicules
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
    
          // Mise en cache des résultats
          this.storage.set(item.title, items);
    
          // Navigation vers la liste des véhicules
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
    })
    .catch((exception) => {
      console.error(exception);
    });
  }

  // Chargement des données des espèces
  loadSpecies(item) {

    // Création et affichage du loader
    var loader = this.loadingCtrl.create();
    loader.present();
    
    // Vérification des données en cache
    this.storage.get(item.title)
    .then((items) => {
      if (items) {

        // Navigation vers la liste des vaisseaux
        this.navCtrl.push(ListPage, { item: item, items: items });
        
        // Enlèvement du loader
        loader.dismiss();
      }
      else {

        // Appel au service des espèces
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
    
          // Mise en cache des résultats
          this.storage.set(item.title, items);
    
          // Navigation vers la liste des espèces
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
    })
    .catch((exception) => {
      console.error(exception);
    });
  }

  // Chargement des données des planètes
  loadPlanets(item) {

    // Création et affichage du loader
    var loader = this.loadingCtrl.create();
    loader.present();
    
    // Vérification des données en cache
    this.storage.get(item.title)
    .then((items) => {
      if (items) {

        // Navigation vers la liste des planètes
        this.navCtrl.push(ListPage, { item: item, items: items });
        
        // Enlèvement du loader
        loader.dismiss();
      }
      else {

        // Appel au service des planètes
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
    
          // Mise en cache des résultats
          this.storage.set(item.title, items);
    
          // Navigation vers la liste des planètes
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
    })
    .catch((exception) => {
      console.error(exception);
    });
  }
}
