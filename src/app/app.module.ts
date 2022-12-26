import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoguinComponent } from './components/loguin/loguin.component';
import { Pagina404Component } from './components/pagina404/pagina404.component';
import { HomeComponent } from './components/home/home.component';
import { AboutMeComponent } from './components/about-me/about-me.component';
import { CreateAccountComponent } from './components/create-account/create-account.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { ContactMeComponent } from './components/contact-me/contact-me.component';


@NgModule({
  declarations: [
    AppComponent,
    LoguinComponent,
    Pagina404Component,
    HomeComponent,
    AboutMeComponent,
    CreateAccountComponent,
    FooterComponent,
    HeaderComponent,
    ContactMeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

