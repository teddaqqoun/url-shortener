# URL Shortener boilerplate


## Requierements

- Node 18
- Docker

## Getting started

Install dependencies:

```bash
npm i
```

Docker compose for postgres db :

```
docker-compose -f ./api/tools/docker-compose.yml up  -d
```

Launch migrations :

```
npm run migrate up -w api 
```

Run the app:

```bash
npm run dev -w app
```

Run the api:

```bash
npm run dev -w api
```

The app and api restart on code change.

Format code:

```bash
npm run format
```
