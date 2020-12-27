# fullstack graphql react mongo docker

## Development

## Production

```bash
docker-compose up -d
```

## seed

```bash
docker exec -it my_api sh

yarn seed
```

## check db

```bash
docker exec -it my_db bash

mongo

use my_db

db.books.find()
```
