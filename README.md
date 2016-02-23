# nodejs-user-authentication

nodejs-user-authentication is a restful api template for user authentication in nodeJS

### It uses
  - ExpressJS v4.13.4
  - bcrypt v0.8.5
  - JWT json web token for node v5.5.4
  - Mongoose v4.4.3
  - node-restful v0.2.5
  - node v4.3.1
 

### Installation

```sh
$ git clone https://github.com/kerosine9/nodejs-user-authentication.git testapp
$ cd testapp
$ npm install
```

### Configuration
Go to server/config/index.js and ...

```js
module.exports={
	mongodbConnection:'mongodb://localhost/user_service_dev',//change this for your mongo config
	jwtSecret:'super-secret-token' //Change this for any random string
	//other config vars must be here
}
```

### Run
Go to app folder and then run
```sh
$ node server/app.js
```
Then open the browser in http://localhost:40000/swagger/

# TODO
create seeds

### Usage
Go to the Auth tab and use the /authenticate endpoint

copy and paste the token in the token textfield

Now you can use the other end points

