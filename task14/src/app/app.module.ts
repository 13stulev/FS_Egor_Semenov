import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {CardComponent} from './card/card.component';
import {InfoComponent} from './info/info.component';
import {SearchComponent} from './search/search.component';
import {DialogComponent} from './dialog/dialog.component';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import {MatDialog, MatDialogModule} from "@angular/material/dialog";
import {Overlay} from "@angular/cdk/overlay";
import {MatButtonModule} from "@angular/material/button";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatRadioModule} from "@angular/material/radio";
import {RouterModule, Routes} from "@angular/router";
import {AnimalFormComponent} from './animal-form/animal-form.component';
import {MainComponent} from './main/main.component';
import {HttpClientModule} from "@angular/common/http";
import {MatFormFieldModule} from "@angular/material/form-field";


@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    InfoComponent,
    SearchComponent,
    DialogComponent,
    AnimalFormComponent,
    MainComponent
  ],
  entryComponents: [DialogComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NoopAnimationsModule,
    MatDialogModule,
    MatButtonModule,
    FormsModule,
    MatRadioModule,
    RouterModule,
    HttpClientModule,
    MatFormFieldModule,
    ReactiveFormsModule
  ],
  providers: [MatDialog,
    Overlay,

  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
