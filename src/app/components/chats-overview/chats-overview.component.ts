import { Component, OnInit } from '@angular/core';
import { db } from 'src/app/domain/repositories/dbContext';

@Component({
	selector: 'app-chats-overview',
	templateUrl: './chats-overview.component.html',
	styleUrls: ['./chats-overview.component.scss'],
})
export class ChatsOverviewComponent implements OnInit {
	constructor() {}

	ngOnInit() {
		this.listTodoItems();
	}

	async addNewItem() {
		await db.chatsCollection.add({
			id: 3,
			profileId: 5,
			messages: [
				{
					messageId: 4,
					content: 'New Message!',
					fromProfileId: 542,
					dateReceived: new Date(),
				},
			],
		});

		this.listTodoItems();
	}

	async listTodoItems() {
		console.log(await db.chatsCollection.toArray());
	}
}
