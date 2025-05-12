# Modern Todo Alkalmazás

Egy teljes veremű Todo alkalmazás Next.js, NestJS és Prisma használatával, hitelesítéssel és sötét mód támogatással.

## Funkciók

- 🔐 Felhasználói hitelesítés (bejelentkezés/regisztráció)
- ✅ Teendők létrehozása, olvasása, frissítése és törlése
- 🌓 Sötét/Világos mód rendszer beállítás alapján
- 📱 Reszponzív dizájn
- 🔒 JWT alapú hitelesítés
- 🎨 Modern felhasználói felület Tailwind CSS-sel
- 🚀 Gyors és hatékony Next.js és NestJS használatával

## Technológiai Verem

### Frontend
- Next.js 14
- React 18
- TypeScript
- Tailwind CSS
- Heroicons
- Context API állapotkezeléshez

### Backend
- NestJS
- TypeScript
- Prisma ORM
- PostgreSQL
- JWT Hitelesítés
- Passport.js

## Előfeltételek

- Node.js (v18 vagy újabb)
- PostgreSQL
- npm vagy yarn

## Telepítés

1. Klónozza a repository-t:
```bash
git clone <repository-url>
cd todo-app
```

2. Telepítse a frontend függőségeket:
```bash
cd frontend
npm install
```

3. Telepítse a backend függőségeket:
```bash
cd backend
npm install
```

4. Állítsa be a környezeti változókat:

Hozzon létre egy `.env` fájlt a backend könyvtárban:
```env
DATABASE_URL="postgresql://username:password@localhost:5432/todo_db"
JWT_SECRET="your-secret-key"
PORT=3001
```

5. Inicializálja az adatbázist:
```bash
cd backend
npx prisma migrate dev
```

## Alkalmazás Futtatása

1. Indítsa el a backend szervert:
```bash
cd backend
npm run start:dev
```

2. Indítsa el a frontend fejlesztői szervert:
```bash
cd frontend
npm run dev
```

Az alkalmazás a következő címen érhető el:
- Frontend: http://localhost:3000
- Backend: http://localhost:3001

## Projekt Struktúra

