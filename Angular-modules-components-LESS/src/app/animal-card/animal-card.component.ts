import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-animal-card',
  templateUrl: './animal-card.component.html',
  styleUrls: ['./animal-card.component.less']
})
export class AnimalCardComponent{
  @Input() name: string ="";
  @Input() breed: string ="";
  @Input() image: string ="";

}
