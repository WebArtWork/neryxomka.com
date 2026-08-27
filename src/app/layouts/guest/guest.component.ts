import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from '../footer/footer.component';
import { TopbarComponent } from '../topbar/topbar.component';

@Component({
	templateUrl: './guest.component.html',
	imports: [RouterOutlet, TopbarComponent, FooterComponent],
})
export class GuestComponent {}
