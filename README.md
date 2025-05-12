# Todo Application

A modern Todo application built with Next.js (frontend) and NestJS (backend) featuring user authentication and private todo lists.

## Features

- User authentication and authorization
- Create, edit, and delete todo lists
- Private todo lists (users can only see their own todos)
- Modern and responsive UI
- RESTful API backend

## Project Structure

```
todo-app/
├── frontend/          # Next.js frontend application
└── backend/           # NestJS backend application
```

## Setup Instructions

### Backend Setup
1. Navigate to the backend directory
2. Install dependencies: `npm install`
3. Create a `.env` file with the following variables:
   ```
   DATABASE_URL=your_database_url
   JWT_SECRET=your_jwt_secret
   ```
4. Run the development server: `npm run start:dev`

### Frontend Setup
1. Navigate to the frontend directory
2. Install dependencies: `npm install`
3. Create a `.env.local` file with:
   ```
   NEXT_PUBLIC_API_URL=http://localhost:3001
   ```
4. Run the development server: `npm run dev`

## Technologies Used

- Frontend: Next.js, React, TypeScript, Tailwind CSS
- Backend: NestJS, TypeScript, Prisma, PostgreSQL
- Authentication: JWT 