import { ChatDocument } from '../domain/models/chat-document.model';

export interface IRepository<EntityType, Key> {
	addInstance(instance: EntityType): Key;
	updateInstance(instance: EntityType): void;
	getInstanceById(id: Key): EntityType;
	deleteInstance(id: Key): void;
}

export class RepositoryBase<EntityType, Key>
	implements IRepository<EntityType, Key>
{
	addInstance(instance: EntityType): Key {
		throw new Error('Method not implemented.');
	}
	updateInstance(instance: ChatDocument): void {
		throw new Error('Method not implemented.');
	}
	getInstanceById(id: number) {
		return new ChatDocument();
		throw new Error('Method not implemented.');
	}
	deleteInstance(id: number): void {
		throw new Error('Method not implemented.');
	}
}
