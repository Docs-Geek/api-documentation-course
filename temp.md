```shell
// TRUE

Request body: {
  ingredients: [ { ingredient_id: '6828cb40a465c20749ad3c42', is_essential: true } ],
  name: 'asdfsdfasd',
  description: 'asdf',
  category: 'Main Course',
  price: 34,
  preparation_time: 123,
  image_name: '123',
  station: 'cold'
}
POST /dishes 201 5.345 ms - 363

// FALSE
Request body: {
  ingredients: [
    { ingredient_id: '6828cb40a465c20749ad3c3c', is_essential: false }
  ],
  name: 'asdfasdfasdf',
  description: 'asdf',
  category: 'Main Course',
  price: 333,
  preparation_time: 333,
  image_name: '3333',
  station: 'cold'
}
POST /dishes 201 7.585 ms - 368
```
