# WanderNest - Full-Stack Travel Booking Website

Phase 1 implementation of a travel booking platform using:
- **Frontend:** React + Vite
- **Backend:** Node.js + Express
- **Database:** MongoDB + Mongoose

## Features Implemented

- Home page with hero section and key selling points
- Packages listing page
- Package details page
- Basic booking form
- Backend API endpoint to save bookings to MongoDB
- Environment variable support on both client and server
- Clean, modern, responsive UI

> Payment gateway is intentionally **not included** in this phase.

---

## Project Structure

```bash
.
├── client/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── api.js
│   │   ├── data.js
│   │   ├── App.jsx
│   │   ├── main.jsx
│   │   └── styles.css
│   ├── .env.example
│   └── package.json
├── server/
│   ├── src/
│   │   ├── config/db.js
│   │   ├── controllers/bookingController.js
│   │   ├── middleware/errorHandler.js
│   │   ├── models/Booking.js
│   │   ├── routes/bookingRoutes.js
│   │   └── index.js
│   ├── .env.example
│   └── package.json
└── README.md
```

---

## Setup Instructions

### 1) Clone and enter project

```bash
git clone <your-repo-url>
cd My-website-
```

### 2) Install dependencies

```bash
cd client && npm install
cd ../server && npm install
```

### 3) Configure environment variables

#### Server env

```bash
cd server
cp .env.example .env
```

Edit `server/.env` with your MongoDB connection string.

#### Client env

```bash
cd ../client
cp .env.example .env
```

---

## Run the application

### Start backend (terminal 1)

```bash
cd server
npm run dev
```

Backend runs on `http://localhost:5000`.

### Start frontend (terminal 2)

```bash
cd client
npm run dev
```

Frontend runs on `http://localhost:5173`.

---

## API Endpoints

### Health check
- `GET /api/health`

### Create booking
- `POST /api/bookings`

Sample payload:

```json
{
  "packageId": "bali-retreat",
  "packageName": "Bali Tropical Retreat",
  "fullName": "John Doe",
  "email": "john@example.com",
  "phone": "+1-202-555-0111",
  "travelDate": "2026-06-10",
  "travelers": 2,
  "notes": "Need airport pickup"
}
```

---

## Notes

- Package content is currently seeded in frontend local data for Phase 1.
- Bookings are persisted in MongoDB.
- Next phase can add authentication, admin management, and payments.
