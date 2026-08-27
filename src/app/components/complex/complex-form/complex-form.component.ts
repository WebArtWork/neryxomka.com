import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Complex } from '../../../complex/complex.interface';

@Component({
	selector: 'app-complex-form',
	standalone: true,
	imports: [CommonModule, ReactiveFormsModule],
	templateUrl: './complex-form.component.html',
	styleUrl: './complex-form.component.scss',
})
export class ComplexFormComponent {
	@Input() entity?: Complex;

	readonly form: FormGroup;

	constructor(private readonly fb: FormBuilder) {
		this.form = this.fb.group({
			name: ['', Validators.required],
			description: ['', Validators.required],
			country: ['', Validators.required],
			city: ['', Validators.required],
			address: ['', Validators.required],
			status: ['planned', Validators.required],
			constructionProgressPercent: [0, [Validators.min(0), Validators.max(100)]],
			coverImage: [''],
		});
	}

	ngOnInit(): void {
		if (this.entity) {
			this.form.patchValue(this.entity);
		}
	}
}
