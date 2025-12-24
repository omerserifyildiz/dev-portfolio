# Dev Portfolio

A modern, high-performance personal portfolio website built with **Next.js 14 (App Router)**.

This project demonstrates a professional frontend architecture by utilizing **Static Site Generation (SSG)**. Unlike traditional dynamic sites, this application is pre-rendered into static HTML for maximum speed, security, and compatibility with serverless environments like GitHub Pages.

## Key Features

* **Next.js 14 App Router:** Built on the latest React framework standards.
* **Static Export Architecture:** Configured with `output: 'export'` to run serverlessly on GitHub Pages.
* **Data-Driven UI:** Content (experience, education, skills) is decoupled from the UI and managed via a structured JSON source (`data/resume.json`), allowing for easy updates without touching the component logic.
* **Responsive Design:** Fully responsive layout built with Custom CSS / CSS Modules (Mobile, Tablet, Desktop).
* **Performance:** Zero-latency page loads due to pre-rendered static assets.

## Tech Stack

* **Framework:** [Next.js 14](https://nextjs.org/)
* **Core:** React.js / JavaScript (ES6+)
* **Styling:** CSS Modules / Custom CSS
* **Data Management:** Local JSON (Client-side Import)
* **Deployment:** GitHub Actions & GitHub Pages

## Project Structure

A high-level overview of the project's static architecture:

```text
dev-portfolio/
├── app/
│   ├── components/      # Reusable UI components (Navbar, ResumeCard, etc.)
│   ├── layout.js        # Main layout wrapper
│   └── page.js          # Homepage entry point
├── data/
│   └── resume.json      # Centralized data source (acts as a local CMS)
├── public/              # Static assets (images, icons)
├── lib/                 # Utility functions
└── next.config.js       # Static export configuration
```

## Deployment

This project is deployed using GitHub Actions. The workflow automatically builds the Next.js application and pushes the static output to the gh-pages branch.
## 
Developed by Ömer Şerif Yıldız
