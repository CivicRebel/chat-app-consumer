import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { ChatsOverviewComponent } from './components/chats-overview/chats-overview.component';
import { ChatListItemComponent } from './components/auxiliary-components/chat-list-item/chat-list-item.component';

@NgModule({
	declarations: [AppComponent, ChatsOverviewComponent],
	imports: [
		ChatListItemComponent,
		BrowserModule,
		IonicModule.forRoot(),
		AppRoutingModule,
	],
	providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
	bootstrap: [AppComponent],
})
export class AppModule {}
