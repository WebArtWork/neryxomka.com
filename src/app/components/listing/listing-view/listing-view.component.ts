import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Input } from '@angular/core';
import { Listing } from '../../../listing/listing.interface';

@Component({
	selector: 'app-listing-view',
	standalone: true,
	imports: [CommonModule],
	templateUrl: './listing-view.component.html',
	styleUrl: './listing-view.component.scss',
})
export class ListingViewComponent {
	@Input() entity!: Listing;
}
