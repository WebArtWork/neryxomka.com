import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ButtonModule } from '@wawjs/ngx-prime/button';
import { InputNumberModule } from '@wawjs/ngx-prime/inputnumber';
import { InputTextModule } from '@wawjs/ngx-prime/inputtext';
import { SelectModule } from '@wawjs/ngx-prime/select';
import { TranslateDirective } from '@wawjs/ngx-translate';
import { Property, PropertyStatus, PropertyType, PropertyVisibility } from '../../../property/property.interface';

const PROPERTY_TYPE_OPTIONS: { value: PropertyType; label: string }[] = [
	{ value: 'apartment', label: 'Квартира' },
	{ value: 'house', label: 'Будинок' },
	{ value: 'room', label: 'Кімната' },
	{ value: 'land', label: 'Земельна ділянка' },
	{ value: 'office', label: 'Офіс' },
	{ value: 'retail-space', label: 'Торгове приміщення' },
	{ value: 'warehouse', label: 'Склад' },
	{ value: 'garage', label: 'Гараж' },
	{ value: 'parking-space', label: 'Паркомісце' },
	{ value: 'commercial-building', label: 'Комерційна будівля' },
	{ value: 'industrial-property', label: 'Промислова нерухомість' },
	{ value: 'agricultural-property', label: 'Сільськогосподарська нерухомість' },
	{ value: 'unfinished-construction', label: 'Незавершене будівництво' },
];

const PROPERTY_STATUS_OPTIONS: { value: PropertyStatus; label: string }[] = [
	{ value: 'active', label: 'Активний' },
	{ value: 'under-construction', label: 'На стадії будівництва' },
	{ value: 'completed', label: 'Завершений' },
	{ value: 'occupied', label: 'Зайнятий' },
	{ value: 'vacant', label: 'Вільний' },
	{ value: 'under-renovation', label: 'На реконструкції' },
	{ value: 'damaged', label: 'Пошкоджений' },
	{ value: 'archived', label: 'В архіві' },
	{ value: 'unverified', label: 'Не перевірений' },
];

const PROPERTY_VISIBILITY_OPTIONS: { value: PropertyVisibility; label: string }[] = [
	{ value: 'public', label: 'Публічний' },
	{ value: 'listing-only', label: 'Лише в оголошенні' },
	{ value: 'limited-preview', label: 'Обмежений перегляд' },
	{ value: 'private', label: 'Приватний' },
	{ value: 'shared', label: 'Спільний доступ' },
	{ value: 'managed-by-representatives', label: 'Керується представниками' },
];

@Component({
	selector: 'app-property-form',
	standalone: true,
	imports: [
		CommonModule,
		ReactiveFormsModule,
		ButtonModule,
		InputTextModule,
		InputNumberModule,
		SelectModule,
		TranslateDirective,
	],
	templateUrl: './property-form.component.html',
	styleUrl: './property-form.component.scss',
})
export class PropertyFormComponent {
	@Input() entity?: Property;

	readonly form: FormGroup;
	readonly typeOptions = PROPERTY_TYPE_OPTIONS;
	readonly statusOptions = PROPERTY_STATUS_OPTIONS;
	readonly visibilityOptions = PROPERTY_VISIBILITY_OPTIONS;

	constructor(private readonly fb: FormBuilder) {
		this.form = this.fb.group({
			type: ['apartment', Validators.required],
			country: ['', Validators.required],
			city: ['', Validators.required],
			address: ['', Validators.required],
			buildingUnitInfo: [''],
			cadastralId: [''],
			sizeSqm: [0, [Validators.required, Validators.min(1)]],
			rooms: [1, [Validators.required, Validators.min(0)]],
			bedrooms: [0, [Validators.required, Validators.min(0)]],
			bathrooms: [0, [Validators.required, Validators.min(0)]],
			floor: [null],
			totalFloors: [null],
			yearBuilt: [null],
			status: ['active', Validators.required],
			visibility: ['public', Validators.required],
		});
	}

	ngOnInit(): void {
		if (this.entity) {
			this.form.patchValue({
				...this.entity,
				...this.entity.characteristics,
			});
		}
	}
}
