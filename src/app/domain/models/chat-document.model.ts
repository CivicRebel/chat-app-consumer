import { ChatMessage } from './chat-message.model';

export class ChatDocument {
	id?: number;
	profileId?: number;
	messages?: ChatMessage[];
}
