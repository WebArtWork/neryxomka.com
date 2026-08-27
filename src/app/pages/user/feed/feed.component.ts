import { Component, computed, inject, signal } from '@angular/core';
import { Router } from '@angular/router';
import { ButtonModule } from '@wawjs/ngx-prime/button';
import { CardModule } from '@wawjs/ngx-prime/card';
import { ListingShortComponent } from '../../../components/listing/listing-short/listing-short.component';
import { Listing } from '../../../listing/listing.interface';
import { listings } from '../../../listing/listing.data';

type FeedAction = 'favourite' | 'ignore';

@Component({
	imports: [ListingShortComponent, ButtonModule, CardModule],
	templateUrl: './feed.component.html',
	styleUrl: './feed.component.scss',
})
export class FeedComponent {
	private readonly _router = inject(Router);

	readonly favouritedIds = signal<Set<string>>(this._restore('favourited'));
	readonly ignoredIds = signal<Set<string>>(this._restore('ignored'));

	readonly feed = computed<Listing[]>(() => {
		const favourited = this.favouritedIds();
		const ignored = this.ignoredIds();
		return listings.filter(
			(item) => !favourited.has(item._id) && !ignored.has(item._id),
		);
	});

	private readonly _dragState = signal<{ id: string; deltaX: number } | null>(
		null,
	);
	readonly dragState = this._dragState.asReadonly();

	private _pointerId: number | null = null;
	private _startX = 0;

	view(item: Listing): void {
		this._router.navigate(['/listing', item._id]);
	}

	act(item: Listing, action: FeedAction): void {
		if (action === 'favourite') {
			this._update('favourited', this.favouritedIds, item._id);
		} else {
			this._update('ignored', this.ignoredIds, item._id);
		}
		this._dragState.set(null);
	}

	onPointerDown(event: PointerEvent, item: Listing): void {
		this._pointerId = event.pointerId;
		this._startX = event.clientX;
		this._dragState.set({ id: item._id, deltaX: 0 });
	}

	onPointerMove(event: PointerEvent, item: Listing): void {
		if (this._pointerId !== event.pointerId) {
			return;
		}
		this._dragState.set({
			id: item._id,
			deltaX: event.clientX - this._startX,
		});
	}

	onPointerUp(event: PointerEvent, item: Listing): void {
		if (this._pointerId !== event.pointerId) {
			return;
		}
		this._pointerId = null;

		const state = this._dragState();
		const threshold = 96;

		if (state && state.id === item._id) {
			if (state.deltaX >= threshold) {
				this.act(item, 'favourite');
				return;
			}
			if (state.deltaX <= -threshold) {
				this.act(item, 'ignore');
				return;
			}
		}

		this._dragState.set(null);
	}

	private _update(
		key: 'favourited' | 'ignored',
		state: ReturnType<typeof signal<Set<string>>>,
		id: string,
	): void {
		const next = new Set(state());
		next.add(id);
		state.set(next);
		this._persist(key, next);
	}

	private _restore(key: 'favourited' | 'ignored'): Set<string> {
		try {
			const raw = localStorage.getItem(`feed:${key}`);
			return raw ? new Set<string>(JSON.parse(raw)) : new Set<string>();
		} catch {
			return new Set<string>();
		}
	}

	private _persist(key: 'favourited' | 'ignored', value: Set<string>): void {
		try {
			localStorage.setItem(`feed:${key}`, JSON.stringify([...value]));
		} catch {
			// ignore storage failures (e.g. private browsing)
		}
	}
}
