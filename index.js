// 1.Backend Module Load
const express = require('express');

// db1. Connect db.js
const sequelize = require("./db");

// Connect User Model
const User = require('./User')

// Sync connect db with npm server
sequelize.sync().then( () => console.log("[+] Database Connection is OK") );

// 2.Sever start
const app = express();

// db4. Serialize Json => Postman send request Post Request > Body > raw > Json > {include insert json}
app.use(express.json());

// 4.GET request
app.get('/', (req, res) => {
	res.send("Hellou baby");
})

// db3. Create POST request 
app.post('/user', (req, res) => {
	User.create(req.body).then(() => { res.send('User Created'); })
})

// 3.Listen port (port, callback)
app.listen(8000, () => {
	console.log('[+] Server is running 127.0.0.1:8000')
});

/*
Always autostart nodejs server

Before:
>>> node index.js

1.Install packege for auto start

>>> yarn --dev add nodemon

2.Open package.json 

...
"scripts": {
    "start": "nodemon index.js"
  },
...

3. Run Server
>>> yarn start
*/


/*
Sqlite3 connection

1. Yarn install

>>> yarn --dev add sqlite3
>>> yarn --dev add sequelize

2. Check package.json file 
3. Create database.js
*/
