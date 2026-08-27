import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Input } from '@angular/core';
import { Complex } from '../../../complex/complex.interface';

@Component({
	selector: 'app-complex-view',
	standalone: true,
	imports: [CommonModule],
	templateUrl: './complex-view.component.html',
	styleUrl: './complex-view.component.scss',
})
export class ComplexViewComponent {
	@Input() entity!: Complex;
}
