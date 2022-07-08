import Entity from "./Entity";

export class Book extends Entity {
	constructor (readonly title: string) {
		super(100);
	}
}