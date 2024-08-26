# Development

Pasos para levantar la app en desarollo

1. Levantar la base de datos

```
docker-compose up
```

2.  Renombrar el .env.template a .env y agregar las variables de entorno

3.  Reemplazar las variables de entorno

4.  Ejecutar el comando `npm install`

5.  Ejecutar el comando `npm run dev`

6.  Ejecutar los comandos de prisma

```
npx prisma migrate dev

npx prisma generate
```

7.  ejecutar el Seed para [crear la base de datos local](localhost:3000/api/seed)

# Prisma commands

```
npx prisma init
npx prisma migrate dev
npx prisma generate

```
