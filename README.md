# Team-13-Backend

Team 13

# API Definition

## Create Table

#### Create Table Request

```js
POST api/tables
```

```json
{
  "number_table": 1,
  "capacity": 9,
  "location": 9
}
```

#### Create table Response

```js
201 Created
```

```json
{
  "status": "Success",
  "message": "Table created",
  "data": {
    "id": "b69f8a2a-2f2c-42d5-8896-5d286ed9dffb",
    "number_table": 1,
    "capacity": 9,
    "location": 9,
    "createdAt": "2023-04-12T15:13:57.257Z"
  }
}
```

## Table finder

#### Table finder Request

```js
GET api/tables
```

```js
GET api/tables?location=2&capacity=4
```

#### Table finder Response

```js
200 OK
```

```json
{
  "status": "Success",
  "message": "Tables gotten",
  "data": [
    {
      "id": "d30482bf-37ad-4947-bb8d-0eae2e7a95d3",
      "number_table": 1,
      "capacity": 9,
      "location": 9,
      "createdAt": "2023-04-12T15:13:56.083Z"
    },
    {
      "id": "b69f8a2a-2f2c-42d5-8896-5d286ed9dffb",
      "number_table": 1,
      "capacity": 9,
      "location": 9,
      "createdAt": "2023-04-12T15:13:57.257Z"
    }
  ]
}
```

## Find Table By Id

#### Find Table By Id Request

```js
GET api/table/id
```

```js
GET api/table/5bee0afa-6d46-4cfb-bc9d-ee2fd4e706f3
```

#### Find table by id Response

```js
200 OK
```

```json
{
  "status": "Success",
  "message": "Table gotten",
  "data": {
    "id": "5bee0afa-6d46-4cfb-bc9d-ee2fd4e706f3",
    "number_table": 1,
    "capacity": 4,
    "location": 4,
    "createdAt": "2023-04-14T04:26:11.560Z"
  }
}
```

```js
404 Not Found
```

```json
{
  "status": "Error",
  "message": "Table not found \"23\""
}
```

## Update Table

#### Update Table Request

```js
PUT api/table/id
```

```js
PUT api/table/5bee0afa-6d46-4cfb-bc9d-ee2fd4e706f3

{
  "number_table": 50,
  "capacity": 10,
  "location": 4
}
```

#### Update Table Response

```js
200 OK
```

```json
{
  "status": "Success",
  "message": "Table Updated",
  "data": {
    "id": "5bee0afa-6d46-4cfb-bc9d-ee2fd4e706f3",
    "number_table": 50,
    "capacity": 10,
    "location": 4,
    "createdAt": "2023-04-17T02:43:27.988Z",
    "updatedAt": "2023-04-17T02:44:24.212Z"
  }
}
```

```js
404 Not Found
```

```json
{
  "status": "Error",
  "message": "Table not found \"23\""
}
```
