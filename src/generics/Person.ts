import Entity from "./Entity"

export class Person extends Entity {
	constructor (readonly name: string, readonly age: number) {
		super(100);
	}
}