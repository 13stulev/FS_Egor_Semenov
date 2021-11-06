import {AfterViewChecked, Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {Animal, DataService, IAnimal} from "../services/data.service";
import {MatDialog} from "@angular/material/dialog";
import {DialogComponent} from "../dialog/dialog.component";
import {HttpClient} from "@angular/common/http";
import {HttpService} from "../services/http.service";
import {D} from "@angular/cdk/keycodes";



@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.less']
})
export class MainComponent implements OnInit {

  _hideItem: boolean = false;
  _animals: Animal[] = [];
  _searchText: string = "";

  constructor(public dialog: MatDialog, public http: HttpService) {
  }


  openDialog(): void {
    const dialogRef = this.dialog.open(DialogComponent, {
      width: '60%',
    });
    dialogRef.afterClosed().subscribe(() => {
      this.http.setOrUpdateAnimalList();
      this._animals = DataService.getAnimalList();
    });
  }

  ngOnInit() {
    this.http.setOrUpdateAnimalList();
    this._animals = DataService.getAnimalList();
  }

  updateAnimalList(value?: Animal[]) {
    this.http.setOrUpdateAnimalList();
    this._animals = DataService.getAnimalList();
}

  setHideItem(value: boolean) {
    this._hideItem = value;
  }

  setSearchText(value: string) {
    this._searchText = value;
  }

  filterArray(value: string): void {
    this._animals = this._animals.filter(e => e.name.includes(value));
  }

  _hideCats(isHidden: boolean) {
    if (isHidden) {
      this._animals = this._animals.filter((animal: Animal) => animal.breed !== "Котик");
    }
  }

  returnAnimals(): Animal[] {
    this._animals = DataService.getAnimalList();
    this._hideCats(this._hideItem);
    this.filterArray(this._searchText);
    return this._animals;
  }


}
