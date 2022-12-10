import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {Pagina404Component} from "./components/pagina404/pagina404.component";
import {HomeComponent} from "./components/home/home.component";
import {LoguinComponent} from "./components/loguin/loguin.component";
import {AboutMeComponent} from "./components/about-me/about-me.component";

const routes: Routes = [
  {path:'', redirectTo: '/home', pathMatch: "full"},
  {path:'***', component:Pagina404Component},
  {path:'home', component:HomeComponent},
  {path:'loguin', component:LoguinComponent},
  {path:'about-me', component:AboutMeComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
