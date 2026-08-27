import { Component, computed, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs';
import { MenuItem } from '@wawjs/ngx-prime/api';
import { BreadcrumbModule } from '@wawjs/ngx-prime/breadcrumb';
import { CardModule } from '@wawjs/ngx-prime/card';
import { AgencyViewComponent } from '../../../components/agency/agency-view/agency-view.component';
import { Agency } from '../../../agency/agency.interface';
import { agencies } from '../../../agency/agency.data';

@Component({
	imports: [AgencyViewComponent, BreadcrumbModule, CardModule],
	templateUrl: './agency.component.html',
	styleUrl: './agency.component.scss',
})
export class AgencyComponent {
	private readonly _route = inject(ActivatedRoute);

	private readonly _id = toSignal(
		this._route.paramMap.pipe(map((params) => params.get('id'))),
		{ initialValue: null },
	);

	readonly entity = computed<Agency | undefined>(() =>
		agencies.find((item) => item._id === this._id()),
	);

	readonly home: MenuItem = { icon: 'pi pi-home', routerLink: '/dashboard' };
	readonly breadcrumb: MenuItem[] = [{ label: 'Агентство' }];
}
