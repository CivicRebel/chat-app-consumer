import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { ChatsOverviewComponent } from './components/chats-overview/chats-overview.component';

const routes: Routes = [
	{
		path: '',
		component: ChatsOverviewComponent,
		pathMatch: 'full',
	},
];

@NgModule({
	imports: [
		RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
	],
	exports: [RouterModule],
})
export class AppRoutingModule {}
