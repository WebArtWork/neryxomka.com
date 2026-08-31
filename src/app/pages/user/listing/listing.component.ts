import { Component, computed, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs';
import { CardModule } from '@wawjs/ngx-prime/card';
import { TranslateDirective } from '@wawjs/ngx-translate';
import { ListingViewComponent } from '../../../features/listing/listing-view/listing-view.component';
import { Listing } from '../../../features/listing/listing.interface';
import { listings } from '../../../features/listing/listing.data';
import { ListingRelations, relationsForListing } from '../../../features/listing/listing-relations';

@Component({
	imports: [ListingViewComponent, CardModule, TranslateDirective],
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

	readonly relations = computed<ListingRelations | null>(() => {
		const listing = this.entity();
		return listing ? relationsForListing(listing) : null;
	});

}
