import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-animal-info',
  templateUrl: './animal-info.component.html',
  styleUrls: ['./animal-info.component.css']
})
export class AnimalInfoComponent{

 @Input() type: string ="";
 @Input() gender: string ="";
 @Input() age: number =0;
 @Input() weight: number =0;

}
