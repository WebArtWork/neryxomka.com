import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Input } from '@angular/core';
import { User } from '../../../user/user.interface';

@Component({
	selector: 'app-user-view',
	standalone: true,
	imports: [CommonModule],
	templateUrl: './user-view.component.html',
	styleUrl: './user-view.component.scss',
})
export class UserViewComponent {
	@Input() entity!: User;
}
