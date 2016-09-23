import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login.component';
import { RegisterComponent } from './register.component';
import { DefaultComponent } from './default.component';

const appRoutes: Routes = [
	{ path: 'index', component: DefaultComponent },
	{ path: 'login', component: LoginComponent },
	{ path: 'register', component: RegisterComponent }
];

export const appRoutingProviders: any[] = [

];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
