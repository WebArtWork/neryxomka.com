import { Component, computed, inject, signal } from '@angular/core';
import { Router } from '@angular/router';
import { ButtonModule } from '@wawjs/ngx-prime/button';
import { CardModule } from '@wawjs/ngx-prime/card';
import { PropertyShortComponent } from '../../../components/property/property-short/property-short.component';
import { Property } from '../../../property/property.interface';
import { properties } from '../../../property/property.data';

interface PropertyPin {
	property: Property;
	left: number;
	top: number;
}

/**
 * Deviation note: `@wawjs/ngx-map`'s `MapComponent` (`lib-map`) wraps
 * `@angular/google-maps` and requires a Google Maps JS API key/loader plus
 * network access to Google's tile servers. This repo has no key configured
 * anywhere (`environment.ts`, `app.config.ts`, `index.html`) and no
 * `provideNgxMap(...)` call, and per ROADMAP.md this page must stay fully
 * static (fixture coordinates only, no live geocoding, no backend). Rather
 * than introduce an unconfigured external dependency for an investor-facing
 * static demo, pins are plotted on a self-contained proportional scatter
 * plot derived from each property's fixture `coordinates`, normalized
 * against the bounding box of all property coordinates.
 */
@Component({
	imports: [ButtonModule, CardModule, PropertyShortComponent],
	templateUrl: './map.component.html',
	styleUrl: './map.component.scss',
})
export class MapComponent {
	private readonly _router = inject(Router);

	readonly selected = signal<Property | null>(null);

	readonly pins = computed<PropertyPin[]>(() => {
		const withCoords = properties.filter((item) => item.coordinates);
		if (!withCoords.length) {
			return [];
		}

		const lats = withCoords.map((item) => item.coordinates.lat);
		const lngs = withCoords.map((item) => item.coordinates.lng);
		const minLat = Math.min(...lats);
		const maxLat = Math.max(...lats);
		const minLng = Math.min(...lngs);
		const maxLng = Math.max(...lngs);
		const latSpan = maxLat - minLat || 1;
		const lngSpan = maxLng - minLng || 1;
		const padding = 8;

		return withCoords.map((property) => {
			const xRatio = (property.coordinates.lng - minLng) / lngSpan;
			const yRatio = (property.coordinates.lat - minLat) / latSpan;
			return {
				property,
				left: padding + xRatio * (100 - padding * 2),
				// invert latitude: higher lat renders nearer the top
				top: padding + (1 - yRatio) * (100 - padding * 2),
			};
		});
	});

	select(property: Property): void {
		this.selected.set(property);
	}

	closePanel(): void {
		this.selected.set(null);
	}

	view(property: Property): void {
		this._router.navigate(['/property', property._id]);
	}
}
