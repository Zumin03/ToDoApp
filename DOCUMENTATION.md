# Todo Application Documentation / Todo Alkalmazás Dokumentáció

## English

### Overview
A modern Todo application built with Next.js (frontend) and NestJS (backend) featuring user authentication and private todo lists.

### Features
- User authentication (register/login)
- Create, edit, and delete todo items
- Private todo lists (users can only see their own todos)
- Modern UI with Tailwind CSS
- RESTful API backend
- JWT-based authentication
- PostgreSQL database

### Project Structure
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

### Technology Stack
#### Frontend
- Next.js 14
- React
- TypeScript
- Tailwind CSS
- React Context API

#### Backend
- NestJS
- TypeScript
- Prisma ORM
- PostgreSQL
- JWT Authentication
- Class Validator

### Setup Instructions

#### Backend Setup
1. Navigate to the backend directory:
   ```bash
   cd backend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env` file with the following variables:
   ```
   DATABASE_URL="postgresql://postgres:postgres@localhost:5432/todo_db?schema=public"
   JWT_SECRET="your-super-secret-key-change-in-production"
   PORT=3001
   ```

4. Start the database:
   ```bash
   docker-compose up -d
   ```

5. Run database migrations:
   ```bash
   npx prisma migrate dev
   ```

6. Start the development server:
   ```bash
   npm run start:dev
   ```

#### Frontend Setup
1. Navigate to the frontend directory:
   ```bash
   cd frontend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

### API Endpoints

#### Authentication
- `POST /api/auth/register` - Register a new user
- `POST /api/auth/login` - Login user
- `GET /api/auth/validate` - Validate JWT token

#### Todos
- `GET /api/todos` - Get all todos for the authenticated user
- `POST /api/todos` - Create a new todo
- `PUT /api/todos/:id` - Update a todo
- `DELETE /api/todos/:id` - Delete a todo

### Security Features
- JWT-based authentication
- Password hashing with bcrypt
- CORS configuration
- Input validation
- Private todo lists

---

## Magyar

### Áttekintés
Egy modern Todo alkalmazás, amely Next.js (frontend) és NestJS (backend) keretrendszereket használ, felhasználói hitelesítéssel és privát todo listákkal.

### Funkciók
- Felhasználói hitelesítés (regisztráció/bejelentkezés)
- Todo elemek létrehozása, szerkesztése és törlése
- Privát todo listák (felhasználók csak a saját todoikat láthatják)
- Modern felhasználói felület Tailwind CSS-sel
- RESTful API backend
- JWT alapú hitelesítés
- PostgreSQL adatbázis

### Projekt Struktúra
```
todo-app/
├── frontend/           # Next.js frontend alkalmazás
│   ├── src/
│   │   ├── app/       # Next.js app router oldalak
│   │   ├── contexts/  # React kontextusok (AuthContext)
│   │   └── styles/    # Globális stílusok
│   └── public/        # Statikus fájlok
└── backend/           # NestJS backend alkalmazás
    ├── src/
    │   ├── auth/      # Hitelesítési modul
    │   ├── todo/      # Todo modul
    │   ├── prisma/    # Adatbázis kliens
    │   └── main.ts    # Alkalmazás belépési pontja
    └── prisma/        # Adatbázis séma és migrációk
```

### Technológiai Stack
#### Frontend
- Next.js 14
- React
- TypeScript
- Tailwind CSS
- React Context API

#### Backend
- NestJS
- TypeScript
- Prisma ORM
- PostgreSQL
- JWT Hitelesítés
- Class Validator

### Telepítési Útmutató

#### Backend Telepítés
1. Navigálj a backend könyvtárba:
   ```bash
   cd backend
   ```

2. Telepítsd a függőségeket:
   ```bash
   npm install
   ```

3. Hozz létre egy `.env` fájlt a következő változókkal:
   ```
   DATABASE_URL="postgresql://postgres:postgres@localhost:5432/todo_db?schema=public"
   JWT_SECRET="your-super-secret-key-change-in-production"
   PORT=3001
   ```

4. Indítsd el az adatbázist:
   ```bash
   docker-compose up -d
   ```

5. Futtasd az adatbázis migrációkat:
   ```bash
   npx prisma migrate dev
   ```

6. Indítsd el a fejlesztői szervert:
   ```bash
   npm run start:dev
   ```

#### Frontend Telepítés
1. Navigálj a frontend könyvtárba:
   ```bash
   cd frontend
   ```

2. Telepítsd a függőségeket:
   ```bash
   npm install
   ```

3. Indítsd el a fejlesztői szervert:
   ```bash
   npm run dev
   ```

### API Végpontok

#### Hitelesítés
- `POST /api/auth/register` - Új felhasználó regisztrálása
- `POST /api/auth/login` - Felhasználó bejelentkeztetése
- `GET /api/auth/validate` - JWT token validálása

#### Todo-k
- `GET /api/todos` - Az összes todo lekérése a bejelentkezett felhasználóhoz
- `POST /api/todos` - Új todo létrehozása
- `PUT /api/todos/:id` - Todo frissítése
- `DELETE /api/todos/:id` - Todo törlése

### Biztonsági Funkciók
- JWT alapú hitelesítés
- Jelszó titkosítás bcrypt-tel
- CORS konfiguráció
- Bemeneti adatok validálása
- Privát todo listák 