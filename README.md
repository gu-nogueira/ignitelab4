# ignitelab4

Repo used in Ignite Lab 04 at [rocketseat.com.br](https://rocketseat.com.br)

## Technologies used

* NestJS
* Prisma

### Using NestJS

* [NestJS](https://nestjs.com/)
* [NestJS CLI](https://docs.nestjs.com/cli/overview)
* [NestJS Prisma](https://docs.nestjs.com/recipes/prisma)

### Using Prisma

* [Prisma](https://www.prisma.io/)

#### Install Prisma CLI

```bash
npm i prisma -D
```

#### Install Prisma Client

* [Prisma Client](https://www.prisma.io/docs/concepts/components/prisma-client)

```bash
npm i @prisma/client
```

#### Initialize Prisma

* [Prisma Init](https://www.prisma.io/docs/reference/api-reference/command-reference#init)

```bash
npx prisma init --datasource-provider postgresql
```

#### Running Prisma Migrate

* [Prisma Migrate](https://www.prisma.io/docs/concepts/components/prisma-migrate)

```bash
npx prisma migrate dev --name create-notifications
```

#### Running Prisma Studio (admin)

* [Prisma Studio](https://www.prisma.io/docs/concepts/components/prisma-studio)

```bash
npx prisma studio
```
