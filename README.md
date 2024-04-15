## Getting Started

To run the development server: (assuming you installed packages first)

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Video Demo

A quick demo video of this application can be found here: https://pro-dashboard-olive.vercel.app/demo.mp4

## Features

- Filter data for a specific channel, channel group or campaign.
- Bar chart to visalise gross sales per channel.
- Data table to display the filtered data.
- Data aggregated on

  - Channel
  - Channel Group
  - Campaign
  - Total Orders
  - Total Visits

  to show the gross sales, number of orders and number of visits for each row.

- Ability to sort by any column in the data table.
- Client side pagination for the data table.
- Responsive design for mobile and desktop.
- Unique query string for each filter to allow for sharing of the dashboard. Find out here: [example dashboard](https://pro-dashboard-olive.vercel.app/?channelFilters=%5B%7B%22title%22%3A%22facebook%22%2C%22value%22%3A%22facebook%22%7D%2C%7B%22title%22%3A%22instagram%22%2C%22value%22%3A%22instagram%22%7D%2C%7B%22title%22%3A%22youtube%22%2C%22value%22%3A%22youtube%22%7D%2C%7B%22title%22%3A%22duckduckgo%22%2C%22value%22%3A%22duckduckgo%22%7D%2C%7B%22title%22%3A%22twitter%22%2C%22value%22%3A%22twitter%22%7D%5D&campaignFilters=%5B%5D&channelGroupFilters=%5B%5D).

## Tech Stack

- Next.js
- React
- TypeScript
- MUI (Material UI)
- Vitest

## Backend

- Utilising the Next.js action feature to fetch data from the remote url and then directly pass it to the client.
- The data is then stored in the local state of the client and used to render the dashboard using react context.
- Added simple example of component testing.

## Deployment

- Deployed on Vercel.
- On push to the main branch, the application is automatically deployed to Vercel.
