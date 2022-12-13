import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {Pagina404Component} from "./components/pagina404/pagina404.component";
import {HomeComponent} from "./components/home/home.component";
import {LoguinComponent} from "./components/loguin/loguin.component";
import {AboutMeComponent} from "./components/about-me/about-me.component";
import {CreateAccountComponent} from "./components/create-account/create-account.component";
import {FooterComponent} from "./components/footer/footer.component";
import {HeaderComponent} from "./components/header/header.component";

const routes: Routes = [
  {path:'', redirectTo: '/home', pathMatch: "full"},
  {path:'***', component:Pagina404Component},
  {path:'home', component:HomeComponent},
  {path:'loguin', component:LoguinComponent},
  {path:'create-account', component:CreateAccountComponent},
  {path:'about-me', component:AboutMeComponent},
  {path: 'footer', component:FooterComponent},
  {path: 'header', component:HeaderComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
