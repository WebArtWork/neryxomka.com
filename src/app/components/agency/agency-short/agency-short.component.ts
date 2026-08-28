import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Input } from '@angular/core';
import { Agency } from '../../../agency/agency.interface';

const DEFAULT_PHOTO = '/default-agency.png';

@Component({
	selector: 'app-agency-short',
	standalone: true,
	imports: [CommonModule],
	templateUrl: './agency-short.component.html',
	styleUrl: './agency-short.component.scss',
})
export class AgencyShortComponent {
	@Input() entity!: Agency;

	get photo(): string {
		return this.entity.logo || DEFAULT_PHOTO;
	}

	onPhotoError(event: Event): void {
		(event.target as HTMLImageElement).src = DEFAULT_PHOTO;
	}
}
