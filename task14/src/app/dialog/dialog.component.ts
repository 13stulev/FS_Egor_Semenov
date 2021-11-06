import {Component} from '@angular/core';

import {Animal, DataService, IAnimal} from "../services/data.service";
import {HttpClient, HttpClientModule} from "@angular/common/http";

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.less']
})
export class DialogComponent {
  newId: number = 0;
  animal: Animal = new Animal(0,false, '', '','', '', 0, 0,'');
  constructor(private http: HttpClient) {
  }


  Submit() {
    this.http.get<IAnimal[]>("http://localhost:3000/animals").subscribe(arr => {this.newId = arr[arr.length - 1].id + 1})
    let img: string = `assets/images/${this.animal.breed}.png`
    let temp = new Animal(this.newId,false, this.animal.breed, this.animal.name, this.animal.type, this.animal.gender, this.animal.age, this.animal.weight, img);
    this.http.post<IAnimal>("http://localhost:3000/animals", temp).subscribe(val => console.log(val))
  }
}
