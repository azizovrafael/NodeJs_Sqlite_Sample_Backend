# NodeJs_Sqlite_Sample_Backend
Nodejs Backend Simple User model with sqlite connection

Post Request:

```
var myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");

var raw = JSON.stringify({
  "username": "user",
  "email": "test@gmail.com",
  "password": "p4ssword"
});

var requestOptions = {
  method: 'POST',
  headers: myHeaders,
  body: raw,
  redirect: 'follow'
};

fetch("http://127.0.0.1:8000/user", requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));

```