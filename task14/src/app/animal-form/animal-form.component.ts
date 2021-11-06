import {Component, OnInit} from '@angular/core';
import {Animal, DataService, IAnimal} from "../data.service";
import {HttpClient} from "@angular/common/http";
import {FormControl, FormGroup, Validators} from "@angular/forms";


@Component({
  selector: 'app-animal-form',
  templateUrl: './animal-form.component.html',
  styleUrls: ['./animal-form.component.less']
})
export class AnimalFormComponent implements OnInit {

  public pet: Animal = new Animal(0,false,'','','','',0, 0,'');
  myForm : FormGroup;
  constructor(private http: HttpClient) {
    this.myForm = new FormGroup({

      "name": new FormControl("", [Validators.required,
        Validators.minLength(2)]),
      "breed": new FormControl("", Validators.required),
      "type": new FormControl("", [Validators.required,
        Validators.minLength(2)]),
      "gender": new FormControl("", Validators.required),
      "age": new FormControl("", [Validators.required, Validators.pattern(/^\d+$/)]),
      "weight": new FormControl("", [Validators.required, Validators.pattern(/^\d+$/)]),
    });
  }

  ngOnInit(): void {
    this.http.get<IAnimal>(`http://localhost:3000/animals/${DataService.getId()}`).subscribe(animals => {
      this.pet = animals;
    })
  }


  change() {
      this.pet.img = `assets/images/${this.pet.breed}.png`
      this.http.put(`http://localhost:3000/animals/${DataService.getId()}`, this.pet).subscribe(animals => {
        console.log("succ");
      })
    }

}
