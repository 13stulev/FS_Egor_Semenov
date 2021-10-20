import {Component, OnInit} from '@angular/core';
import {Animal, DataService} from "./data.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent implements OnInit{

  title = "no";
  _hideItem: boolean = false;
  _animals: Animal[] = [];
  _searchText: string = "";


  ngOnInit() {
    console.log(this._animals);
  }

  setHideItem(value:boolean){
    this._hideItem = value;
  }
  setSearchText(value:string){
    this._searchText = value;
  }
  filterArray(value:string) : void{
    this._animals = DataService.getAnimals();
    this._animals = this._animals.filter(e => e.name.includes(value));
  }
  _hideCats(isHidden: boolean) {
    if(isHidden) {
      this._animals = this._animals.filter((animal: Animal) => animal.breed !== "Котик");
    } else {
      this._animals = DataService.getAnimals();
    }
  }
  returnAnimals() : Animal[]{
    this._hideCats(this._hideItem);
    this.filterArray(this._searchText);
    return this._animals;
  }

}
