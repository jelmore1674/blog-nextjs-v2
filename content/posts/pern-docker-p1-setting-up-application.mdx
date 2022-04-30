---
title: PERN Stack Docker Part 1 Setting Up
excerpt:
    Deploying Full-Stack PERN (PostgreSQL, Express, React, Node) applications
    can be difficult. You have to have a decoupled front-end which means you
    have to deploy the front-end and back-end separately. Docker can make
    deploying...
image: pern-stack-docker-p1.png
isFeatured: true
date: '2021-08-26'
---

-   [Setting up our application](#setting-up-our-application)
    -   [Setting up the NodeJS Server](#setting-up-the-nodejs-server)
    -   [Setting up React](#setting-up-react)
    -   [Setting up PostgreSQL](#setting-up-postgresql)
    -   [Docker Compose Configuration](#docker-compose-configuration)

Deploying Full-Stack PERN (PostgreSQL, Express, React, Node) applications can be
difficult. You have to have a decoupled front-end which means you have to deploy
the front-end and back-end separately. Docker can make deploying so much easier.
We can have a single docker container, to deploy your full-stack application.
So, lets build ourselves a simple application! What we will build is a Personal
Journal. Diary if you will.

## Setting up our application

To start we will create a new directory. I will call it `personal-journal` .
After you create that directory we will `cd` into the newly created directory.
Then make three more directories `client` , `server`, and `postgres`. We will
actually start with setting up the node server.

```bash
mkdir personal-journal
cd personal-journal
mkdir client server postgres
cd server
```

### Setting up the NodeJS Server

Now that we have navigated to the directory we shall initialize npm in our sever
folder.

```bash
npm init
```

Following the prompts we now have node in our project. Now, lets install some of
our dependencies.

```bash
npm install express cors pg knex
```

Now that we have our dependencies lets setup up our node server, lets set up our
`server.js` file.

```bash
touch server.js
```

I personally use VSCode as my editor of choice, but you can do this with atom or
your editor of choice. Just `cd` our of the server into the application
directory by doing the following.

```bash
cd ..
code .
```

Now VSCode should open and you can start to create your server. Lets start by
opening our server.js file. Lets make sure everything is working by putting this
in your `server.js`

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

app.listen(5000, () => {
	console.log('Server Is Running!');
});
```

Now if you run the command `node server.js ` and go to `http://localhost:5000/`
You should see "Server is working!" in the browser.

![node-is-working](node-is-working.png)

Now lets create some dummy data. This is how I want to the post object to be.
However, you can create whatever.

```js
// Dummy Data
const dummyJournalPost = {
	title: 'Coding is great',
	content: 'There are so many ways to use Javascript, I have had a blast.',
	date: '08-29-2021',
};
```

Now lets create a route that will read the dummy data.

```js
app.get('/posts', (req, res) => {
	const post = dummyJournalPost;
	res.json(post);
});
```

You should have gotten the dummy post returned in your browser.

Now that we have our dummy data returned, lets setup our docker file. First,
create a `.dockerignore` file. Put our `node_modules` in it. So we can ignore
those files. Then lets create our `Dockerfile`

```docker
FROM node:latest

WORKDIR /app/server

COPY ./ ./

RUN npm install

CMD ["/bin/bash"]
```

Now we can actually move on to adding our client. So, lets `cd` back to our root
folder by running the following command.

```bash
cd ..
```

### Setting up React

Now let's create our react app by using `create-react-app`

```bash
npx create-react-app client
```

It will create the react app in our client directory. So lets `cd` there and
remove git from the client.

```bash
cd client
rm -rf .git
```

The reason we remove git from the client is because we want the entire
application as a whole to be tracked in our main `personal-journal` directory.
Now that we have our react frontend installed, let fire it up to make sure it is
working.

```bash
npm start
```

Then you should navigate to `http:localhost:3000/` and you will see the react
homepage.

![cra-homepage](cra-homepage.png)

Now inside of our react app, in the app.js file lets use the React useEffect
hook to get our dummy data displayed on the home page.

```jsx
function App() {
	const [postData, setPostData] = React.useState('');

	React.useEffect(() => {
		const getData = async () => {
			const response = await fetch('http://localhost:5000/posts');
			const post = await response.json();
			setPostData(post);
		};
		getData();
	}, []);

	return (
		<div className='App'>
			<h2>{postData.title}</h2>
			<p>{postData.content}</p>
		</div>
	);
}

export default App;
```

Then you should have the content displayed in the browser. Now that we have our
frontend connected to our backend, let's work on setting up our client for
dockerization. We need a `Dockerfile` and a `.dockerignore` file. With these we
shall set up our .dockerignore by copying our .gitignore file a pasting it into
our .dockerignore file. Now lets create our Dockerfile.

```docker
FROM node:latest

WORKDIR /app/client

COPY ./ ./

RUN npm install

CMD ["/bin/bash"]
```

Now that we have our Dockerfile, we are ready for Docker.

### Setting up PostgreSQL

Postgres is great to setup, all we need to do is `cd` back to our project root
directory then navigate to the `Postgres` folder. Once there lets create a few
files.

```bash
mkdir seed tables
touch Dockerfile deploy_schemas.sql seed/seed.sql tables/posts.sql
```

Now inside of our editor let navigate to our Posgres folder and lets create our
table first. Lets look at our dummy data from earlier. It had the properties
`title`,`content`, and `date`. So our SQL should have that. So in our
`posts.sql` file. Lets build our table.

```sql
BEGIN TRANSACTION;

CREATE TABLE posts (
  id serial PRIMARY KEY,
  title VARCHAR(100) NOT NULL,
  content text NOT NULL,
  post_date timestamp NOT NULL
);

COMMIT;
```

Now in our seeds let's seed some random data into our database. Let's go to our
seed.sql file and add our queries to add some data.

```sql
BEGIN TRANSACTION;

INSERT INTO posts (title,content,post_date) VALUES('JS is really cool', 'While working with JS I have had so much fun.','2021-08-23');
INSERT INTO posts (title,content,post_date) VALUES('TS is better', 'While working with TS I have had so many less errors.','2021-08-25');

COMMIT;
```

Now that we have seed our tables, lets go to our `deploy_schemas` file and put
some set it up so we can deploy our schemas.

```sql
\i '/docker-entrypoint-initdb.d/tables/posts.sql'
\i '/docker-entrypoint-initdb.d/seed/seed.sql'
```

Now that is set up let's create our `Dockerfile` for Postgres.

```docker
FROM postgres:latest

ADD /tables/ /docker-entrypoint-initdb.d/tables/
ADD /seed/ /docker-entrypoint-initdb.d/seed/
ADD deploy_schemas.sql /docker-entrypoint-initdb.d/
```

### Docker Compose Configuration

Now that our `Dockerfile` for our `client`,`server`, and `postgres` are all set
up let's `cd` to the root of our project and create a new file called
`docker-compose.yml`. Now let's build our docker compose in the root of our
project.

```yml
version: '3.3'
services:
    # FrontEnd React
    web:
        container_name: client
        build: ./client
        working_dir: /app/client
        command: npm start
        ports:
            - 3500:3000
        volumes:
            - ./client:/app/client
        networks:
            - pernapp
    # Node Backend
    backend:
        container_name: backend
        build: ./server
        working_dir: /app/server
        command: npm start
        ports:
            - 5000:5000
        environment:
            POSTGRES_URI: postgres://user:pass@postgres:5432/personal-journal
        volumes:
            - ./server:/app/server
            - /app/server/node_modules/
        networks:
            - pernapp
        depends_on:
            - postgres

    # Postgres DB
    postgres:
        environment:
            POSTGRES_USER: user
            POSTGRES_PASSWORD: pass
            POSTGRES_DB: personal-journal
            POSTGRES_HOST: postgres
        build: ./postgres
        volumes:
            - ./postgres/pgdata:/var/lib/postgresql/data
        ports:
            - '5431:5432'
        networks:
            - pernapp
networks:
    pernapp:
        driver: bridge
```

Now lets build our containers by running the `docker-compose` command.

```bash
docker-compose build
```

The first time build will take a little time, then after it is build all we have
to do is run the command `docker-compose up` and we will see our app on
`localhost:3500`

We have a problem, we are not able to display our posts. This is a simple fix.
Let's go to our `app.js` in our client and fix it. When fetching data from our
db it comes in an array. So our `postData` will need to be mapped to display the
data.

```jsx
import React from 'react';
import PostCard from './components/post-card';
function App() {
	const [postData, setPostData] = React.useState('');

	React.useEffect(() => {
		const getData = async () => {
			const response = await fetch('http://backend:5000/posts');
			const post = await response.json();

			setPostData(post);
		};
		getData();
	}, []);

	return (
		<div className='App'>
			{postData !== ''
				? postData.map((post) => {
						return (
							<div>
								<h2>{post.title}</h2>
								<p>{post.content}</p>
							</div>
						);
				  })
				: null}
		</div>
	);
}

export default App;
```

Now we should be able to retrieve our data and have it displayed on our React
app. Now we have a full stack PERN app. It is just a shell of what it will
become, but it is a good place to start. Later, I will work on finishing the
app, and will share the journey with you guys. So until then, have a great day!
