import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Input } from '@angular/core';
import { Listing } from '../../../listing/listing.interface';

@Component({
	selector: 'app-listing-short',
	standalone: true,
	imports: [CommonModule],
	templateUrl: './listing-short.component.html',
	styleUrl: './listing-short.component.scss',
})
export class ListingShortComponent {
	@Input() entity!: Listing;
}
