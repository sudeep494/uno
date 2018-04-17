import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CollapseModule } from 'ngx-bootstrap';

import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { GridComponent } from './grid/grid.component';
import { ListComponent } from './list/list.component';

const appRoutes: Routes = [
	{ path: 'nav1', component: ListComponent },
	{ path: 'nav2', component: GridComponent },
	{ path: 'dashboard', component: DashboardComponent },
	{ path: '', component: DashboardComponent }
]


@NgModule({
	declarations: [
		AppComponent,
		DashboardComponent,
		GridComponent,
		ListComponent
	],
	imports: [
		BrowserModule,
		RouterModule.forRoot(
			appRoutes,
			{ enableTracing: true } // <-- debugging purposes only
		),
		CollapseModule.forRoot()
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
