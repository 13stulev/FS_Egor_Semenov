import {Component, OnInit} from '@angular/core';
import {Animal, DataService, IAnimal} from "../services/data.service";
import {HttpClient} from "@angular/common/http";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {HttpService} from "../services/http.service";
import {D} from "@angular/cdk/keycodes";



@Component({
  selector: 'app-animal-form',
  templateUrl: './animal-form.component.html',
  styleUrls: ['./animal-form.component.less']
})
export class AnimalFormComponent implements OnInit {

  public pet: Animal = new Animal(0,false,'','','','',0, 0,'');
  myForm : FormGroup;
  error: boolean = false;
  errorMessage: string = '';
  constructor(public http: HttpService) {
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
    this.http.getAnimalById().subscribe(animals => {
      this.pet = animals;
    },
      (error) => {
        this.error = true;
        this.errorMessage = error;
        console.log(error)
      })
  }


  change() {
      this.pet.img = `assets/images/${this.pet.breed}.png`
      this.http.changeAnimalById(this.pet);
    }

}
