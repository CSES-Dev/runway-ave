# Runway Avenue Website

Marketing website for the Runway Avenue startup by CSES, built with Next.js, React, and Tailwind CSS.

## Getting Started

### Prerequisites

- Node.js 18+ (LTS recommended)
- npm (comes with Node.js)

### Install

1. Install dependencies:

```bash
npm install
```

2. Start the dev server:

```bash
npm run dev
```

3. Open http://localhost:3000 in your browser.

## Scripts

- `npm run dev` - Start the local dev server
- `npm run build` - Create a production build
- `npm run start` - Run the production server
- `npm run lint` - Run Next.js lint
- `npm run lint-check` - Run lint + Prettier check
- `npm run lint-fix` - Auto-fix lint + format with Prettier
- `npm run format` - Format all files with Prettier
- `npm run test` - Run Playwright end-to-end tests

## Tech Stack

- Next.js (App Router)
- React
- TypeScript
- Tailwind CSS
- Playwright

## Project Structure

- `app/` - App Router pages, layouts, and styles
- `components/` - Shared UI components
- `public/` - Static assets
- `tests/` - Playwright end-to-end tests

# Google Cloud Storage (GCS) Setup Guide

## Overview 
Each blog post consists of:
- an image
- a description file

## Bucket Structure

Bucket name: runway-cses
```text
blog/
  index.json
  post-1/
    image.png
    description.txt
  post-2/
    image.png
    description.txt
```

## index.json Format

```json
{
  "posts": [
    {
      "slug": "post-1",
      "title": "First Blog Post",
      "image": "blog/post-1/image.png",
      "descriptionFile": "blog/post-1/description.txt"
    }
  ]
}
```

## Local Setup
Create and add key to file: `gcp-keys.json`

Add to `.env`: 
```text
GCS_KEY_FILEPATH=./gcp-keys.json
GCS_BUCKET=runway-cses
```
