import { Routes } from '@angular/router';

export const routes: Routes = [
	{
		path: ':id',
		loadComponent: () =>
			import('./listing.component').then((m) => m.ListingComponent),
	},
];
