# cookie-token-parser

A small Next.js web app to convert a raw `Cookie` header copied from Chrome DevTools Network into a clean auth JSON payload.

## Features

- Paste long cookie strings from DevTools (`Cookie` / `Cookie:` formats supported)
- Extracts `accessToken`, `refreshToken`, and `idToken`
- Generates a stable JSON output with the expected schema
- One-click copy button for quick paste into JSON files
- Responsive UI built with `shadcn/ui` + Tailwind CSS

## Stack

- Next.js 16 (App Router)
- React 19 + TypeScript
- Tailwind CSS v4
- shadcn/ui
- ESLint + Prettier
- Husky + Commitlint

## Requirements

- Node.js 20+
- yarn

## Installation

```bash
yarn
```

## Husky Setup (Important)

Husky is configured through the `prepare` script. If hooks are not installed yet, run:

```bash
yarn prepare
```

## Run Locally

```bash
yarn dev
```

Open `http://localhost:3000`.
