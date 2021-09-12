# Task Manager API

Api for managing tasks, you can add, edit, mark, delete tasks accordingly

Made with Node, Express, MongoDB, Mongoose

## Demo

Insert gif or link to demo

## Screenshots

![App Screenshot](https://via.placeholder.com/468x300?text=App+Screenshot+Here)

## API Reference

#### Get all tasks

```http
  GET /api/v1/tasks
```

#### Create task

```http
  POST /api/v1/tasks
```

#### Get Single task

```http
  GET /api/v1/tasks/:ID
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. ID of task to fetch |

#### Update task

```http
  PATCH /api/v1/tasks/:ID
```

| Parameter | Type     | Description                        |
| :-------- | :------- | :--------------------------------- |
| `id`      | `string` | **Required**. ID of task to update |

#### Delete task

```http
  DELETE /api/v1/tasks/:ID
```

| Parameter | Type     | Description                        |
| :-------- | :------- | :--------------------------------- |
| `id`      | `string` | **Required**. ID of task to delete |

## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

`MONGO_URI` = mongodb+srv://<your MongoDB access name>:<password>@nodeexpressprojects.50qvu.mongodb.net/myFirstDatabase?retryWrites=true&w=majority

`PORT` = port no you want to run in

# npm packages used

### dependensies

express

```http
  npm i express --save
```

mongoose

```http
  npm i mongoose
```

dotenv

```http
  npm i dotenv
```

### dev-dependensies

nodemon

```http
  npm i nodemon
```

## Run On Local-Machine

To startup nodemon

```http
  npm start
```

Manual start

```http
  node app.js
```

Explicit port initialization

```http
  PORT=<port-no> npm start
```

```http
  PORT=<port-no> node app.js
```
