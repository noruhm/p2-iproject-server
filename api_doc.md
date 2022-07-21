# dummYummy API Documentation

## Endpoint:
List of avaible endpoints:

- `GET /product `
- `POST /login`
- `POST /register`
- `GET /category`
- `GET /cost`
- `GET /order`
- `GET /payment`
- `GET /paymentstatus`
- `PATCH /paymentstatus`
- `DELETE /order/:id`
- `POST //order/:productId`

## 1. GET /product

Description:

- Get all product from database


Response:
200 - OK:

```
[
    {
        "id": 50,
        "name": "Sultanas",
        "CategoryId": 1,
        "imageUrl": "http://dummyimage.com/149x100.png/cc0000/ffffff",
        "description": "Spotting complicating pregnancy",
        "price": 12456,
        "createdAt": "2022-07-20T16:54:58.436Z",
        "updatedAt": "2022-07-20T16:54:58.436Z",
        "Category": {
            "id": 1,
            "name": "Fruits",
            "createdAt": "2022-07-20T16:54:58.422Z",
            "updatedAt": "2022-07-20T16:54:58.422Z"
        }
    },
   ....
]
```
## 2. GET /category
Description:

- Get all category from database


Response:
200 - OK:
```
[
    {
        "id": 1,
        "name": "Fruits",
        "createdAt": "2022-07-20T16:54:58.422Z",
        "updatedAt": "2022-07-20T16:54:58.422Z"
    },
    {
        "id": 2,
        "name": "Meat",
        "createdAt": "2022-07-20T16:54:58.422Z",
        "updatedAt": "2022-07-20T16:54:58.422Z"
    },
    ....
]
```

## 3. POST /register
Description:

- Register new user

Request
- Body
``` 
{ 
    name, email, password, phoneNumber, address 
}
```

Response:

- 201 - Created

```
{
      id: newuser.id,
      username: newuser.username,
      email: newuser.email,
}
```

- 400 - Bad Request

```
{
    message: "string"
}
```

## 4. POST /login

Description:

- Login

Response:

- 200 - OK

```
{
     access_token,
     email: user.email,
}
```

- 401 - Unauthorized

```
{ message: "Invalid username/password" }
```

## 5. GET /cost

Description:
- Get delivery cost 

Request
- Body
```
{
   destination,
   courier 
}
```

Response:

- 200 - OK

```
{
    data
}
```

## 6. GET /order

Description:
- Get User order

Request:
-Headers
```
{
    access_token
}
```

Response:
- 200 - Ok 
```
{
   totalOrder,
   userOrder 
}
```

## 7. GET /payment
Description:
- Get User Payment Link

Request:
-Headers
```
{
    access_token
}
```
Response:
- 200 - Ok 
```
{
   payment,
   order_id 
}
```

## 8. GET /paymentstatus
## 9. PATCH /paymentstatus
## 10. DELETE /order/:id  
## 11. POST //order/:productId