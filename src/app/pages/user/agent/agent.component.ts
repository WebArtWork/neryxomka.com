import { Component, computed, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs';
import { MenuItem } from '@wawjs/ngx-prime/api';
import { BreadcrumbModule } from '@wawjs/ngx-prime/breadcrumb';
import { CardModule } from '@wawjs/ngx-prime/card';
import { AgentViewComponent } from '../../../components/agent/agent-view/agent-view.component';
import { Agent } from '../../../agent/agent.interface';
import { agents } from '../../../agent/agent.data';

@Component({
	imports: [AgentViewComponent, BreadcrumbModule, CardModule],
	templateUrl: './agent.component.html',
	styleUrl: './agent.component.scss',
})
export class AgentComponent {
	private readonly _route = inject(ActivatedRoute);

	private readonly _id = toSignal(
		this._route.paramMap.pipe(map((params) => params.get('id'))),
		{ initialValue: null },
	);

	readonly entity = computed<Agent | undefined>(() =>
		agents.find((item) => item._id === this._id()),
	);

	readonly home: MenuItem = { icon: 'pi pi-home', routerLink: '/explore' };
	readonly breadcrumb: MenuItem[] = [{ label: 'Агент' }];
}
