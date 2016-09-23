// importar el nucleo deAngular2
import { Component } from '@angular/core';

//Decorador Component, indicamos en que etiqueta se va acargar la plantilla
@Component({
  selector: 'register',
  template: '<h1>Formulario Registro</h1>'
})
// Clase del componente donde irán los datos y funcionalidades
export class RegisterComponent { }