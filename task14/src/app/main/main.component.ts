import {AfterViewChecked, Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {Animal, DataService, IAnimal} from "../data.service";
import {MatDialog} from "@angular/material/dialog";
import {DialogComponent} from "../dialog/dialog.component";
import {HttpClient} from "@angular/common/http";


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.less']
})
export class MainComponent implements OnInit {

  _hideItem: boolean = false;
  _animals: Animal[] = [];
  _searchText: string = "";

  constructor(public dialog: MatDialog, private http: HttpClient) {
  }


  openDialog(): void {
    const dialogRef = this.dialog.open(DialogComponent, {
      width: '60%',
    });
    dialogRef.afterClosed().subscribe(() => this.http.get<IAnimal[]>("http://localhost:3000/animals").subscribe(animals => {
      this._animals = animals;
    }));
  }

  ngOnInit() {
    this.http.get<IAnimal[]>("http://localhost:3000/animals").subscribe(animals => {
      this._animals = animals;
    })
  }

  setDB(value: Animal[]) {
    this._animals = value;
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
    this._hideCats(this._hideItem);
    this.filterArray(this._searchText);
    return this._animals;
  }


}
