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
    this.apiRoot = "http https://swapi.co/api/";
  }

  load(url) {
    return new Promise(resolve => {
      this.http.get(url);
    });
  }

  people() {
    return new Promise(resolve => {
      this.http.get(this.apiRoot + "people");
    });
  }

  peopleById(id) {
    return new Promise(resolve => {
      this.http.get(this.apiRoot + "people/" + id);
    });
  }

}
