# Microservices Documentation

## Producer-A Microservice

### Description
The `producer-a` microservice is responsible for producing messages to an AWS SQS queue. It is built using Node.js and NestJS.

### Prerequisites
- Docker
- Docker Compose

### Running the Service

1. Navigate to the `producer-a` directory:
    ```sh
    cd producer-a
    ```

2. Build and start the service using Docker Compose:
    ```sh
    docker-compose up --build
    ```

3. The service will be available at `http://localhost:3016`.

### Environment Variables
- `REVIEW THE .env.example FILE TO CHECK THE CONFIG THAT YOU NEED TO SETOP`

### Docker Compose Configuration
The `docker-compose.yml` file for `producer-a` is configured as follows:
```yml
version: '3.7'
services:
  service-a:
    build: .
    ports:
      - "3016:3016"

## Consumer-B Microservice

### Description
The `consumer-b` microservice is responsible for consuming messages from an AWS SQS queue. It is built using Node.js and NestJS.

### Prerequisites
- Docker
- Docker Compose

### Running the Service

1. Navigate to the `consumer-b` directory:
    ```sh
    cd consumer-b
    ```

2. Build and start the service using Docker Compose:
    ```sh
    docker-compose up --build
    ```

3. The service will be available at `http://localhost:3017`.

### Environment Variables
- `REVIEW THE .env.example FILE TO CHECK THE CONFIG THAT YOU NEED TO SETUP`

### Docker Compose Configuration
```yml
version: '3.7'
services:
  service-b:
    build: .
    ports:
      - "3017:3017"