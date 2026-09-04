import {
	Component,
	computed,
	inject,
} from '@angular/core';
import { RouterLink } from '@angular/router';
import { UserService } from '@wawjs/ngx-bos';
import { TranslateDirective } from '@wawjs/ngx-translate';
import { companyProfile } from '../../features/company/company.data';
import { CompanyService } from '../../features/company/company.service';
import { FooterLink } from './footer.types';

@Component({
	selector: 'layout-footer',
	templateUrl: './footer.component.html',
	imports: [RouterLink, TranslateDirective],
})
export class FooterComponent {
	readonly userService = inject(UserService);
	readonly companyService = inject(CompanyService);

	readonly company = companyProfile;
	readonly year = new Date().getFullYear();
	readonly metaTitle = this.companyService.company().title;
	readonly metaDescription = this.companyService.company().description;

	private readonly allLinks = computed<FooterLink[]>(() => [
		{ label: 'Головна', icon: 'home', to: '/' },
		{ label: 'Стрічка', icon: 'images', to: '/feed' },
		{ label: 'Пошук', icon: 'search', to: '/explore' },
		{ label: 'Карта', icon: 'map', to: '/map' },
		{ label: 'Об’єкти', icon: 'building', to: '/properties' },
		{ label: 'Агентства', icon: 'briefcase', to: '/agencies' },
		{ label: 'Забудовники', icon: 'building-columns', to: '/developers' },
		{ label: 'Для користувачів', icon: 'home', to: '/for-users' },
		{ label: 'Для агентів', icon: 'id-card', to: '/for-agents' },
		{ label: 'Для забудовників', icon: 'building-columns', to: '/for-developers' },
		{ label: 'Для агентств', icon: 'briefcase', to: '/for-agencies' },
		{
			label: 'Для власників нерухомості',
			icon: 'key',
			to: '/for-property-owners',
		},
		{ label: 'Профіль', icon: 'user', to: '/profile' },
		{ label: 'Відгук', icon: 'comment', to: '/feedback' },
		{
			label: 'Користувачі',
			icon: 'user-edit',
			to: '/admin/users',
			adminOnly: true,
		},
		{
			label: 'Клієнти',
			icon: 'users',
			to: '/admin/clients',
			adminOnly: true,
		},
		{
			label: 'Форми',
			icon: 'table',
			to: '/admin/forms',
			adminOnly: true,
		},
		{
			label: 'Переклади',
			icon: 'language',
			to: '/admin/translates',
			adminOnly: true,
		},
	]);

	readonly links = computed(() => {
		const isAdmin = this.userService.role('admin');
		return this.allLinks().filter((l) => !l.adminOnly || isAdmin);
	});
}
