# This project is an image search component.
> Using the Pexels API.
+ This application helps users pick a profile picture from licensed stock photos instead of uploading local files.
+ This can reduce image storage usage while still giving users visual customization options.
+ The main reason for this project was to experiment with the Pexels API and Redux state management in a practical UI flow.

### This is a Node application built in React
+ Frontend UI is built with React and Material UI components.
+ State is managed with Redux Toolkit + React Redux so image and modal state stay predictable.
+ Images are fetched from the Pexels API using an API key stored in environment variables.
+ Styling is handled with SCSS for simple, readable component styling.

### Tools used and why
+ **React**: builds reusable UI components and keeps rendering fast.
+ **Redux Toolkit / React Redux**: manages shared app state (selected image + modal open state).
+ **Material UI**: gives ready-made UI components like buttons and loading spinners.
+ **Pexels API SDK**: performs image search from Pexels with simple API calls.
+ **Jest + React Testing Library**: tests that important UI content renders correctly.

### Run locally
+ 1) Create a `.env` file in the project root (`image-search/`) and add:
+ `REACT_APP_PEXELS_API_KEY=your_pexels_key_here`
+ 2) Get a free API key from [Pexels](https://www.pexels.com/).
+ 3) Install dependencies:
+ `npm install`
+ 4) Start the app:
+ `npm start`
+ 5) Open `http://localhost:3000`

### Project structure
+ `src/App.js`: main page layout and modal open/close flow.
+ `src/ImageSelector.js`: search UI and image selection actions.
+ `src/ProfilePicture.js`: displays the currently selected image.
+ `src/api.js`: handles Pexels API search requests.
+ `src/store.js`, `src/reducers.js`, `src/actions.js`, `src/thunks.js`: Redux state management.
