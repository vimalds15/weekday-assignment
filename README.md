# Weekday Assignment

A simple web page with infinite scrolling and filter functionality

Note:

- It contains two branch:
  - 1. (main) - completed in two days
  - 2. (post-deadline-dev) - post deadline updates




## Run Locally

```bash
  git clone https://github.com/vimalds15/weekday-assignment.git
```

Go to the project directory

```bash
  cd weekday-assignment
```

Switch to another branch for post deadline changes

```bash
  git checkout post-deadline-dev
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm run dev
```

## Tech Stack

- React
- Redux
- Material UI

## Features

- Infinite Scroll (Used Intersection Observer)
- Filter Functionality

## Project Structure

src/components - contains components of the project 
src/features/redux - contains files related to redux

## Open Issues and Items

- After removing all filters UI stutters
- Currency conversion to be handled for Minimum Base Pay. 