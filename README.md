# Country Data Dashboard

A responsive analytics dashboard built using **Next.js**, **React**, **TypeScript**, and **Tailwind CSS** that consumes the Rest Countries API (Public API).

This project took me 2 days. Most of my time was spent on UI and design — it's not the best design, but it's a solid one!
Demo Video: https://drive.google.com/file/d/1y6t6YdxG6ZHct3bvKbcNYchfizmBjLaC/view?usp=sharing

## Features
- **Global Search**: Instantly filter countries by name.
- **Filters**: Filter countries by Region and Subregion. URL parameters sync state (`q`, `region`, `subregion`) to ensure shareable views.
- **Paginated Scrolling**: Scroll to dynamically load more country records.
- **Detailed View**: Access country data via dynamic routes (e.g., `/country/ind`), containing capitals, timezones, and borders.

## Prerequisites

Make sure the following are installed on your machine before running the project:

- **Node.js**
- **npm**
- **Git**
- **Docker**

## How to Run

### Development

1. Clone the repository and move into the project directory:
   ```bash
   git clone https://github.com/23f2004130/Take-Home-Task.git
   cd Take-Home-Task/data-dashboard
   ```

2. Create a `.env` file inside `data-dashboard/` and add the REST Countries API key:
   ```env
   REST_COUNTRIES_API_KEY=rc_live_...
   ```
   **For quick testing, use this .env file**
   ```env
   REST_COUNTRIES_API_KEY=rc_live_a89a7715693241c8ab7f63076f032027
   ```
   (I will deprecate the API key in the near future)

3. Install dependencies:
   ```bash
   npm i
   ```

4. Run dev server:
   ```bash
   npm run dev
   ```


Open [http://localhost:3000](http://localhost:3000) in your browser.


### Production & Docker
To run using Docker & Docker Compose:
1. Build and run:
   ```bash
   docker-compose up --build
   ```
2. Open [http://localhost:3000](http://localhost:3000) with your browser.

## Architecture Decisions

- **Pagination**: The REST Countries public API provides a search API along with `limit` and `offset` params for pagination. But instead of making page numbers with next/previous buttons, I implemented infinite scroll so users don't need to go back and forth to check countries — they can simply scroll up and down. I chose this based on my own experience; I don't like going to a next page when everything can be shown on a single page.

- **URL-synced filters (shareable state)**: Region, subregion, and search filters are stored in the URL as query parameters (`?q=india&region=Asia`). This means any filtered view can be bookmarked or shared — the page state is fully reproducible from the URL alone. Currently, the only filters are region and subregion, but with more time I could add filters like landlocked, driving side, etc., and also expand search possibilities to include capitals, currency, and leaders.

- **Proxy API route (`/api/countries`)**: Instead of calling the external API directly from the browser, all requests go through a Next.js route handler. This keeps the API key server-side only (even though `NEXT_PUBLIC_` is also set for flexibility), centralises any future logic like caching or rate-limiting, and also eliminates CORS errors that would occur with direct client-side API calls.

- **Server component for Detail view, Client components for Search/Table**: The detail page (`/country/[code]`) fetches data on the server since it doesn't need interactivity — this improves performance and SEO. Search and Table are client components because they react to user input and URL params in real time. Since the table needs to update every time a query changes, it uses `useEffect` and `useState`, which makes it a client component.

- **TypeScript types for API response (`types/details_type.tsx`)**: The REST Countries API returns deeply nested objects. Defining explicit types prevents runtime shape errors and makes the code self-documenting for anyone reading it later.

## Notes
- This is my first project using Next.js, so it took more time to implement the required features and I wasn't able to add the extra ones — sorry about that.
- I already know React and TypeScript, so I focused on learning how Next.js is structured. I was really fascinated by how easy it is to manage URLs, loading states, error pages, caching, routing, SSR, and other optimizations. I'm going to use this framework for all my frontend projects from now on!
- The background effect was taken from [reactbits](https://reactbits.dev/), which contains prebuilt UI components. Some images, like the astronaut on the error page and the UFO on the loading page, were sourced from Google.
- I designed all the UI myself and used AI to help write the UI code, but almost everything else was typed by me.
- Sorry if I used too much AI for UI components 😅.


## What I'd Do With More Time
- Add chart visualizations (e.g., population distribution by region).
- Add skeleton loaders.
- Light/dark mode.
- Lighthouse screenshot.
- Debounce search.
