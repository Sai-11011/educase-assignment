# School Management API

A Node.js + Express.js + MySQL based REST API system to manage school data.

This project allows users to:
- Add new schools
- Retrieve schools sorted by proximity to a user’s location

---

# Tech Stack

- Node.js
- Express.js
- MySQL
- Postman

---

# Project Structure

```bash
school-management-api/
│
├── js/
│   ├── db.js
│   ├── controller.js
│   ├── routes.js
│   └── distance.js
│
├── .env
├── server.js
├── package.json
└── README.md
```

---

# Installation & Setup

## 1. Clone Repository

```bash
git clone https://github.com/Sai-11011/educase-assignment.git
```

```bash
cd educase-assignment
```

---

## 2. Install Dependencies

```bash
npm install
```

---

## 3. Configure Environment Variables

Create a `.env` file in the root directory.

```env
PORT=5000

DB_HOST=localhost
DB_USER=root
DB_PASSWORD=your_password
DB_NAME=school_management
DB_PORT=3306
```

---

# Database Setup

Run the following SQL queries in MySQL:

```sql
CREATE DATABASE school_management;

USE school_management;

CREATE TABLE schools (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    address VARCHAR(255) NOT NULL,
    latitude FLOAT NOT NULL,
    longitude FLOAT NOT NULL
);
```

---

# Run the Project

Development Mode:

```bash
npm run dev
```

Production Mode:

```bash
npm start
```

Server runs on:

```txt
http://localhost:5000
```

---

# API Endpoints

## 1. Add School

### Endpoint

```http
POST /addSchool
```

### Request Body

```json
{
  "name": "ABC School",
  "address": "Hyderabad",
  "latitude": 17.385,
  "longitude": 78.4867
}
```

### Success Response

```json
{
  "message": "School added successfully"
}
```

---

## 2. List Schools

Returns schools sorted by distance from user location.

### Endpoint

```http
GET /listSchools
```

### Query Parameters

| Parameter | Type  | Description    |
| --------- | ----- | -------------- |
| latitude  | Float | User latitude  |
| longitude | Float | User longitude |

### Example Request

```http
GET /listSchools?latitude=17.385&longitude=78.4867
```

### Example Response

```json
[
  {
    "id": 1,
    "name": "ABC School",
    "address": "Hyderabad",
    "latitude": 17.385,
    "longitude": 78.4867,
    "distance": 0
  },
  {
    "id": 2,
    "name": "XYZ School",
    "address": "Bangalore",
    "latitude": 12.9716,
    "longitude": 77.5946,
    "distance": 499.99
  }
]
```

---

# Distance Calculation

The API uses the Haversine Formula to calculate geographical distance between user coordinates and school coordinates.

---

# Postman Collection
```link
https://sai-11011-5517338.postman.co/workspace/JAMMANA-SAI-SRINIVAS's-Workspac~48ab26d4-aedd-4c06-8462-ceea9623bdf1/collection/55040304-9787e54d-d6f1-471c-8ba5-a900bb4f63c7?action=share&source=copy-link&creator=55040304
```
---

# Live API

BASE_URL_HERE

Example:

```txt
https://educase-assignment-nine-sage.vercel.app/addSchool
```

```txt
https://educase-assignment-nine-sage.vercel.app/listSchools?latitude=17.385&longitude=78.4867
```

---

# Features

* RESTful APIs
* MySQL Database Integration
* Input Validation
* Distance-Based Sorting
* Express Middleware
* Environment Variable Support

