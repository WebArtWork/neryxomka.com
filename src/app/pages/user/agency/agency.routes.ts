import { Routes } from '@angular/router';

export const routes: Routes = [
	{
		path: ':id',
		loadComponent: () =>
			import('./agency.component').then((m) => m.AgencyComponent),
	},
];
