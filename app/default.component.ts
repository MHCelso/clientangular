// importar el nucleo deAngular2
import { Component, OnInit} from '@angular/core';

//Decorador Component, indicamos en que etiqueta se va acargar la plantilla
@Component({
  selector: 'default',
  template: '<h1>Defautlt</h1>'
})
// Clase del componente donde irán los datos y funcionalidades
export class DefaultComponent { }