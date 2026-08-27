import { Component, computed, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs';
import { MenuItem } from '@wawjs/ngx-prime/api';
import { BreadcrumbModule } from '@wawjs/ngx-prime/breadcrumb';
import { CardModule } from '@wawjs/ngx-prime/card';
import { ListingViewComponent } from '../../../components/listing/listing-view/listing-view.component';
import { Listing } from '../../../listing/listing.interface';
import { listings } from '../../../listing/listing.data';

@Component({
	imports: [ListingViewComponent, BreadcrumbModule, CardModule],
	templateUrl: './listing.component.html',
	styleUrl: './listing.component.scss',
})
export class ListingComponent {
	private readonly _route = inject(ActivatedRoute);

	private readonly _id = toSignal(
		this._route.paramMap.pipe(map((params) => params.get('id'))),
		{ initialValue: null },
	);

	readonly entity = computed<Listing | undefined>(() =>
		listings.find((item) => item._id === this._id()),
	);

	readonly home: MenuItem = { icon: 'pi pi-home', routerLink: '/dashboard' };
	readonly breadcrumb: MenuItem[] = [{ label: 'Оголошення' }];
}
