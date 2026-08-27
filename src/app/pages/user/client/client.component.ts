import { Component, computed, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs';
import { MenuItem } from '@wawjs/ngx-prime/api';
import { BreadcrumbModule } from '@wawjs/ngx-prime/breadcrumb';
import { CardModule } from '@wawjs/ngx-prime/card';
import { UserViewComponent } from '../../../components/user/user-view/user-view.component';
import { User } from '../../../user/user.interface';
import { users } from '../../../user/user.data';

@Component({
	imports: [UserViewComponent, BreadcrumbModule, CardModule],
	templateUrl: './client.component.html',
	styleUrl: './client.component.scss',
})
export class ClientComponent {
	private readonly _route = inject(ActivatedRoute);

	private readonly _id = toSignal(
		this._route.paramMap.pipe(map((params) => params.get('id'))),
		{ initialValue: null },
	);

	readonly entity = computed<User | undefined>(() =>
		users.find((item) => item._id === this._id()),
	);

	readonly home: MenuItem = { icon: 'pi pi-home', routerLink: '/dashboard' };
	readonly breadcrumb: MenuItem[] = [{ label: 'Профіль' }];
}
