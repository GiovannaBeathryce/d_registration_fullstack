# d_registration_fullstack

## Installation
  To start this project, it will be necessary to create an .env file inside the server directory with the data to fill in the keys sent in the .env.exemple file.
After this step, if your access data is correct, all the necessary information will be filled in automatically in the database.js and app.js files.
Now just run the following commands and your hambient will be ready to start.

### Client

  1. `$ cd client/registration_frontend`
  2. `$ npm install` or `$ yarn install`
  3. `$ npm start` or `$ yarn start`
  
### Server

  1. Change your mySQL database data `server/index.js`
  2. `$ cd server`
  3. `$ npm install` or `$ yarn`
  4. `$ npm rum dev` or `$ yarn dev`
  
## Functionalities

  + Create users and contacts in the database
  + Read users and contacts in the database
  + Update users and contacts in the database
  + Delete users and contacts in the database
  + Click card to edit and delete
  
## Endpoints front-end

  /home - new user registration page
  /login - Login page after user is registered.
  /contatos - Protected page only for logged in users, where you can update or delete your contacts and/or your account.
  
## Endpoints back-end
  /user - Creating and listing users
  /user/id -Deletion, update and listing by user id
  /login - user login and authentication for access token generation
  /contatos - Creating and listing contacts
  /contatos/id - Deletion, update and listing by contact id
  
## Used Libraries

  ### Front-end

    + `@react-icons`
    + `styled-components`
    + `react-hook-form` 
    + `react-router-dom` 
    + `Axios`

  ### Back-end

    + `express`
    + `Postgres`
    + `nodemon`
    + `bcrypt`
    + `jsonwebtoken`
    + `pg`
    + `cors`
