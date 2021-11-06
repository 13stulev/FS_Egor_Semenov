import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Animal, DataService, IAnimal} from "../data.service";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.less']
})
export class CardComponent {
  @Input() pet: Animal = new Animal(0,false,'','','','',0, 0,'');
  pets: Animal[] = [];
  @Output() animals = new EventEmitter <Animal[]>();


  constructor(private http:HttpClient) {
    this.http.get<IAnimal[]>(`http://localhost:3000/animals`).subscribe(val=>{
      this.pets = val;
      console.log("TEst");
    })
  }

  setId() {
    DataService.setId(this.pet.id);

  }

  delete() {
    DataService.setId(this.pet.id);
    this.http.delete(`http://localhost:3000/animals/${DataService.getId()}`).subscribe(()=>{
      console.log("it Works!");
      this.http.get<IAnimal[]>(`http://localhost:3000/animals`).subscribe(val=>{
        this.pets = val;
        console.log("Test");
      })
    })

    this.pets.splice(DataService.getId(),1);
    this.animals.emit(this.pets);
  }
}
