import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Agent } from '../../../agent/agent.interface';

@Component({
	selector: 'app-agent-form',
	standalone: true,
	imports: [CommonModule, ReactiveFormsModule],
	templateUrl: './agent-form.component.html',
	styleUrl: './agent-form.component.scss',
})
export class AgentFormComponent {
	@Input() entity?: Agent;

	readonly form: FormGroup;

	constructor(private readonly fb: FormBuilder) {
		this.form = this.fb.group({
			displayName: ['', Validators.required],
			photo: [''],
			bio: [''],
			country: ['', Validators.required],
			city: ['', Validators.required],
			yearsExperience: [0, [Validators.min(0), Validators.max(80)]],
			contactPhone: ['', Validators.pattern(/^[+0-9() -]{6,}$/)],
			contactEmail: ['', [Validators.required, Validators.email]],
		});
	}

	ngOnInit(): void {
		if (this.entity) {
			this.form.patchValue(this.entity);
		}
	}
}
