import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent { //Eliminar constructor si no soluciono pantalla blanca
  title = 'Portafolio';
  isCollapsed = false;
}
