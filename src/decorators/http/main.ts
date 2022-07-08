import express from "express";

export default class HttpServer {
	app: any;

	constructor () {
		this.app = express();
	}

	route (config: { method: string, path: string }) {
		return (target: any, propertyKey: string, descriptor: any) => {
			this.app[config.method](config.path, function (req: any, res: any) {
				const output = descriptor.value(req.params, req.body);
				res.json(output);
			});
		}
	}

	listen (port: number) {
		this.app.listen(port);
	}
}

const http = new HttpServer();

class Router {

	@http.route({ method: "get", path: "/items" })
	getItems() {
		return [
			{ idItem: 1 },
			{ idItem: 2 },
			{ idItem: 3 }
		];
	}
}

new Router();
http.listen(3000);
