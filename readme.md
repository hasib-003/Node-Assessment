

Task Management System

This project is developed using typescript for backend development and typeorm for database management . In this project I develop a system where any user can register ,login using email and password , create task ,view task of their own . 
Getting started
To get started with this project, follow these steps:
Perquisites
Before you begin, ensure you have met the following requirements:
-Node.js and npm installed on your machine
-MySQL installed and running on your local environment 
-Git installed on your machine
Installation 
1. Clone the repository 
	git clone https://github.com/hasib-003/Node-Assessment.git
2. navigate to your project directory and install dependencies
	cd your-project
	npm install
usage  
Start the development server:
	npm run dev
Visit http://localhost:3000 in your browser to view the application.

API Documentation
User Registration
•	Endpoint : `api/register`
•	Method:POST
•	Request: 
{
  "username": "hasib",
  "email": "hasib@gmail.com",
  "password": "password1"
}
•	Response
{
  "message": "User registered successfully",
}
User login
•	Endpoint: `/api/login`
•	Method:POST
•	Request:
{
  "email": "hasib@gmail.com ",
  "password": "password1"
}
•	Response:
{
  "message": "Login successful",
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoxLCJ1c2VybmFtZSI6ImV4YW1wbGVfdXNlciIsImlhdCI6MTY0NzA2NTYwNCwiZXhwIjoxNjQ3MDY5MjA0fQ.6V35hoWOkw5FvmwAlcAC0g4ECPjFWA5cYWdA9b8p1l0",
}
Task Creation
•	Endpoint: `/api/tasks`
•	Method: POST
•	Request:
{
  "title": "Task 1",
  "description": "Description of Task 1",
  "status": "pending"
}
•	Response:
{
  "message": "Task created successfully",
  "task": {
    "id": 1,
    "title": "Task 1",
    "description": "Description of Task 1",
    "status": "pending",
    "userId": 1
  }
}
Task Retrival
•	Endpoints:`/api/tasks`
•	Method:GET
•	Response
[
  {
    "id": 1,
    "title": "Task 1",
    "description": "Description of Task 1",
    "status": "pending"
  },
  {
    "id": 2,
    "title": "Task 2",
    "description": "Description of Task 2",
    "status": "completed"
  }
]
Task Update
•	Endpoint: `/api/tasks`
•	Method:PUT
•	Request: 
{
 "status": "completed"
}
•	Response:
{
  "message": "Task updated successfully",
 }
Task Deletion
•	Endpoint:`/api/tasks`
•	Method:DELETE
•	Response:
{
  "message": "Task deleted successfully"
}
