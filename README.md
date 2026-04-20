# AI Intern Assignment – Arjun Choudhary

## Name
Arjun 

## Email
arjunschoudhary.work@gmail.com.com

## Date of Submission
21 April 2026

---

## Project Overview
This assignment demonstrates frontend development and automation workflows using n8n. It includes a student lead capture form and two automation workflows.

---

## Part A – Student Lead Capture Form

### Description
A responsive form built using pure HTML, CSS, and vanilla JavaScript.

### Features
- Required field validation with inline error messages
- Email format validation
- Country dropdown
- Course level radio buttons (UG / PG / PhD)
- Preferred university input field
- Message field with 300-character live counter
- Prevents page reload using `event.preventDefault()`
- Displays success message after submission
- Logs submitted data as JSON in browser console

### How to Run
Open `part-a/index.html` in a browser (preferably using Live Server).

---

## Part B1 – Lead Notification Workflow (n8n)

### Workflow Name
B1 Lead Notification Workflow

### Flow
Webhook → Edit Fields → IF → Branching

### Logic
- Webhook receives lead data (simulating form POST)
- Edit Fields node extracts and renames:
  - name
  - email
  - courseLevel
  - message
- IF node checks:
  - If courseLevel = PG or PhD → High Value Lead
  - Else → Normal Lead

### Note
Mock Set nodes were used to represent:
- Notification step (instead of Email/Slack)
- Logging step (instead of Google Sheets)

This was done because external credentials were not configured.

---

## Part B2 – Scheduled Data Fetch Workflow (n8n)

### Workflow Name
B2 Scheduled Data Fetch Workflow

### API Used
https://jsonplaceholder.typicode.com/posts

### Why this API
This API is public, requires no authentication, and provides structured JSON data suitable for testing automation workflows.

### Flow
Schedule Trigger → HTTP Request → Code → Edit Fields

### Logic
- Schedule Trigger runs workflow at defined intervals
- HTTP Request fetches data from API
- Code node processes the response and extracts:
  - postId
  - title
  - body
- Edit Fields node structures the final output

---

## Part C – Integration (Bonus)

### Status
Not completed.

### Note
Due to time constraints, the integration of the frontend form with the n8n webhook (end-to-end demonstration) was not fully completed.

---

## Repository Structure

ai-intern-assignment-arjun/

│  
├── part-a/  
│   ├── index.html  
│   ├── styles.css  
│   └── script.js  
│  
├── part-b/  
│   ├── workflow-b1-lead-notification.json  
│   ├── workflow-b2-scheduled-fetch.json  
│   ├── screenshot-b1.png  
│   └── screenshot-b2.png  
│  
└── README.md  

---

## Credentials / Environment Variables
No external credentials were used. Mock nodes were implemented where required.

---

## Challenges Faced
- Understanding n8n workflows from scratch
- Connecting different nodes and handling data flow
- Structuring API responses into clean output format

---

## How I Resolved Them
- Built workflows step-by-step and tested each node individually
- Used console logs and node outputs to debug data flow
- Simplified logic before adding transformations
