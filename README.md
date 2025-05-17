### Database Setup
1. Navigate to root directory 
2. Create Docker container: `docker-compose up -d`

### Backend Setup
1. Navigate to the backend directory
2. Install dependencies: `npm install`
3. Database migration: `npx prisma migrate dev`
4. Run the development server: `npm run start:dev`

### Frontend Setup
1. Navigate to the frontend directory
2. Install dependencies: `npm install`
3. Run the development server: `npm run dev`

### Technologies Used

- Frontend: Next.js, React, TypeScript, Tailwind CSS
- Backend: NestJS, TypeScript, Prisma, PostgreSQL
- Authentication: JWT 