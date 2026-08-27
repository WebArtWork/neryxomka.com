import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Input } from '@angular/core';
import { Agent } from '../../../agent/agent.interface';

@Component({
	selector: 'app-agent-view',
	standalone: true,
	imports: [CommonModule],
	templateUrl: './agent-view.component.html',
	styleUrl: './agent-view.component.scss',
})
export class AgentViewComponent {
	@Input() entity!: Agent;
}
