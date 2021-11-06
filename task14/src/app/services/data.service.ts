import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";

export class Animal implements IAnimal {
  constructor(public id: number, public isVisible: boolean, public breed: string, public name: string, public type: string, public gender: string, public age: number, public weight: number, public img: string) {
  }

}

export interface IAnimal {
  id: number,
  isVisible: boolean,
  breed: string,
  name: string,
  type: string,
  gender: string,
  age: number,
  weight: number,
  img: string,
}

@Injectable()
export class DataService {
  private static id: number;
  public static animalList: Animal[];

  static setOrUpdateAnimalList(animals: Animal[]){
    this.animalList = animals;
  }
  static getAnimalList(){
   return this.animalList;
  }
  static setSelectedId(value: number) {
    this.id = value;
  }
  static getId(): number {
    return this.id;
  }
}
