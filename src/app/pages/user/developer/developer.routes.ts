import { Routes } from '@angular/router';

export const routes: Routes = [
	{
		path: ':id',
		loadComponent: () =>
			import('./developer.component').then((m) => m.DeveloperComponent),
	},
];
