import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Input } from '@angular/core';
import { Property } from '../../../property/property.interface';

@Component({
	selector: 'app-property-view',
	standalone: true,
	imports: [CommonModule],
	templateUrl: './property-view.component.html',
	styleUrl: './property-view.component.scss',
})
export class PropertyViewComponent {
	@Input() entity!: Property;
}
