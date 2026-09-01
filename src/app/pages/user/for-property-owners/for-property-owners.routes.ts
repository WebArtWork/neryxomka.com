import { Routes } from '@angular/router';

export const routes: Routes = [
	{
		path: '',
		loadComponent: () =>
			import('./for-property-owners.component').then((m) => m.ForPropertyOwnersPageComponent),
	},
];
