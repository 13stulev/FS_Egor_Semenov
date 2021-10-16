import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AnimalCardComponent } from './animal-card/animal-card.component';
import {FormsModule} from "@angular/forms";
import { AnimalInfoComponent } from './animal-info/animal-info.component';
import { SearchComponent } from './search/search.component';

@NgModule({
  declarations: [
    AppComponent,
    AnimalCardComponent,
    AnimalInfoComponent,
    SearchComponent
  ],
    imports: [
        BrowserModule,
        FormsModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
