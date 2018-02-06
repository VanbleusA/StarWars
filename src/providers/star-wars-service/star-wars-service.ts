import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the StarWarsServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class StarWarsServiceProvider {

  apiRoot: string;

  constructor(public http: HttpClient) {
    this.apiRoot = "https://swapi.co/api/";
  }

  loadTheme(theme) {
    return new Promise(resolve => {
      this.http.get(this.apiRoot + theme + "/")
        .subscribe(data => { resolve(data); });
    });
  }

  loadPeople() {
    return this.loadTheme("people");
  }

  loadFilms() {
    return this.loadTheme("films");
  }

  loadStarships() {
    return this.loadTheme("starships");
  }

  loadVehicles() {
    return this.loadTheme("vehicles");
  }

  loadSpecies() {
    return this.loadTheme("species");
  }

  loadPlanets() {
    return this.loadTheme("planets");
  }

}
