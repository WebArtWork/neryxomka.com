import { Component, computed, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { CardModule } from '@wawjs/ngx-prime/card';
import { InputTextModule } from '@wawjs/ngx-prime/inputtext';
import { MultiSelectModule } from '@wawjs/ngx-prime/multiselect';
import { SelectModule } from '@wawjs/ngx-prime/select';
import { SliderModule } from '@wawjs/ngx-prime/slider';
import { ListingShortComponent } from '../../../components/listing/listing-short/listing-short.component';
import { Listing, ListingStatus, ListingType } from '../../../listing/listing.interface';
import { listings } from '../../../listing/listing.data';
import { Property, PropertyType } from '../../../property/property.interface';
import { properties } from '../../../property/property.data';

interface SelectOption<T> {
	label: string;
	value: T;
}

const PROPERTY_TYPE_LABELS: Record<PropertyType, string> = {
	apartment: 'Квартира',
	house: 'Будинок',
	room: 'Кімната',
	land: 'Земельна ділянка',
	office: 'Офіс',
	'retail-space': 'Торгове приміщення',
	warehouse: 'Склад',
	garage: 'Гараж',
	'parking-space': 'Паркомісце',
	'commercial-building': 'Комерційна будівля',
	'industrial-property': 'Промислова нерухомість',
	'agricultural-property': 'Сільськогосподарська нерухомість',
	'unfinished-construction': 'Незавершене будівництво',
};

const LISTING_TYPE_LABELS: Record<ListingType, string> = {
	sale: 'Продаж',
	'long-term-rent': 'Довгострокова оренда',
	'short-term-rent': 'Короткострокова оренда',
	'commercial-lease': 'Комерційна оренда',
	'land-sale': 'Продаж землі',
	other: 'Інше',
};

const LISTING_STATUS_LABELS: Record<ListingStatus, string> = {
	draft: 'Чернетка',
	'pending-review': 'На розгляді',
	active: 'Активне',
	reserved: 'Заброньоване',
	rented: 'Здано в оренду',
	sold: 'Продано',
	expired: 'Термін минув',
	paused: 'Призупинено',
	rejected: 'Відхилено',
	archived: 'Архівоване',
};

@Component({
	imports: [
		ListingShortComponent,
		FormsModule,
		CardModule,
		InputTextModule,
		SelectModule,
		MultiSelectModule,
		SliderModule,
	],
	templateUrl: './explore.component.html',
	styleUrl: './explore.component.scss',
})
export class ExploreComponent {
	private readonly _router = inject(Router);

	private readonly _propertyById = new Map<string, Property>(
		properties.map((item) => [item._id, item]),
	);

	readonly propertyTypeOptions: SelectOption<PropertyType>[] = Object.entries(
		PROPERTY_TYPE_LABELS,
	).map(([value, label]) => ({ value: value as PropertyType, label }));

	readonly listingTypeOptions: SelectOption<ListingType>[] = Object.entries(
		LISTING_TYPE_LABELS,
	).map(([value, label]) => ({ value: value as ListingType, label }));

	readonly listingStatusOptions: SelectOption<ListingStatus>[] = Object.entries(
		LISTING_STATUS_LABELS,
	).map(([value, label]) => ({ value: value as ListingStatus, label }));

	readonly minPrice = 0;
	readonly maxPrice = computed(() => {
		const max = listings.reduce((acc, item) => Math.max(acc, item.price), 0);
		return Math.ceil(max / 1000) * 1000 || 1000;
	});

	readonly searchTerm = signal('');
	readonly selectedPropertyTypes = signal<PropertyType[]>([]);
	readonly selectedListingType = signal<ListingType | null>(null);
	readonly selectedStatus = signal<ListingStatus | null>(null);
	readonly priceRange = signal<[number, number]>([0, 1_000_000]);

	readonly results = computed<Listing[]>(() => {
		const term = this.searchTerm().trim().toLowerCase();
		const types = this.selectedPropertyTypes();
		const listingType = this.selectedListingType();
		const status = this.selectedStatus();
		const [minPrice, maxPrice] = this.priceRange();

		return listings.filter((item) => {
			const property = this._propertyById.get(item.propertyId);

			if (term) {
				const haystack = [
					item.title,
					item.publicLocation,
					property?.city,
					property?.address,
				]
					.filter(Boolean)
					.join(' ')
					.toLowerCase();
				if (!haystack.includes(term)) {
					return false;
				}
			}

			if (types.length && (!property || !types.includes(property.type))) {
				return false;
			}

			if (listingType && item.listingType !== listingType) {
				return false;
			}

			if (status && item.status !== status) {
				return false;
			}

			if (item.price < minPrice || item.price > maxPrice) {
				return false;
			}

			return true;
		});
	});

	view(item: Listing): void {
		this._router.navigate(['/listing', item._id]);
	}

	resetFilters(): void {
		this.searchTerm.set('');
		this.selectedPropertyTypes.set([]);
		this.selectedListingType.set(null);
		this.selectedStatus.set(null);
		this.priceRange.set([0, this.maxPrice()]);
	}
}
