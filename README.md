# Task Management Dashboard

This is a simple Task Management Dashboard built as part of a frontend assignment. The goal was to create a clean and functional UI using modern tools like Next.js, TypeScript, Tailwind CSS, and shadcn/ui.

---

## What this app does

- Lets users log in (mock authentication using localStorage)
- View all tasks in a dashboard
- Create new tasks using a modal form
- Edit and delete existing tasks
- Change task status (Todo, In Progress, Completed)
- Search tasks by title
- Filter tasks based on status
- Sort tasks by due date

---

## Tech Stack

- Next.js (App Router)
- TypeScript
- Tailwind CSS
- shadcn/ui

---

app/
  login/
  dashboard/
  layout.tsx
  page.tsx
  globals.css
  types.ts

components/
  ui/              // shadcn components
  TaskForm.tsx
  TaskList.tsx
  TaskCard.tsx

lib/
  utils.ts

public/

.gitignore
README.md
package.json
tsconfig.json
next.config.ts

---

## How to run this project

1. Clone the repo

```bash
git clone https://github.com/your-username/your-repo.git