# Student Management REST API

A simple REST API built with Express.js for managing students. All data is stored in memory (no database required).

## Prerequisites

- Node.js installed (download from https://nodejs.org/)

## Installation

1. Open terminal in this folder
2. Install dependencies:
   ```bash
   npm install
   ```

## Running the Server

```bash
npm start
```

The server will start on `http://localhost:3000`

## API Endpoints

### 1. Get All Students
```
GET /api/students
```
Returns all students in the list.

### 2. Get a Student by ID
```
GET /api/students/:id
```
Replace `:id` with the student ID (e.g., `/api/students/1`)

### 3. Create a New Student
```
POST /api/students
```
Send JSON body:
```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "age": 20
}
```

### 4. Update a Student
```
PUT /api/students/:id
```
Send JSON body with fields to update:
```json
{
  "name": "Jane Doe",
  "email": "jane@example.com",
  "age": 21
}
```

### 5. Delete a Student
```
DELETE /api/students/:id
```
Deletes the student with the given ID.

### 6. Health Check
```
GET /api/health
```
Checks if the API is running.

## Testing with Postman or cURL

### Get all students:
```bash
curl http://localhost:3000/api/students
```

### Create a student:
```bash
curl -X POST http://localhost:3000/api/students \
  -H "Content-Type: application/json" \
  -d "{\"name\":\"Alice\",\"email\":\"alice@example.com\",\"age\":19}"
```

### Get a specific student:
```bash
curl http://localhost:3000/api/students/1
```

### Update a student:
```bash
curl -X PUT http://localhost:3000/api/students/1 \
  -H "Content-Type: application/json" \
  -d "{\"name\":\"Bob\",\"age\":22}"
```

### Delete a student:
```bash
curl -X DELETE http://localhost:3000/api/students/1
```

## Notes

- Data is stored in memory, so it will reset when the server restarts
- Default port is 3000 (can be changed with PORT environment variable)
- Responses are in JSON format
