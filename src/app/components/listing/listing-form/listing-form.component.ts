import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Listing } from '../../../listing/listing.interface';

@Component({
	selector: 'app-listing-form',
	standalone: true,
	imports: [CommonModule, ReactiveFormsModule],
	templateUrl: './listing-form.component.html',
	styleUrl: './listing-form.component.scss',
})
export class ListingFormComponent {
	@Input() entity?: Listing;

	readonly form: FormGroup;

	constructor(private readonly fb: FormBuilder) {
		this.form = this.fb.group({
			listingType: ['sale', Validators.required],
			title: ['', Validators.required],
			description: ['', Validators.required],
			price: [0, [Validators.required, Validators.min(0)]],
			currency: ['USD', Validators.required],
			rentalPeriod: [null],
			publicLocation: ['', Validators.required],
			availableFrom: ['', Validators.required],
			availableTo: [null],
			status: ['draft', Validators.required],
		});
	}

	ngOnInit(): void {
		if (this.entity) {
			this.form.patchValue(this.entity);
		}
	}
}
