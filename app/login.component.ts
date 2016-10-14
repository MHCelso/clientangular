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
	public errorMessage;

	constructor( private _loginService: LoginService ) { }

	ngOnInit(): void {
		this.user = {
			"email": "",
			"password": ""
		};
	}

onSubmit(){

	alert( this.user );

	// this._loginService.signUp( this.user ).suscribe(  

	// 	response => {
	// 		alert(response);
	// 	}, 
	// 	error => {
	// 		this.errorMessage = <any>error;

	// 		if(this.errorMessage != null)
	// 		{
	// 			console.log(this.errorMessage);
	// 			alert("Error en la petición");
	// 		}

	// 	}
	// 	);

}
}