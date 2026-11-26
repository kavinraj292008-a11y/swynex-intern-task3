# Task Management REST API

A RESTful Task Management API built using **Node.js, Express.js, MongoDB, and Mongoose** as part of a task assigned by **Swynex Technologies**.

 **Live API:** https://swynex-intern-task3.onrender.com

## Features

- Create, read, update, and delete tasks (CRUD).
- MongoDB database integration using Mongoose.
- API key authentication for protected endpoints.
- Request payload validation.
- Centralized error handling.
- Consistent JSON API responses.
- Environment variable configuration.

## Tech Stack

- Node.js
- Express.js
- MongoDB Atlas
- Mongoose
- JavaScript

## API Endpoints

Base URL: `https://swynex-intern-task3.onrender.com`

| Method | Endpoint | Description | Authentication |
|---|---|---|---|
| GET | `/health` | Health check | No |
| POST | `/api/tasks` | Create a task | API Key |
| GET | `/api/tasks` | Get all tasks | No |
| GET | `/api/tasks/:id` | Get task by ID | No |
| PUT | `/api/tasks/:id` | Update a task | API Key |
| DELETE | `/api/tasks/:id` | Delete a task | API Key |

## Authentication

Protected endpoints require an API key in the request header.

```http
x-api-key: YOUR_API_KEY
```

## Example Request

**Create a Task**

`POST /api/tasks`

Request body:

```json
{
  "title": "Learn Node.js",
  "description": "Build my first REST API",
  "status": "pending"
}
```

Supported task statuses:

- `pending`
- `in-progress`
- `completed`

## Installation and Setup

1. Clone the repository:

```bash
git clone https://github.com/kavinraj292008-a11y/swynex-intern-task3.git
```

2. Navigate to the project directory:

```bash
cd swynex-intern-task3
```

3. Install dependencies:

```bash
npm install
```

4. Create a `.env` file in the root directory:

```env
PORT=3000
NODE_ENV=development
MONGO_URI=your_mongodb_connection_string
API_KEY=your_secret_api_key
```

5. Start the development server:

```bash
npm run dev
```

The API will be available at:

`http://localhost:3000`

## Project Structure

```text
node-backend/
├── src/
│   ├── config/
│   │   └── db.js
│   ├── models/
│   │   └── task.model.js
│   ├── controllers/
│   │   ├── health.controller.js
│   │   └── task.controller.js
│   ├── middleware/
│   │   ├── apiKey.middleware.js
│   │   ├── validateTask.middleware.js
│   │   └── error.middleware.js
│   ├── routes/
│   │   ├── health.routes.js
│   │   └── task.routes.js
│   └── server.js
├── .env
├── .gitignore
├── package.json
└── README.md
```

## Deployment

The application is deployed on **Render**, with MongoDB Atlas used for cloud database connectivity.

🌐 **Live URL:** https://swynex-intern-task3.onrender.com

## Task Assignment

Developed as part of the task assigned by **Swynex Technologies**.

---

**Developed by Kavin Raj A.**
