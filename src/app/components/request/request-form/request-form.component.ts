import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { PropertyRequest } from '../../../request/request.interface';

@Component({
	selector: 'app-request-form',
	standalone: true,
	imports: [CommonModule, ReactiveFormsModule],
	templateUrl: './request-form.component.html',
	styleUrl: './request-form.component.scss',
})
export class RequestFormComponent {
	@Input() entity?: PropertyRequest;

	readonly form: FormGroup;

	constructor(private readonly fb: FormBuilder) {
		this.form = this.fb.group({
			transactionType: ['buy', Validators.required],
			country: ['', Validators.required],
			region: ['', Validators.required],
			city: ['', Validators.required],
			minPrice: [0, [Validators.required, Validators.min(0)]],
			maxPrice: [0, [Validators.required, Validators.min(0)]],
			currency: ['USD', Validators.required],
			preferredSizeSqm: [0, Validators.min(0)],
			roomRequirements: [0, Validators.min(0)],
			conditionRequirements: [''],
			constructionPreferences: [''],
			preferredMoveDate: [''],
			expirationDate: ['', Validators.required],
			visibility: ['public', Validators.required],
		});
	}

	ngOnInit(): void {
		if (this.entity) {
			this.form.patchValue(this.entity);
		}
	}
}
