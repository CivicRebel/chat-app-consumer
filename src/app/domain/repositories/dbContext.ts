// db.ts
import Dexie, { Table } from 'dexie';
import { ChatDocument } from 'src/app/domain/models/chat-document.model';

export class AppDB extends Dexie {
	chatsCollection!: Table<ChatDocument, number>;

	constructor() {
		super('offlineAccessDb');
		this.version(1).stores({
			chatsCollection: 'id, profileId, *messages',
		});
	}
}

export const db = new AppDB();
