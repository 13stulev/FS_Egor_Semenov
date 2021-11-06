import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Animal, DataService, IAnimal} from "./data.service";

@Injectable({
  providedIn: 'root'
})
export class HttpService {


  constructor(public http: HttpClient) { }
  get(){
    return this.http.get<IAnimal[]>("http://localhost:3000/animals");
  }
 delete(){
   this.http.delete(`http://localhost:3000/animals/${DataService.getId()}`).subscribe(()=>{
     console.log("Pet Deleted");
   })
 }

  setOrUpdateAnimalList(){
   this.http.get<IAnimal[]>("http://localhost:3000/animals").subscribe(animals =>{
     DataService.setOrUpdateAnimalList(animals);
     console.log("List updated or seted");
   });
 }

 getAnimalById(){
   return this.http.get<IAnimal>(`http://localhost:3000/animals/${DataService.getId()}`)
 }

 changeAnimalById(pet: Animal){
   this.http.put(`http://localhost:3000/animals/${DataService.getId()}`, pet).subscribe(animals => {
     console.log("succ");
   })
 }

}
