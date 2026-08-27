import { Routes } from '@angular/router';

export const routes: Routes = [
	{
		path: ':id',
		loadComponent: () =>
			import('./agent.component').then((m) => m.AgentComponent),
	},
];
