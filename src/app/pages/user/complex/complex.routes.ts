import { Routes } from '@angular/router';

export const routes: Routes = [
	{
		path: ':id',
		loadComponent: () =>
			import('./complex.component').then((m) => m.ComplexComponent),
	},
];
