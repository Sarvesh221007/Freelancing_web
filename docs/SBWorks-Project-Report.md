# SB-Works Freelancing Platform – Project Report

**Submitted by:** Sarvesh Kumar Singh  
**Internship Program:** SB-Works Freelance Internship  
**Submission Date:** June 24, 2025

---

## Table of Contents
1. Introduction  
2. Objectives  
3. Technologies Used  
4. System Architecture  
5. Features Implemented  
6. Screenshots  
7. Testing & Results  
8. Challenges Faced  
9. Future Scope  
10. Conclusion  
11. References

---

## 1. Introduction

SB-Works is a MERN-based freelancing platform developed as part of my internship. It enables Clients to post projects, Freelancers to bid and submit work, and Admins to manage users. The platform simulates a real-world freelance workflow using full-stack technologies.

---

## 2. Objectives

- Implement role-based login and registration
- Enable Clients to post projects and review freelancer bids
- Allow Freelancers to bid, submit work, and get rated
- Admin panel to manage users (block/unblock)
- Ensure full-stack integration and deploy to the cloud

---

## 3. Technologies Used

| Component    | Technology               |
|--------------|--------------------------|
| Frontend     | React.js, Axios, CSS     |
| Backend      | Node.js, Express         |
| Database     | MongoDB Atlas, Mongoose  |
| Authentication | JWT                    |
| Deployment   | Render                   |

---

## 4. System Architecture

**Frontend**: React client using Axios to send requests to the backend  
**Backend**: Express server handling routes, JWT auth, and DB logic  
**Database**: MongoDB Atlas for storing user/project data

---

## 5. Features Implemented

- User authentication & role-based authorization
- Clients can:
  - Post projects
  - View bids
  - Select freelancers
  - Submit feedback
- Freelancers can:
  - Browse and bid on projects
  - Submit completed work
  - View their ratings
- Admin:
  - View all users
  - Block/unblock accounts
- Filter projects by category and budget
- Freelancer rating system

---

## 6. Screenshots

Screenshots included in demo video and GitHub README.

---

## 7. Testing & Results

- Tested all user flows manually
- Verified token-based auth using Postman
- Projects tested on desktop and mobile browser

---

## 8. Challenges Faced

- Managing multiple roles securely in frontend/backend
- Handling file uploads on deployment
- Ensuring smooth communication between frontend and backend

---

## 9. Future Scope

- Chat feature between clients and freelancers
- Payment gateway integration (Stripe, Razorpay)
- Job recommendations based on tags and rating

---

## 10. Conclusion

SB-Works is a complete full-stack project that provides real-world experience with authentication, API design, MongoDB, and deployment. The project fulfills all internship goals and offers a solid base for expansion.

---

## 11. References

- https://reactjs.org  
- https://expressjs.com  
- https://www.mongodb.com/docs  
- https://jwt.io  
- Mentor sessions and course videos
