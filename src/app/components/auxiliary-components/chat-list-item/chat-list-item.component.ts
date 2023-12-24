import { Component, Input } from '@angular/core';
import { IonicModule } from '@ionic/angular';

@Component({
	selector: 'app-chat-list-item',
	standalone: true,
	imports: [IonicModule],
	templateUrl: './chat-list-item.component.html',
	styleUrls: ['./chat-list-item.component.scss'],
})
export class ChatListItemComponent {
	constructor() {}
}
