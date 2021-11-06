import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.less']
})
export class InfoComponent {
  @Input() type: string = "";
  @Input() gender: string = "";
  @Input() age: number = 0;
  @Input() weight: number = 0;
}
