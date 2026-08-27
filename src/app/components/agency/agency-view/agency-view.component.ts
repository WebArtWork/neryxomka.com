import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Input } from '@angular/core';
import { Agency } from '../../../agency/agency.interface';

@Component({
	selector: 'app-agency-view',
	standalone: true,
	imports: [CommonModule],
	templateUrl: './agency-view.component.html',
	styleUrl: './agency-view.component.scss',
})
export class AgencyViewComponent {
	@Input() entity!: Agency;
}
