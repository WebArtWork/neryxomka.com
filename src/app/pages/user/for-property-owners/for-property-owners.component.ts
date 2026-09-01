import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { ButtonModule } from '@wawjs/ngx-prime/button';
import { AccordionModule } from '@wawjs/ngx-prime/accordion';
import { TranslateService } from '@wawjs/ngx-translate';
import { LeadFormComponent } from '../../../shared/lead-form/lead-form.component';

@Component({
	selector: 'app-for-property-owners',
	imports: [ButtonModule, AccordionModule, LeadFormComponent],
	templateUrl: './for-property-owners.component.html',
	styleUrl: './for-property-owners.component.scss',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ForPropertyOwnersPageComponent {
	readonly translateService = inject(TranslateService);

	readonly showForm = signal(false);

	readonly faq = [
		{
			question: 'Чим власник відрізняється від агента на Neryxomka?',
			answer: 'Власник керує саме своєю нерухомістю: публікує оголошення, веде історію об’єкта та вирішує, чи залучати агента.',
		},
		{
			question: 'Чи можу я опублікувати оголошення без агента?',
			answer: 'Так, ви можете самостійно опублікувати оголошення про продаж або оренду, а пізніше в будь-який момент залучити агента.',
		},
		{
			question: 'Що станеться з історією об’єкта після продажу?',
			answer: 'Цифровий паспорт нерухомості залишається прив’язаним до об’єкта і переходить разом із ним до нового власника.',
		},
	];
}
