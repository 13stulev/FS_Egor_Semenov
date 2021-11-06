import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AnimalFormComponent} from "./animal-form/animal-form.component";
import {DialogComponent} from "./dialog/dialog.component";
import {AppComponent} from "./app.component";
import {MainComponent} from "./main/main.component";
import {Animal} from "./data.service";

const routes: Routes = [ { path: 'pet/:pet-id', component: AnimalFormComponent },
  { path: '', component: MainComponent }];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
