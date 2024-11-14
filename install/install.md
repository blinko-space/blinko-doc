# Docker Install
This document provides a basic guide on deploying Blinko with Docker.

## Prerequisites
- Access to a server with [Docker](https://www.docker.com/) installed

::: tip
Check [env](/install/runtime-options.html) to know what environment variables need to be configured.
:::

## Bash Install
```bash
curl -o install.sh https://raw.githubusercontent.com/blinko-space/blinko/main/install.sh && bash install.sh
```
::: tip
Please note that you must set the volumns binding to /app/.blinko , otherwise the upgrade will result in the loss of uploaded files!
:::


## Docker Install
Blinko use the [**postgres**](https://www.postgresql.org/download/windows/) database,use [pg_dump](https://www.postgresql.org/docs/current/app-pgdump.html) cli to export or import user's data,refer to [Schedule Backup](/advance-settings/schedule-backup.md)


### Step 1: Create the custom Docker network
```bash
docker network create blinko-network
```
### Step 2: Run the PostgreSQL database container
```bash
docker run -d \
  --name blinko-postgres \
  --network blinko-network \
  -p 5435:5432 \
  -e POSTGRES_DB=postgres \
  -e POSTGRES_USER=postgres \
  -e POSTGRES_PASSWORD=mysecretpassword \
  -e TZ=Asia/Shanghai \
  --restart always \
  postgres:14
```
### Step 3: Run the Blinko website container
```bash
docker run -d \
  --name blinko-website \
  --network blinko-network \
  -p 1111:1111 \
  -e NODE_ENV=production \
  -e NEXTAUTH_URL=http://localhost:1111 \
  -e NEXT_PUBLIC_BASE_URL=http://localhost:1111 \
  -e NEXTAUTH_SECRET=my_ultra_secure_nextauth_secret \
  -e DATABASE_URL=postgresql://postgres:mysecretpassword@blinko-postgres:5432/postgres \
  --restart always \
  blinkospace/blinko:latest
```

## Docker Compose
To deploy Blinko using docker compose, create a docker-compose.yml file with the following configuration:

```yml
networks:
  blinko-network:
    driver: bridge

services:
  blinko-website:
    image: blinkospace/blinko:latest
    container_name: blinko-website
    environment:
      NODE_ENV: production
      NEXTAUTH_URL: http://localhost:1111
      NEXT_PUBLIC_BASE_URL: http://localhost:1111
      NEXTAUTH_SECRET: my_ultra_secure_nextauth_secret
      DATABASE_URL: postgresql://postgres:mysecretpassword@postgres:5432/postgres
    depends_on:
      postgres:
        condition: service_healthy
    # Make sure you have enough permissions.
    # volumes:
      # - ~/your-name/.blinko:/app/.blinko 
    restart: always
    logging:
      options:
        max-size: "10m"
        max-file: "3"
    ports:
      - 1111:1111
    healthcheck:
      test: ["CMD", "curl", "-f", "http://localhost:1111/"]
      interval: 30s 
      timeout: 10s   
      retries: 5     
      start_period: 30s 
    networks:
      - blinko-network

  postgres:
    image: postgres:14
    container_name: blinko-postgres
    restart: always
    ports:
      - 5432:5432
    environment:
      POSTGRES_DB: postgres
      POSTGRES_USER: postgres
      POSTGRES_PASSWORD: mysecretpassword
      TZ: Asia/Shanghai
    healthcheck:
      test:
        ["CMD", "pg_isready", "-U", "postgres", "-d", "postgres"]
      interval: 5s
      timeout: 10s
      retries: 5
    networks:
      - blinko-network
```

Now, execute docker-compose command to initiate Blinko. 
```base
docker-compose -f docker-compose.yml up -d
```
