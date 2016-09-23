// importar el nucleo deAngular2
import { Component } from '@angular/core';

//Decorador Component, indicamos en que etiqueta se va acargar la plantilla
@Component({
  selector: 'my-app',
  template:  `
    <h1>Angular Router</h1>
    <nav>
      <a routerLink="/login" routerLinkActive="active">Login</a>
      <a routerLink="/register" routerLinkActive="active">Register</a>
    </nav>
    <router-outlet></router-outlet>
  `
})
// Clase del componente donde irán los datos y funcionalidades
export class AppComponent { }