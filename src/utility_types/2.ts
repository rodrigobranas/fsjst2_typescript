interface Book {
	title: string,
	author: string,
	price: number
}

const book: Book = {
	title: "Clean Code",
	author: "Robert Martin",
	price: 49
}

function updateBook (updatedProperties: Pick<Book, "price">) {
	return Object.assign(book, updatedProperties);
}

const updatedProperties = {
	price: 69
}

console.log(updateBook(updatedProperties));
