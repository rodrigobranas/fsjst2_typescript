drop table branas.book;
drop table branas.car;

create table branas.book (
	id serial,
	title text,
	author text
);

create table branas.car (
	id serial,
	md text,
	br text
);
