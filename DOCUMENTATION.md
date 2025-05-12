# Modern Todo Application

A full-stack Todo application built with Next.js, NestJS, and Prisma, featuring authentication and dark mode support.

## Features

- 🔐 User authentication (login/register)
- ✅ Create, read, update, and delete todos
- 🌓 Dark/Light mode with system preference detection
- 📱 Responsive design
- 🔒 JWT-based authentication
- 🎨 Modern UI with Tailwind CSS
- 🚀 Fast and efficient with Next.js and NestJS

## Tech Stack

### Frontend
- Next.js 14
- React 18
- TypeScript
- Tailwind CSS
- Heroicons
- Context API for state management

### Backend
- NestJS
- TypeScript
- Prisma ORM
- PostgreSQL
- JWT Authentication
- Passport.js

## Prerequisites

- Node.js (v18 or higher)
- PostgreSQL
- npm or yarn

## Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd todo-app
```

2. Install frontend dependencies:
```bash
cd frontend
npm install
```

3. Install backend dependencies:
```bash
cd backend
npm install
```

4. Set up environment variables:

Create `.env` in the backend directory:
```env
DATABASE_URL="postgresql://username:password@localhost:5432/todo_db"
JWT_SECRET="your-secret-key"
PORT=3001
```

5. Initialize the database:
```bash
cd backend
npx prisma migrate dev
```

## Running the Application

1. Start the backend server:
```bash
cd backend
npm run start:dev
```

2. Start the frontend development server:
```bash
cd frontend
npm run dev
```

The application will be available at:
- Frontend: http://localhost:3000
- Backend: http://localhost:3001

## Project Structure

```
todo-app/
├── frontend/           # Next.js frontend application
│   ├── src/
│   │   ├── app/       # Next.js app router pages
│   │   ├── contexts/  # React contexts (AuthContext)
│   │   └── styles/    # Global styles
│   └── public/        # Static assets
└── backend/           # NestJS backend application
    ├── src/
    │   ├── auth/      # Authentication module
    │   ├── todo/      # Todo module
    │   ├── prisma/    # Database client
    │   └── main.ts    # Application entry point
    └── prisma/        # Database schema and migrations
```

## API Endpoints

### Authentication
- POST /api/auth/register - Register a new user
- POST /api/auth/login - Login user

### Todos
- GET /api/todos - Get all todos
- POST /api/todos - Create a new todo
- GET /api/todos/:id - Get a specific todo
- PUT /api/todos/:id - Update a todo
- DELETE /api/todos/:id - Delete a todo

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details. 