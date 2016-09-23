import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';
import { routing, appRoutingProviders }  from './app.routes';
import { AppComponent }   from './app.component';
import { LoginComponent } from './login.component';
import { RegisterComponent } from './register.component';
import { DefaultComponent } from './default.component';


@NgModule({
  imports:      [
   BrowserModule,
   FormsModule,
   routing
    ],
  declarations: [
   AppComponent,
   LoginComponent,
   RegisterComponent,
   DefaultComponent
    ],
  providers: [
   appRoutingProviders
  ],
  bootstrap: [
   AppComponent,
    ]
})

export class AppModule { }
