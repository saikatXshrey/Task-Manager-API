# Task Manager API

Api for managing tasks, you can add, edit, mark, delete tasks accordingly

Made with Node, Express, MongoDB, Mongoose

## Demo

Insert gif or link to demo

## Screenshots

![Screenshot (47)](https://user-images.githubusercontent.com/76695320/132977276-9e4807bc-58cd-40bb-8d17-9add007b8c87.png)
![Screenshot (48)](https://user-images.githubusercontent.com/76695320/132977278-66da1288-a4fc-4183-b8f3-4a3cd31f9571.png)
![Screenshot (49)](https://user-images.githubusercontent.com/76695320/132977280-cf619f54-63a9-442a-b4d5-1733dc9058aa.png)
![Screenshot (51)](https://user-images.githubusercontent.com/76695320/132977288-0fc8344b-146a-49b0-8861-733b68669b0f.png)
![Screenshot (52)](https://user-images.githubusercontent.com/76695320/132977289-a237ab9a-417a-427b-a369-1a06951d6a49.png)


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
