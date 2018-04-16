import { Component, ElementRef, Renderer } from '@angular/core';
declare var window: any;

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
export class AppComponent {
	constructor(private el: ElementRef, private renderer: Renderer) {
	}
	onMenuClick() {
		// if (window.innerWidth <992){
		// 	this.el.nativeElement.querySelector('.navbar-toggler')[0].click();
		// }
	}

	title = 'app';
}
