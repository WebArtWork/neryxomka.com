import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { AnimateOnScrollModule } from '@wawjs/ngx-prime/animateonscroll';
import { ButtonModule } from '@wawjs/ngx-prime/button';
import { CardModule } from '@wawjs/ngx-prime/card';
import { TranslateDirective, TranslateService } from '@wawjs/ngx-translate';

interface HomeFeature {
	number: string;
	icon: string;
	title: string;
	description: string;
	linkLabel: string;
}

interface HomeHistoryEvent {
	date: string;
	icon: string;
	title: string;
	description: string;
	tag: string;
}

interface HomeAudience {
	number: string;
	route: string;
	title: string;
	description: string;
}

@Component({
	imports: [
		RouterLink,
		ButtonModule,
		CardModule,
		TranslateDirective,
		AnimateOnScrollModule,
	],
	templateUrl: './home.component.html',
	styleUrl: './home.component.scss',
})
export class HomeComponent {
	readonly translateService = inject(TranslateService);

	readonly historyEvents: HomeHistoryEvent[] = [
		{
			date: 'Червень 2026',
			icon: 'pi pi-file',
			title: 'Планове обслуговування',
			description: 'Перевірка системи опалення',
			tag: 'Сервіс',
		},
		{
			date: 'Березень 2025',
			icon: 'pi pi-bolt',
			title: 'Оновлення комунікацій',
			description: 'Заміна труб водопостачання',
			tag: 'Оновлення',
		},
		{
			date: 'Вересень 2024',
			icon: 'pi pi-home',
			title: 'Ремонт квартири',
			description: 'Зафіксовані роботи та зміни',
			tag: 'Ремонт',
		},
	];

	readonly features: HomeFeature[] = [
		{
			number: '01',
			icon: 'pi pi-file-check',
			title: 'Цифровий паспорт',
			description:
				'Повна історія об’єкта: ремонти, заміни комунікацій та обслуговування в одному місці.',
			linkLabel: 'Знати більше',
		},
		{
			number: '02',
			icon: 'pi pi-images',
			title: 'Стрічка об’єктів',
			description:
				'Перегортайте пропозиції, зберігайте цікаве та повертайтеся до своїх фаворитів будь-коли.',
			linkLabel: 'Знайти своє',
		},
		{
			number: '03',
			icon: 'pi pi-map',
			title: 'Пошук на карті',
			description:
				'Об’єкти, комплекси та забудовники за розташуванням. Із фільтрами під ваш запит.',
			linkLabel: 'Обрати локацію',
		},
		{
			number: '04',
			icon: 'pi pi-building',
			title: 'Агенції та агенти',
			description:
				'Профілі фахівців поруч із нерухомістю. Зрозумійте, хто представляє об’єкт і з ким спілкуватися.',
			linkLabel: 'Познайомитися',
		},
	];

	readonly audiences: HomeAudience[] = [
		{
			number: '01',
			route: '/for-users',
			title: 'Покупцям',
			description: 'Дізнайтеся історію житла до перегляду.',
		},
		{
			number: '02',
			route: '/for-property-owners',
			title: 'Власникам',
			description: 'Збережіть історію та покажіть цінність свого об’єкта.',
		},
		{
			number: '03',
			route: '/for-agents',
			title: 'Агентам',
			description: 'Представляйте нерухомість із повнішою картиною.',
		},
		{
			number: '04',
			route: '/for-agencies',
			title: 'Агенціям',
			description: 'Об’єднайте профіль, агентів та об’єкти в одному місці.',
		},
		{
			number: '05',
			route: '/for-developers',
			title: 'Забудовникам',
			description: 'Покажіть свої комплекси та історію їхнього розвитку.',
		},
	];
}
