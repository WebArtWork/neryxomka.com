import { Routes } from '@angular/router';

export const routes: Routes = [
	{
		path: ':id',
		loadComponent: () =>
			import('./property.component').then((m) => m.PropertyComponent),
	},
];
