import { Injectable } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable'; 

 
@Injectable()
export class LoginService {

constructor(

	// public url = "http://localhost:8000/",
	// private _http: Http,
	
	){}

	signUp(user_to_login) {

		// let json = JSON.stringify(user_to_login);
		// let params = "json" + json;

		// let headers = new Headers({
		// 	'Content-Type':'application/x-www-form-urlencode'
		// });

		// return this._http.post(
		// 	this.url + "/get-token/, params, { headers: headers }"
		// 	)
		// 	 .map(res => res.json());
	}
}