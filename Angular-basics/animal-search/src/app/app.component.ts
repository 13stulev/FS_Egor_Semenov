import { Component, OnInit } from '@angular/core';
import { Animal, DataService } from "./data.service";
import {Observable, pipe} from "rxjs";
import {FormControl} from "@angular/forms";
import {map, startWith} from "rxjs/operators";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = "no";
  _hideItem: boolean = false;
  _animals: Animal[];
  _searchText: string = "";



  constructor() {
    this._animals = DataService.getAnimals();
  }

  ngOnInit() {
    this._animals = DataService.getAnimals();
  }

  filterArray(value:string) : Animal[]{
    return this._animals.filter(e => e.name.includes(value));
  }

  _hideCats() {
    this._hideItem = !this._hideItem;
    if(this._hideItem) {
      this._animals = this._animals.filter((animal: Animal) => animal.breed !== "Котик");
    } else {
      this._animals = DataService.getAnimals();
    }
  }
}


