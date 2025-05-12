# Next.js + Express + Typescript

This project is a fullstack application built with the latest technologies to demonstrate scalable, maintainable architecture for a mock user management system. It uses:

- **Frontend**: Next.js 15.3.2, React 19, Redux 9.2, TypeScript, MUI (Material UI)
- **Backend**: Express.js + TypeScript with Zustand for in-memory state, Zod for validation, and Faker.js for mock data

---

## 🔗 Live Demo

- **Frontend (Next.js)**: [next-js-todo-list-silk.vercel.app](https://next-js-todo-list-silk.vercel.app/)
- **Backend (Express API)**: [express-zod-zustand-faker.onrender.com](https://express-zod-zustand-faker.onrender.com/)

> Tip: Visit the root `/` of the backend to confirm server availability.

---

## ✨ Features

### Frontend
- Fully responsive UI with MUI
- Redux for global state management
- File-based routing with server-side API handling
- Centralized and customizable `axiosClient` for API requests
- Search, pagination, and user detail views
- Log interactions to the backend
- Vercel-deployed for fast global access

### Backend
- Uses Zustand to store mock users in memory
- Faker.js generates realistic user data
- Zod for query and body validation
- Includes `/api/users`, `/api/users/:id`, `/api/logs`, and `/` for root health
- Deployed on Render for simplicity

---

## 🛠️ Setup Instructions

### 🧩 Prerequisites

- Node.js v18+
- pnpm / npm / yarn installed

---

### 1. Clone the repository

```bash
git clone https://github.com/your-username/nextjs-express-demo.git
cd nextjs-express-demo
```
### 2. Install dependencies

```bash
# Install frontend dependencies
cd frontend
pnpm install

# Install backend dependencies
cd ../backend
pnpm install
```
### 3. Run locally

Start backend (port 4000)

```bash
pnpm dev
# or
npm run dev
```

Start frontend (port 3000)
```bash
cd ../frontend
pnpm dev
# or
npm run dev
```
### Folder Structure
```bash
├── frontend/            # Next.js frontend
│   ├── app/
│   ├── components/
│   ├── lib/
│   └── pages/
├── backend/             # Express backend
│   ├── index.ts
│   ├── mockData.ts
│   └── utils/
```

### API Reference
- GET /api/users?q=&page=1&limit=10
Returns paginated list of users matching optional query.

- GET /api/users/:id
Returns detailed user data.

- POST /api/logs
Logs interaction data (used in frontend search tracking).

### Author
*codeNcool* - ***"Build a house you want to live in"***