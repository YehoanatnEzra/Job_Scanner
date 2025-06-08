
# Job Scanner Hackathon Project

## Overview  
This repository contains the **Job Scanner class** script, one component of our hackathon project to build a web‑platform that:
1. **Finds job positions** (in Israel or worldwide) based on user‑provided keywords.  
2. **Tailors resumes** to match each job posting, using the user’s uploaded CV as template.
ל
The script in this folder is the core “job search” engine that I wrote by myself.
It fetches and filters live job listings by keywords & location, and outputs a CSV of matching vacancies for further processing by the web front‑end and resume‑tailoring module.

---

## Features
- **Keyword filtering**: search by role, technology, company or any free‑text terms.
- **Location support**: filter for positions in Israel, remote roles, or specific countries.
- **Multithreading**: uses Python threads to run searches concurrently across multiple job sites, significantly reducing total runtime.
- **Caching mechanism**: stores recent search results in a local cache to avoid redundant network calls and speed up repeated queries.
- **Configurable sources**: plug in different job‑listing APIs or CSV/JSON feeds.
- **CSV export**: outputs a clean, sortable CSV of all matches for downstream processing.
- **Modular design**: easy to extend with new sources or post‑processing hooks (e.g. resume tailoring).

## Supported Job APIs

The script fetches listings from the following external APIs via dedicated functions in `job_finder.py`:

- **Remotive**: Remote job listings (`_fetch_remotive()`)
- **Adzuna**: Job listings by country and keyword (`_fetch_adzuna()`)
- **RemoteOK**: Remote jobs API (`_fetch_remoteok()`)
- **Airtable (Goonzile)**: Israeli job postings (`_fetch_goonzile()`)
- **Arbeitnow**: Global job board API (`_fetch_arbeitnow()`)


## Installation

1. Clone this repo:
   ```bash
   git clone https://github.com/YehoanatnEzra/Job-scanner.git
   cd Job-scanner
````



## The script will:

1. Fetch listings from each configured source.
2. Filter by your keywords & locations.
3. Write a CSV (`jobs.csv` or your chosen filename) with columns like:

   * `title`
   * `company`
   * `location`
   * `url`
   * `posted_date`

---

## Project Structure

```
/Job-scanner
├── job_scanner.py      # main script you wrote
├── config.ini          # keywords & locations + API keys
├── requirements.txt    # Python dependencies
├── README.md           # this file
└── examples/
    └── config.sample.ini

