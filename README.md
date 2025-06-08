
# Job Scanner Hackathon Project
---
This respority contains the **Job_Scanner** class that concurrently queries multiple job-listing APIs, filters results by keywords and locations, and exports matched listings to a CSV file. Built-in multithreading and caching minimize runtime and redundant network calls. Configurable via a simple config file for keywords, locations, and API credentials.
This class is one component of our hackathon project to build a web‑platform that:
1. **Finds job positions** (in Israel or worldwide) based on user‑provided keywords.  
2. **Tailors resumes** to match each job posting, using the user’s uploaded CV as template.

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

## The script will:
1. Fetch listings from each configured source.
2. Filter by your keywords & locations.
3. Write a CSV (`jobs.csv` or your chosen filename) with columns like:

   * Title
   * Link to apply
   * Location`
   * Posted date
   * Decription




## Project Structure

* job_scanner.py      - Main script orchestrating job search and CSV export
* job_finder.py       - Contains the JobFinder class for fetching listings from external job APIs
*  cache_utils.py     - Caching helper functions to store/retrieve API responses
*  config.py          - Configuration loader
*  README.md          - this file
    

## Feedback & Contact
If you find any issues, have questions, or suggestions for improvement, feel free to reach out:
- Email: yonzra12@gmail.com

---
## License
This project is open-source and available for personal and educational use.

