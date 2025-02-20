# CRUD API with TypeScript, Express

A simple CRUD API for managing resources.

## Features
- Create, Read, Update, and Delete resources.
- Filter resources by name.

## Technologies
- **TypeScript**
- **Express.js**
- **SQLite3**
- **Prisma** (ORM)

## Installation

1. Clone the repository
2. Install dependencies:
```bash
yarn install
```

3. Set up Prisma:
```bash
yarn prisma:generate
yarn prisma:migrate
```

4. Start the server:
```bash
yarn dev
```

## API Endpoints

### Create a Resource
```
curl -X POST http://localhost:3000/resources -H "Content-Type: application/json" -d '{"name": "Resource 1", "description": "This is a resource"}'
```

### List Resources
```
curl http://localhost:3000/resources?name=Resource
```

### Get Resource Details
```
curl http://localhost:3000/resources/1
```

### Update Resource
```
curl -X PUT http://localhost:3000/resources/1 -H "Content-Type: application/json" -d '{"name": "Updated Resource"}'
```

### Delete Resource
```
curl -X DELETE http://localhost:3000/resources/1
```
