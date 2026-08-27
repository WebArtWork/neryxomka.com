import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Input } from '@angular/core';
import { Developer } from '../../../developer/developer.interface';

@Component({
	selector: 'app-developer-view',
	standalone: true,
	imports: [CommonModule],
	templateUrl: './developer-view.component.html',
	styleUrl: './developer-view.component.scss',
})
export class DeveloperViewComponent {
	@Input() entity!: Developer;
}
