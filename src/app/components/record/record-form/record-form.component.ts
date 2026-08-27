import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { PropertyRecord } from '../../../record/record.interface';

@Component({
	selector: 'app-record-form',
	standalone: true,
	imports: [CommonModule, ReactiveFormsModule],
	templateUrl: './record-form.component.html',
	styleUrl: './record-form.component.scss',
})
export class RecordFormComponent {
	@Input() entity?: PropertyRecord;

	readonly form: FormGroup;

	constructor(private readonly fb: FormBuilder) {
		this.form = this.fb.group({
			recordType: ['maintenance', Validators.required],
			title: ['', Validators.required],
			description: ['', Validators.required],
			eventDate: ['', Validators.required],
			serviceProvider: [''],
			cost: [null],
			currency: [null],
			quantity: [null],
			units: [''],
			status: ['planned', Validators.required],
			locationInsideProperty: [''],
			visibility: ['private', Validators.required],
		});
	}

	ngOnInit(): void {
		if (this.entity) {
			this.form.patchValue(this.entity);
		}
	}
}
