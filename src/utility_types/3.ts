interface Car {
	brand: string
	model?: string,
}

const car: Required<Car> = {
	brand: "Fiat",
	model: "Palio"
}
