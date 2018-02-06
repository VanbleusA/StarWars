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
  resources: Array<{title: string, theme: string, url: string, icon: string}>;

  constructor(public navCtrl: NavController, public navParams: NavParams, public modalCtrl: ModalController, public starWarsService: StarWarsServiceProvider) {
    this.resources = [];
    this.resources.push({
      title: "Personnages",
      theme: "people",
      icon: "luke_skywalker",
      url: ""
    });
    this.resources.push({
      title: "Films",
      theme: "films",
      icon: "luke_skywalker",
      url: ""
    });
    this.resources.push({
      title: "Vaisseaux",
      theme: "starships",
      icon: "luke_skywalker",
      url: ""
    });
    this.resources.push({
      title: "Véhicules",
      theme: "vehicles",
      icon: "luke_skywalker",
      url: ""
    });
    this.resources.push({
      title: "Espèces",
      theme: "species",
      icon: "luke_skywalker",
      url: ""
    });
    this.resources.push({
      title: "Planètes",
      theme: "planets",
      icon: "luke_skywalker",
      url: ""
    });
  }

  associationTapped(event) {
    this.navCtrl.push(AssociationPage);
  }

  itemTapped(event, item) {
    this.starWarsService.loadTheme(item.theme)
    .then(data => {
      var items = [];
      data.results.forEach(element => {
        items.push({
          title: element.name,
          theme: item.theme,
          url: element.url,
          icon: element.name.toLowerCase().replace(' ', '_')
        });
      });
      this.navCtrl.push(ListPage, { item: item, items: items });
    });
  }
}
