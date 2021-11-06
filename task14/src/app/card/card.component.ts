import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Animal, DataService, IAnimal} from "../services/data.service";
import {HttpClient} from "@angular/common/http";
import {HttpService} from "../services/http.service";

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.less']
})
export class CardComponent {
  @Input() pet: Animal = new Animal(0,false,'','','','',0, 0,'');
  @Input() pets: Animal[] = [];
  @Output() petsEmitter = new EventEmitter <Animal[]>();


  constructor(private http:HttpService) {
  }

  setSelectedId() {
    DataService.setSelectedId(this.pet.id);
  }

  delete() {
    DataService.setSelectedId(this.pet.id);
    this.http.delete();

    this.pets.splice(DataService.getId(),1);
    this.petsEmitter.emit(this.pets);
  }
}
