import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ButtonModule } from '@wawjs/ngx-prime/button';
import { InputNumberModule } from '@wawjs/ngx-prime/inputnumber';
import { InputTextModule } from '@wawjs/ngx-prime/inputtext';
import { SelectModule } from '@wawjs/ngx-prime/select';
import { TextareaModule } from '@wawjs/ngx-prime/textarea';
import { TranslateDirective } from '@wawjs/ngx-translate';
import { PropertyRecord, RecordStatus, RecordType, RecordVisibility } from '../../../record/record.interface';

const RECORD_TYPE_OPTIONS: { value: RecordType; label: string }[] = [
	{ value: 'infrastructure', label: 'Інфраструктура' },
	{ value: 'utility', label: 'Комунальні послуги' },
	{ value: 'maintenance', label: 'Обслуговування' },
	{ value: 'repair', label: 'Ремонт' },
	{ value: 'renovation', label: 'Реконструкція' },
	{ value: 'expense', label: 'Витрата' },
	{ value: 'inspection', label: 'Огляд' },
	{ value: 'incident', label: 'Інцидент' },
	{ value: 'damage', label: 'Пошкодження' },
	{ value: 'improvement', label: 'Покращення' },
	{ value: 'equipment-installation', label: 'Встановлення обладнання' },
	{ value: 'meter-replacement', label: 'Заміна лічильника' },
	{ value: 'document', label: 'Документ' },
	{ value: 'ownership-change', label: 'Зміна власника' },
	{ value: 'tenant-change', label: 'Зміна орендаря' },
	{ value: 'valuation', label: 'Оцінка' },
	{ value: 'note', label: 'Примітка' },
];

const RECORD_STATUS_OPTIONS: { value: RecordStatus; label: string }[] = [
	{ value: 'planned', label: 'Заплановано' },
	{ value: 'in-progress', label: 'В процесі' },
	{ value: 'completed', label: 'Завершено' },
	{ value: 'cancelled', label: 'Скасовано' },
];

const RECORD_VISIBILITY_OPTIONS: { value: RecordVisibility; label: string }[] = [
	{ value: 'public', label: 'Публічний' },
	{ value: 'public-summary-private-details', label: 'Публічний огляд, приватні деталі' },
	{ value: 'private', label: 'Приватний' },
	{ value: 'shared-with-selected-users', label: 'Доступ вибраним користувачам' },
	{ value: 'shared-with-owners-tenants', label: 'Доступ власникам і орендарям' },
	{ value: 'shared-with-agent-agency-contractor-manager', label: 'Доступ агенту, агенції, підряднику, керуючому' },
];

@Component({
	selector: 'app-record-form',
	standalone: true,
	imports: [
		CommonModule,
		ReactiveFormsModule,
		ButtonModule,
		InputTextModule,
		InputNumberModule,
		SelectModule,
		TextareaModule,
		TranslateDirective,
	],
	templateUrl: './record-form.component.html',
	styleUrl: './record-form.component.scss',
})
export class RecordFormComponent {
	@Input() entity?: PropertyRecord;

	readonly form: FormGroup;
	readonly recordTypeOptions = RECORD_TYPE_OPTIONS;
	readonly statusOptions = RECORD_STATUS_OPTIONS;
	readonly visibilityOptions = RECORD_VISIBILITY_OPTIONS;

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
