import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Input } from '@angular/core';
import { Property } from '../../../property/property.interface';

@Component({
	selector: 'app-property-short',
	standalone: true,
	imports: [CommonModule],
	templateUrl: './property-short.component.html',
	styleUrl: './property-short.component.scss',
})
export class PropertyShortComponent {
	@Input() entity!: Property;
}
