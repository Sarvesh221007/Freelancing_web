# SB-Works – API Documentation

## 🔐 Authentication

### POST `/auth/register`
Registers a new user  
**Body:**
```json
{
  "name": "John",
  "email": "john@example.com",
  "password": "password",
  "role": "client" // or "freelancer"
}



### POST `/auth/login`
Logs in a user 
**Body:**
```json
{
  "email": "john@example.com",
  "password": "password"
}



GET /auth/me
Get the current logged-in user
Authorization: Bearer <token>



POST /projects
Create a project (Client only)
{
  "title": "Landing Page",
  "description": "Design required",
  "budget": 500,
  "category": "Web Development"
}

GET /projects
Fetch all projects (with filters optional)

POST /projects/:id/bid
Place a bid (Freelancer only)

{
  "amount": 450,
  "proposal": "Can deliver in 3 days"
}

POST /projects/:id/select
Client selects a freelancer

{
  "bidId": "64f123..."
}


POST /projects/:id/submit
Submit work (Selected freelancer only)
Form Data:

file

description

POST /projects/:id/feedback
Submit feedback (Client only)
{
  "rating": 4.8,
  "message": "Excellent delivery"
}


👤 Freelancer Profile
GET /freelancer/:id
Get freelancer’s profile, ratings, and submitted projects


🛡️ Admin
GET /admin/users
List all users (Admin only)

PATCH /admin/block/:id
Block a user