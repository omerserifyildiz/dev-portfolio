# Dev Portfolio

Modern, responsive and data-driven personal portfolio website built with **Next.js 14 (App Router)**. This project demonstrates a full-stack approach by serving content through an internal API and managing state dynamically.

## Overview

This repository contains the source code for my personal digital resume and portfolio. Unlike static HTML templates, this application acts as a dynamic client that consumes data from a structured JSON source, simulating a real-world CMS integration pattern.

## Key Features

* **Next.js 14 App Router:** Utilizes the latest routing architecture for optimized performance and SEO.
* **Data-Driven UI:** All content (experience, education, skills) is fetched from a localized JSON API (`data/resume.json`), ensuring separation of concerns between content and presentation.
* **Internal API Routes:** Includes a custom Next.js API endpoint to serve resume data.
* **Responsive Design:** Fully responsive layout built with Custom CSS / CSS Modules (adaptable to mobile, tablet, and desktop).
* **Theme Support:** Includes Dark/Light mode toggling capabilities.

## Tech Stack

* **Framework:** [Next.js 14](https://nextjs.org/) (App Router)
* **Runtime:** Node.js (Server-Side Logic & API Routes)
* **Language:** JavaScript (ES6+) / React
* **Styling:** CSS Modules / Custom CSS
* **Data Source:** Local JSON Served via Internal API
* **Fonts:** Inter Variable (Optimized with `next/font`)

## Project Structure

A high-level overview of the project's architecture:

```text
dev-portfolio/
├── app/
│   ├── api/resume/      # Internal API route for data serving
│   ├── components/      # Reusable UI components (Navbar, Footer, etc.)
│   ├── layout.js        # Main layout wrapper
│   └── page.js          # Homepage entry point
├── data/
│   └── resume.json      # Centralized data source for the portfolio
├── public/              # Static assets (images, icons)
└── lib/                 # Utility functions and API fetchers