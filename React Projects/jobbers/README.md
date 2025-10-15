🧠 Jobber — Job Search & Listing App

Jobber is a React-based web application that allows users to **search for live job listings** using the [Adzuna Jobs API](https://developer.adzuna.com/) and also view or manage **local job listings** stored in a static JSON file.  
It’s designed as a simple job board demo that can be extended into a full-fledged job platform.

---

🚀 Live Demo 
 https://jobbers-orpin.vercel.app/collars

## 🚀 Features

- 🔍 **Search live jobs** via the Adzuna API  
- 🗂️ **Display static job listings** from a local `jobs.json` file  
- 📄 **Job details page** for each listing  
- ⚡ **Fast, modern UI** built with React + Tailwind CSS  
- 💡 Clean component structure and reusable utilities  

---

## 🧩 Tech Stack

| Category | Tools / Libraries Used |
|-----------|------------------------|
| **Frontend** | React (Vite) |
| **Styling** | Tailwind CSS |
| **API Integration** | Adzuna API |
| **Local Data** | `jobs.json` (static file under `/public`) |
| **Routing** | React Router DOM |
| **State Management** | React Hooks (`useState`, `useEffect`) |

---

## 🏗️ Project Structure

Jobber/
├── public/
│ ├── jobs.json # Static local job data
│ └── index.html
├── src/
│ ├── API/
│ │ └── adzuna.js # Helper function to build Adzuna API URLs
│ ├── components/
│ │ ├── JobList.jsx # Displays all jobs
│ │ ├── JobPage.jsx # Displays job details
│ │ └── SearchBar.jsx # Job search input
│ ├── pages/
│ │ └── Home.jsx
│ ├── App.jsx
│ ├── main.jsx
│ └── index.css
├── .env # Contains Adzuna API credentials
├── package.json
└── README.md

yaml
Copy code

---

## 🔧 Environment Variables

Create a `.env` file in the root directory and add your Adzuna API credentials:

VITE_ADZUNA_APP_ID=your_app_id_here
VITE_ADZUNA_APP_KEY=your_app_key_here

yaml
Copy code

> ⚠️ **Important:** Never commit `.env` files with keys to public repos.

---

## ⚙️ Setup Instructions

### 1️⃣ Clone the repository
```bash
git clone https://github.com/yourusername/jobber.git
cd jobber
2️⃣ Install dependencies
bash
Copy code
npm install
3️⃣ Add your environment variables
Make sure your .env file contains the correct VITE_ADZUNA_APP_ID and VITE_ADZUNA_APP_KEY.

4️⃣ Start the development server
bash
Copy code
npm run dev
The app should be running at http://localhost:5173.

🌐 Example API Helper (adzuna.js)
javascript
Copy code
const BASE = "https://api.adzuna.com/v1/api/jobs";

export function buildAdzunaUrl({
  country = "gb",
  page = 1,
  what = "",
  where = "",
  results_per_page = 20,
}) {
  const params = new URLSearchParams({
    app_id: import.meta.env.VITE_ADZUNA_APP_ID,
    app_key: import.meta.env.VITE_ADZUNA_APP_KEY,
    results_per_page: String(results_per_page),
    what,
    where,
  });

  return `${BASE}/${country}/search/${page}?${params.toString()}`;
}
📄 Example Local JSON (/public/jobs.json)
json
Copy code
[
  {
    "id": 1,
    "title": "Frontend Developer",
    "company": "Tech Corp",
    "location": "London"
  },
  {
    "id": 2,
    "title": "Backend Engineer",
    "company": "Data Ltd",
    "location": "Manchester"
  }
]

🧠 How It Works
The app fetches live jobs from Adzuna using your credentials.

It also loads local jobs from jobs.json.

Both sets of jobs are rendered in the UI (can be displayed separately or merged).

Clicking a job redirects to /job/:id to view full details.

📦 Future Improvements
🔐 Add backend to post new jobs (Node.js or Firebase)

📱 Improve responsive design

💾 Add favorites/bookmarks feature

🔍 Add filters (salary, category, location)

🌍 Support multiple countries (US, UK, CA, etc.)

👨‍💻 Author
Berry Gold
Frontend & Web Developer

💼 GitHub Profile - Timi Maliki

🪪 License
This project is licensed under the MIT License.

yaml
Copy code

---

Would you like me to make this `README.md` include your **GitHub repo link and portfolio UR