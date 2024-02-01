

# Task Management System

This project is developed using typescript for backend development and typeorm for database management . In this project I develop a system where any user can register ,login using email and password , create task ,view task of their own . 

# Getting started

To get started with this project, follow these steps:

**Perquisites**

Before you begin, ensure you have met the following requirements:

-Node.js and npm installed on your machine

-MySQL installed and running on your local environment 

-Git installed on your machine

**Installation**

1. Clone the repository 
	git clone https://github.com/hasib-003/Node-Assessment.git

3. navigate to your project directory and install dependencies
4. 
	cd your-project

	npm install

**usage**  
Start the development server:

	npm run dev
 
Visit http://localhost:3000 in your browser to view the application.

# API Documentation

**User Registration**

•	Endpoint : `api/register`<br>
•	Method:POST<br>
•	Request: <br><br>
{<br>
  "username": "hasib",<br>
  "email": "hasib@gmail.com",<br>
  "password": "password1"<br>
}<br><br>
•	Response<br>
{<br>
  "message": "User registered successfully",<br>
}<br>

**User login**<br>
•	Endpoint: `/api/login`<br>
•	Method:POST<br>
•	Request:<br><br>
	{<br>
  "email": "hasib@gmail.com ",<br>
  "password": "password1"<br>
	}<br>
•	Response:<br>
{<br>
  "message": "Login successful",<br>
  "token": <br>"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoxLCJ1c2VybmFtZSI6ImV4YW1wbGVfdXNlciIsImlhdCI6MTY0NzA2NTYwNCwiZXhwIjoxNjQ3MDY5MjA0fQ.6V35hoWOkw5FvmwAlcAC0g4ECPjFWA5cYWdA9b8p1l0",<br>
}<br><br>
**Task Creation**<br>
•	Endpoint: `/api/tasks`<br>
•	Method: POST<br>
•	Request:<br>
{<br>
  "title": "Task 1",<br>
  "description": "Description of Task 1",<br>
  "status": "pending"<br>
}<br>
•	Response:<br>
{<br>
  "message": "Task created successfully",<br>
  "task": {<br>
    "id": 1,<br>
    "title": "Task 1",<br>
    "description": "Description of Task 1",<br>
    "status": "pending",<br>
    "userId": 1<br>
  }<br>
}<br><br>
**Task Retrival**<br>
•	Endpoints:`/api/tasks`<br>
•	Method:GET<br>
•	Response<br>
[<br>
  {<br>
    "id": 1,<br>
    "title": "Task 1",<br>
    "description": "Description of Task 1",<br>
    "status": "pending"<br>
  },<br>
  {<br>
    "id": 2,<br>
    "title": "Task 2",<br>
    "description": "Description of Task 2",<br>
    "status": "completed"<br>
  }<br>
]<br><br>
**Task Update**<br>
•	Endpoint: `/api/tasks`<br>
•	Method:PUT<br>
•	Request: <br>
{<br>
 "status": "completed"<br>
}<br>
•	Response:<br>
{<br>
  "message": "Task updated successfully",<br>
 }<br><br>
****Task Deletion****<br>
•	Endpoint:`/api/tasks`<br>
•	Method:DELETE<br>
•	Response:<br>
{<br>
  "message": "Task deleted successfully"<br>
}<br>
