import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Input } from '@angular/core';
import { Developer } from '../../../developer/developer.interface';

const DEFAULT_PHOTO = '/default-developer.png';

@Component({
	selector: 'app-developer-short',
	standalone: true,
	imports: [CommonModule],
	templateUrl: './developer-short.component.html',
	styleUrl: './developer-short.component.scss',
})
export class DeveloperShortComponent {
	@Input() entity!: Developer;

	get photo(): string {
		return this.entity.logo || DEFAULT_PHOTO;
	}

	onPhotoError(event: Event): void {
		(event.target as HTMLImageElement).src = DEFAULT_PHOTO;
	}
}
