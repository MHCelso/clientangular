// importar el nucleo deAngular2
import { Component, OnInit } from '@angular/core';
import { LoginService } from './services/login.service';


//Decorador Component, indicamos en que etiqueta se va acargar la plantilla
@Component({
  selector: 'login',
  templateUrl: 'app/views/login.html',
  providers: [ LoginService ]
})
// Clase del componente donde irán los datos y funcionalidades
export class LoginComponent implements OnInit {
	public identificate: string = "Identificate";
	public user;

	constructor( private _loginService: LoginService ) { }

	ngOnInit(): void {
		this.user = {
			"email": "",
			"password": ""
		};
	}

onSubmit(){
	alert(this._loginService.signUp()+'\n');
	alert(this.user);
}
}