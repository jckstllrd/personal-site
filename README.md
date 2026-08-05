# personal-site

Personal website for jackstallard.dev — home page, about, projects, and articles.

## Stack

React, TypeScript, Vite, React Router. Styling via CSS Modules.

## Structure

```
personal-site/
└── src/
    ├── pages/
    │   ├── Home/
    │   ├── About/
    │   ├── Projects/
    │   └── Articles/
    ├── components/
    │   ├── Header/
    │   ├── Nav/
    │   ├── Footer/
    │   ├── Container/
    │   ├── Project/
    │   └── ArticleCard/
    ├── hooks/
    ├── types/
    └── utils/
```

## Pages

| Route | Page | Description |
|---|---|---|
| `/` | Home | Landing page |
| `/about` | About | Bio and background |
| `/projects` | Projects | Project listing, rendered via `Project` cards |
| `/articles` | Articles | Article listing and detail view |

## Setup

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
npm run preview
```
