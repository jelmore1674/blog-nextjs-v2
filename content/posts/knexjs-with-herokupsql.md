---
title: Using KnexJS With HerokuPostgres
excerpt: When working on a NodeJS project working with an SQL database can be a
    little tricky. There are several options to be able to build SQL queries.
    You have ORM's such as...
image: knexjs-with-herokupsql.png
isFeatured: true
date: '2021-08-07'
---

When working on a NodeJS project working with an **_SQL_** database can be a
little tricky. There are several options to be able to build SQL queries. You
have ORM's such as [sequelize](http://sequelize.org/). Me, personally, I prefer
to use [knexjs](https://knexjs.org/). KnexJS is great for building queries. It
does it in a human readable and understandable way.

```js
const users = await db.select('*').from('login');
for (let i = 0; i < users.length; i++) {
	if (users[i].email == email && users[i].hash == password) {
		const user = await db
			.select('*')
			.from('users')
			.where('email', '=', email);
		return res.json(user);
	}
}
```

## Installing PostreSQL

First things first, lets set up a local environment. Make sure you install
PostreSQL, to your local machine. Follow the guide from
[postrgresql](https://www.postgresql.org/download/) and for the direction on your OS.
Once you have installed Postgres, run the _psql_ command in your terminal.

```bash
psql
psql (13.3)
Type "help" for help.
=#
```

### Create Database

Now that we have Postgres installled we should create a database.

```bash
CREATE DATABASE knexjsdb;
```

You have to have the semicolon at then end or else it will not run the query. If
successful you should have _CREATE DATABASE_ return after calling the query.

### Create TABLE

Now we should create our tables, for this we will exit the psql in the terminal
by typing

```bash
\q
```

Then you should go to a SQL Editor and Database Manager. I am going to be using
[Beekeeper Studio](https://www.beekeeperstudio.io/). However, you can use
[PopSQL](https://popsql.com/) or [DBeaver](https://dbeaver.io/) or whatever
editor you prefer.

Go to the query section and create a table.

```sql
CREATE TABLE users (
  id serial not null primary key,
  name varchar(30),
  email varchar(50) not null
  );
```

Then you should be able to go to the table within the GUI, and see where your
new table is.

![Beekeeper Studio](beekeeperstudio-img.jpg)

### Seed Data into Our Table

Now we will seed some dummy data, so we can verify it works.

```sql
INSERT into users (name, email) values ('Justin', 'justin@justin.com');
INSERT into users (name, email) values ('John', 'john@justin.com');
INSERT into users (name, email) values ('Joey', 'joey@justin.com');
```

## Setup our server.js file

Now that we have a table in our Postgres database, lets set up our _server.js_
file. To start lets create a new directory and add the file to it.

```bash
mkdir knexjsTutorial
cd knexjsTutorial
touch server.js
```

Then initial the directory using _npm init_ following the prompts to set up your
file.

```bash
npm init
```

Followed by installing express to your server.

```bash
npm install express cors nodemon pg
```

I use VSCode as my editor of choice, so I will use the code command here. If you
use sublime, atom, or most other editors use the command for that editor to open
the window for it.

```bash
code .
```

In your package.json file, go to the scripts section and change the start script
to nodemon.

```json
"scripts": {
    "start": "nodemon server.js"
  }
```

Now I will build the server.js file with express.

```js
// import dependencies
const express = require('express');
const cors = require('cors');

// Start Express
const app = express();

// Req Obj as JSON
app.use(express.json());
// CORS Header to avoid errors
app.use(cors());

app.get('/', (req, res) => {
	res.send('Server is working!');
});

app.listen(process.env.PORT || 4500, () => {
	console.log('Server Is Running!');
});
```

Now you should be able to run the start command and see it working.

```bash
npm start
```

![server-working](server-working.jpg)

## Installing knex.js

Now that our server is running, let's add knex to our server. Open your terminal
and navigate to your project folder. Once there run the following commands.

```bash
npm install knex
```

Once you have install the package for KnexJS import knex into our main server.js
file.

```js
const knex = require('knex');
```

Lets connect to our database.

```js
const db = knex({
    client: 'pg',
    connection: {
        host: '127.0.0.1',
        user: '',
        password: '',
        database: 'knexjsdb',
    }
```

After we are connected, lets build a query to select our seeded data from
earlier.

```js
app.get('/', async (req, res) => {
	const users = await db.select('*').from('users');
	res.json(users);
});
```

To build a query just use the db const created from the constant earlier. Then
using normal SQL select all from the table. You should recieve the json data
from the database.

![json-data](json-data.jpg)

Now we are able to read the data from our database. Now I will add the post
route. So we can insert new rows to the table.

## Adding data to Postgres using KnexJS

Now that we are able to fetch data from our postgres database, we should now
work on adding data to our database.

Lets create our post route.

```js
app.post('/', (req, res) => {
	// Destructure our req.body
	const { email, name } = req.body;
	// Create new user object
	const newUser = {
		name: name,
		email: email,
	};
	//Output newUser
	res.json(newUser);
});
```

Now to add the data to our database we need to use knex. We will add it like
this.

```js
app.post('/', async (req, res) => {
	// Destructure our req.body
	const { name, email } = req.body;
	// Create a new user object
	const newUser = {
		name: name,
		email: email,
	};
	// Await the db insert new object into users
	let user = await db.insert(newUser, '*').into('users');
	res.status(201).json({ message: 'successfully added user', user: user[0] });
});
```

When running this query, I it will return the newUser Object. Then when you go
to the get route it you will see the new user added to the db.

## Deploying to Heroku

Now we shall deploy our project to [heroku.](https://www.heroku.com) I will be
using the Heroku CLI. [Heroku](https://devcenter.heroku.com/articles/git) has a
guide on deploying via the CLI. All you have to do is run the following command.

```bash
heroku create
```

Now that we have created our heroku-app lets create our Procfile.

```dockerfile
web:node server.js
```

Now that we have our procfile, lets push our project to heroku. All you have to
do is run the following command.

```bash
git push heroku main
```

Then we should add postgres to our heroku app.

```bash
heroku addons:create heroku-postgresql:hobby-dev
```

Now lets connect to our postgres via the command line.

```bash
heroku pg:psql
```

Now we can create the table like we did in the beginning. Just copy and paste
the following query into the psql command line.

```sql
CREATE TABLE users (
  id serial not null primary key,
  name varchar(30),
  email varchar(50) not null
  );
```

Now that we have our table, we can seed the data from before in postgres as we
did before.

```sql
INSERT into users (name, email) values ('Justin', 'justin@justin.com');
INSERT into users (name, email) values ('John', 'john@justin.com');
INSERT into users (name, email) values ('Joey', 'joey@justin.com');
```

Now lets exit out of psql

```bash
\q
```

### Connect HerokuPostgres to knexjs

Now we have to make a change to our connection.

```js
const db = knex({
	client: 'pg',
	connection: {
		connectionString: process.env.DATABASE_URL,
		ssl: {
			rejectUnauthorized: false,
		},
	},
});
```

Heroku manages the dotenv for us, so we will use that so we can connect to our
database. Now instead of testing in the browser, lets test using
[Postman](https://www.postman.com). So we are going to add our heroku link into
the bar and run a get reqest. We should get our seeded data from earlier
returned.

![seeded-data-image](seeded-data.jpg)

Now I will change the GET request and change it to a POST request. Now add a
json object with the name and email properties.

```json
{
	"name": "Joey",
	"email": "joey5@gmail.com"
}
```

Now we shall run this request and you should have the user we just added
returned back to us.

![post-request](post-request.jpg)

Then lets change it back to a GET request and we should now see we have the new
user returned as well.

![final-request](final-request.jpg)

Now we have a node server, connected to postgres, using knex, all hosted on
heroku. I will share a link to the
[repo](https://github.com/jelmore1674/knexjsTutorial). I hope this gives people
the chance to use postgres with their node applications. To reach out to me
visit my [portfolio](https://justinelmore.dev). Just remember guys. Take care
and enjoy coding!
