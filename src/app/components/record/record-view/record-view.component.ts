import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Input } from '@angular/core';
import { PropertyRecord } from '../../../record/record.interface';

@Component({
	selector: 'app-record-view',
	standalone: true,
	imports: [CommonModule],
	templateUrl: './record-view.component.html',
	styleUrl: './record-view.component.scss',
})
export class RecordViewComponent {
	@Input() entity!: PropertyRecord;
}
