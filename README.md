
# Job Scanner (Full‑Stack Personal Project)
![hackaton](https://github.com/user-attachments/assets/a0a3109a-5e80-4a40-935a-63ab9f7b029c)


## Overview
Job Scanner is a full‑stack project I built end‑to‑end (Python backend + React frontend). It aggregates job postings from multiple public APIs, normalizes & filters them (keywords, location, remote), caches results to speed up repeated queries, and exports matches (CSV). 
This class (the backend) originated as one component of our hackathon project - a web platform that searches jobs across multiple sources and tailors the user's CV to each job description.


## Supported Job APIs
Located in `job_finder.py`:
- `_fetch_remotive`
- `_fetch_adzuna`
- `_fetch_remoteok`
- `_fetch_goonzile` (Airtable Israel feed)
- `_fetch_arbeitnow`

## Quick Start
Backend:
1. (Optional) create virtualenv
2. Install deps (currently stdlib only / minimal)
3. Run: `python backend/api.py`

Frontend:
1. `cd frontend/job-scanner-frontend`
2. `npm install`
3. `npm start`

## Contact
Email: **yonzra12@gmail.com**  
LinkedIn: **https://www.linkedin.com/in/yehonatanezra**





