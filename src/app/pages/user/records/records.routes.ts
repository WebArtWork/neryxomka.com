import { Routes } from '@angular/router';

export const routes: Routes = [
	{
		path: ':id',
		loadComponent: () =>
			import('./records.component').then((m) => m.RecordsComponent),
	},
];
