import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { EntityComment } from '../../../comment/comment.interface';

@Component({
	selector: 'app-comment-form',
	standalone: true,
	imports: [CommonModule, ReactiveFormsModule],
	templateUrl: './comment-form.component.html',
	styleUrl: './comment-form.component.scss',
})
export class CommentFormComponent {
	@Input() entity?: EntityComment;

	readonly form: FormGroup;

	constructor(private readonly fb: FormBuilder) {
		this.form = this.fb.group({
			entityType: ['property', Validators.required],
			rating: [null, [Validators.min(1), Validators.max(5)]],
			text: ['', [Validators.required, Validators.maxLength(2000)]],
		});
	}

	ngOnInit(): void {
		if (this.entity) {
			this.form.patchValue(this.entity);
		}
	}
}
