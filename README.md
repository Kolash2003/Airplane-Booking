This is a base node js project, which anyone can use as it has been prepared by keeping some of the most important code principles and project management recommendations. Feel free to change anything.

`src` -> Inside the src folder all the actual source regarding the project will reside, this will not include any kind of test. (You might want to make separate tests folder)

Lets take a look inside the `src` folder

- `config` -> In this folder everything regarding any configurations or setup of a library or module will be done. For example: setting us `dotenv` so that we can use environment variables anywhere in a cleaner fashion, this is done in the `server.config.js`. One more example can be to setup you logging library that can help you to prepare meaningful logs, so configuration for this library should also be done here.

- `routes` -> In the routes folder we register the route and corresponding middleware and controllers to it.

- `middlewares` -> They are just going to intercept the incoming requests where we can write our validators, authenticators etc.

- `controllers` -> They are kind of the last middlwares as post them you call your business layer to execute the business logic. In controllers we just receive the incoming requests and data and then passs it to the business layer and once business layer returns an output, we structure the API response in controllers and send the output.

- `repositories` -> this folder contains all the logic using which we interact with the DB by writing queries, all the raw queries or ORM queries will go here.

- `services` -> contains the business logic and interacts with repositories for data from the database

- `utils` -> contains helper methods, error classes etc.

### Setup the project

- Download this template from github and open it in your favourite text editor.

- go inside the folder and execute the following command
  ```
    npm install
  ```

- In the root directory create a `.env` file and add the following env variables
    ```
        PORT=<port number of your choice>
    ```

    ex: 
    ```
        PORT=3000
    ```
- go inside the `src` folder and execute the following command:
      ```
        npx sequelize init
      ```
- If you are setting up your development environment, then write the username of your DB, password of your DB and in dialect mention whatever Db you are using for ex: mysql, mariadb etc.

- If you're setting up test or prod environment, make sure you also replace the host with the hosted db url.

- To run the server ecevute
```
  npm run dev
```
