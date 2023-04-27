# Team-13-Backend

## API Definition

### Table Create

#### Request

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

#### Response

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

### Table finder

#### Request

```js
GET api/tables
```

```js
GET api/tables?location=2&capacity=4
```

#### Response

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

### Table find by id

#### Request

```js
GET api/table/5bee0afa-6d46-4cfb-bc9d-ee2fd4e706f3
```

#### Response

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

### Table update

#### Request

```js
PUT api/table/5bee0afa-6d46-4cfb-bc9d-ee2fd4e706f3

{
  "number_table": 50,
  "capacity": 10,
  "location": 4
}
```

#### response

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

### Reservation create

#### Request

```js
GET api/reservations
```

```js
{
  "number_people": 10,
  "table_id": "5bee0afa-6d46-4cfb-bc9d-ee2fd4e706f3",
  "name_customer": "Neilla Lechmere",
  "number_phone_customer": 9846416416,
  "createdAt": "2023-04-26T00:17:38.801Z"
}
```

#### Response

```js
201 Created
```

```js
{
  "status": "Success",
  "message": "Reservation created",
  "data": {
    "id": "7667e4a1-d0c2-4874-9c62-0a0828f6fcae",
    "status": 1,
    "number_people": 10,
    "customer": {
      "id": "d51d7083-b2f6-4c77-840a-83316810dfb9",
      "name": "Neilla Lechmere",
      "createdAt": "2023-04-20T08:37:23.513Z"
    },
    "table": {
      "id": "5bee0afa-6d46-4cfb-bc9d-ee2fd4e706f3",
      "number_table": 1,
      "capacity": 4,
      "location": 4,
      "createdAt": "2023-04-20T08:35:05.947Z",
      "updatedAt": "2023-04-20T08:35:05.947Z"
    },
    "createdAt": "2023-04-20T08:37:23.513Z",
    "updatedAt": "2023-04-20T08:37:23.513Z"
  }
}
```

```js
404 Not Found
```

```json
{
  "status": "Error",
  "message": "Table not found \"5bee0afa-6d46-4cfb-bc9d-ee2fd3\""
}
```

### Reservation finder

#### Request

```js
GET api/reservations
```

```js
GET api/reservations?state=2&fecha=2020-04-20&table=c36a7d10-5a54-4cea-8acf-794eaf161efe
```

#### Response

```js
200 OK
```

```js
{
  "status": "Success",
  "message": "Reservations gotten",
  "data": [
    {
      "id": "hwTLq4C4-f76y-yfY1-o4lC-kyk4WwwvPuhD",
      "status": 2,
      "customer_id": "b6a3f98c-5e7f-4576-907e-896ba79c3ae6",
      "number_people": 2,
      "table_id": "c36a7d10-5a54-4cea-8acf-794eaf161efe",
      "createdAt": "2023-04-22T05:48:56.080Z",
      "updatedAt": "2023-04-22T05:48:56.080Z"
    }
  ]
}
```

### Reservation find by id

#### Request

```js
GET api/reservations/O99Yq4Zx-jgJv-IY5X-62yr-uEMcrgVKfX5y
```

#### Response

```js
200 OK
```

```json
{
  "status": "Sucess",
  "message": "Reservation gotten",
  "data": {
    "id": "O99Yq4Zx-jgJv-IY5X-62yr-uEMcrgVKfX5y",
    "status": 1,
    "number_people": 4,
    "customer": {
      "id": "33bae21c-7cb1-4571-b3f6-97c91842e82b",
      "name": "Fabian Delgado",
      "number_phone": 46786786,
      "createdAt": "2023-04-22T06:18:18.354Z"
    },
    "table": {
      "id": "6744d3a0-6418-424e-93b3-cf88350981bb",
      "number_table": 4,
      "capacity": 2,
      "location": 3,
      "createdAt": "2023-04-22T06:18:18.052Z",
      "updatedAt": "2023-04-22T06:18:18.052Z"
    },
    "createdAt": "2023-04-22T06:18:18.334Z",
    "updatedAt": "2023-04-22T06:18:18.334Z"
  }
}
```

```js
404 Not Found
```

```json
{
  "status": "Error",
  "message": "Reservation not found \"O99Yq4Zx-jgJv-IY5X-62yr-uEMcrgVKf\""
}
```

### Reservation update

#### Request

```js
PUT api/table/c36a7d10-5a54-4cea-8acf-794eaf161efe
```

```js
{
  "status": 2,
  "number_people": 7,
  "table_id": "c36a7d10-5a54-4cea-8acf-794eaf161efe",
  "updatedAt": "2023-04-20T15:35:05.947Z"
}
```

#### Response

```js
200 OK
```

```json
{
  "status": "Sucess",
  "message": "Reservation Updated",
  "data": {
    "id": "O99Yq4Zx-jgJv-IY5X-62yr-uEMcrgVKfX5y",
    "status": 2,
    "customer_id": "33bae21c-7cb1-4571-b3f6-97c91842e82b",
    "number_people": 7,
    "table_id": "c36a7d10-5a54-4cea-8acf-794eaf161efe",
    "createdAt": "2023-04-20T08:35:05.958Z",
    "updatedAt": "2023-04-20T15:35:05.947Z"
  }
}
```

```js
404 Not Found
```

```json
{
  "status": "Error",
  "message": "Reservation not found \"O99Yq4Zx-jgJv-IY5X-62yr-uEMcrgVKf\""
}
```
