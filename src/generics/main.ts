import { Repository } from "./Repository";
import { Person } from "./Person";

const persons = new Repository<Person>();
persons.add(new Person("Bob Martin", 60));
console.log(persons);
