import { Categories } from "./Categories";
import Movie from "./Movie";

console.log(Categories.PROGRAMMING);
console.log(Categories.SCIENCE);
console.log(Categories.ENTERTAINMENT);

const movie = new Movie("Esqueceram de Mim 2", Categories.ENTERTAINMENT);
console.log(movie);
