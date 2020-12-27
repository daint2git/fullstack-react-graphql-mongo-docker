# fullstack graphql react mongo docker

## Development

### Generate .env file

```bash
cp ./api/.env.example ./api/.env

cp ./app/.env.example ./app/.env
```

### Build + run

```bash
docker-compose -f docker-compose.dev.yml up -d
```

### Re-build + run

```bash
docker-compose -f docker-compose.dev.yml up -d --build
```

### seed

```bash
docker exec -it my_api sh

yarn seed
```

### check db

```bash
docker exec -it my_db bash

mongo

use my_db

db.books.find()
```

### Run app in local

- app: <http://localhost:6969/>
- api: <http://localhost:4000/>

## Production

### (Production) Build + run

```bash
docker-compose -f docker-compose.prod.yml up -d
```

### (Production) Run app in local

- app: <http://localhost:80/>
- api: <http://localhost:1234/>

## Clean

```bash
docker system prune -a --volumes
```
