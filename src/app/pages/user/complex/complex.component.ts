import { Component, computed, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs';
import { CardModule } from '@wawjs/ngx-prime/card';
import { TranslateDirective } from '@wawjs/ngx-translate';
import { ComplexViewComponent } from '../../../features/complex/complex-view/complex-view.component';
import { Complex } from '../../../features/complex/complex.interface';
import { complexes } from '../../../features/complex/complex.data';

@Component({
	imports: [ComplexViewComponent, CardModule, TranslateDirective],
	templateUrl: './complex.component.html',
	styleUrl: './complex.component.scss',
})
export class ComplexComponent {
	private readonly _route = inject(ActivatedRoute);

	private readonly _id = toSignal(
		this._route.paramMap.pipe(map((params) => params.get('id'))),
		{ initialValue: null },
	);

	readonly entity = computed<Complex | undefined>(() =>
		complexes.find((item) => item._id === this._id()),
	);

}
