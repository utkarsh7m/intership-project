# intership-project

Full-stack internship project containing a React frontend (`main`) and an Express + MongoDB backend (`main-backend`). This README documents the repository layout, how to run each part locally, available API endpoints, and helpful notes.

**Repository layout**
- `main/` — Frontend (React app)
- `main-backend/` — Backend (Node + Express + Mongoose)
- `.gitignore` — rules for files to ignore

**Prerequisites**
- Node.js (v16 or later recommended)
- npm (bundled with Node)
- MongoDB (local or a cloud MongoDB Atlas cluster)

---

## Frontend (`main`)

Quick start

1. Open a terminal and change to the frontend folder:
```powershell
cd 'd:\Xtr Code\ImpProject\intern project\main'
```
2. Install dependencies:
```powershell
npm install
```
3. Start the development server (check `package.json` for the exact script; commonly `npm start` or `npm run dev`):
```powershell
npm start
```

Notes
- The frontend expects the backend API at `http://localhost:3001` by default (CORS is configured in the backend to allow `http://localhost:3000`). If you run the frontend on a different port, update the backend CORS origin or adjust the frontend API base URL.

---

## Backend (`main-backend`)

Quick start

1. Change to the backend folder:
```powershell
cd 'd:\Xtr Code\ImpProject\intern project\main-backend'
```
2. Install dependencies:
```powershell
npm install
```
3. Start the server in development mode (uses `nodemon`):
```powershell
npm run dev
```

Database configuration
- By default the backend connects to MongoDB at `mongodb://localhost:27017` and uses the database name `fullybackend`. The connection is established in `data/userData.js`.
- To use a different MongoDB URI (e.g. Atlas), replace the connection string in `data/userData.js` or modify the code to read from an environment variable (recommended).

Recommended `.env` variables (if you adapt the code to use them):
- `MONGO_URI` — MongoDB connection string
- `PORT` — Server port (default: `3001`)

---

## API Endpoints (backend)

Base URL: `http://localhost:3001`

- POST `/api/pdMaster` — create a PDMaster record
  - Body: JSON object matching PD schema
- POST `/api/rdMaster` — create one or multiple RDMaster records
  - Body: either a single object or an array of objects; `recDate` should be an ISO date or parseable string
- GET `/api/pdmReport` — fetch all PDMaster records
- GET `/api/receiveReport` — fetch all RDMaster records

Examples (PowerShell)

- Create a PD record:
```powershell
Invoke-RestMethod -Method Post -Uri http://localhost:3001/api/pdMaster -ContentType 'application/json' -Body (@{ id='1'; product='Sample'; make='X'; model='M' } | ConvertTo-Json)
```

- Create RD records (array):
```powershell
$body = @(
  @{ id='r1'; recDate=(Get-Date).ToString('o'); person='Alice' },
  @{ id='r2'; recDate=(Get-Date).ToString('o'); person='Bob' }
)
Invoke-RestMethod -Method Post -Uri http://localhost:3001/api/rdMaster -ContentType 'application/json' -Body ($body | ConvertTo-Json)
```

- Fetch PD report:
```powershell
Invoke-RestMethod http://localhost:3001/api/pdmReport
```

---

## Development notes & suggestions
- Move configuration values (Mongo URI, port, allowed CORS origins) to environment variables with a `.env` file and `dotenv` in `main-backend`.
- Add input validation (for example `express-validator`) in the backend controllers to ensure payloads are correct before saving.
- Consider adding unit/integration tests for backend routes and frontend components.

## Git & repository notes
- This repository contains both frontend and backend within a single top-level repository (`main/` and `main-backend/`). `main` was unembedded and is tracked as part of the root repo (not a submodule).
- `.gitignore` files added to root, `main/`, and `main-backend/` to ignore `node_modules`, `.env`, and build artifacts.

---

If you'd like, I can:
- Add a `.env.example` and update `main-backend` to read config from environment variables.
- Start the backend here and run a quick sanity test hitting the API endpoints.

LICENSE: add one if you want to make the repo public with a specific license.
