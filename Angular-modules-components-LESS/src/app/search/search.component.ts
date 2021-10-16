import {Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {

  @Output() searchText = new EventEmitter<string>();
  @Output() hideCats = new EventEmitter<boolean>();
  isHidden = false;

  outputText(value: string) {
    this.searchText.emit(value);
  }

  hideCatsFunction() {
    this.isHidden = !this.isHidden;
    this.hideCats.emit(this.isHidden);
  }
}
