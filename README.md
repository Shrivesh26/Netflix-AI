# 🎬 Netflix AI - AI Movie Recommendations

> **Netflix AI** is an AI-powered movie discovery and recommendation web application built with **React, Redux Toolkit, Firebase, TMDB API, Tailwind CSS, and Google Gemini AI**.

The application provides a Netflix-inspired movie browsing experience with authentication, movie trailers, categorized movie lists, hover interactions, genre information, and AI-powered movie recommendations.

---

## 🚀 Project Overview

Netflix AI combines a modern streaming-platform interface with **Google Gemini AI** to provide intelligent movie recommendations based on the user's search query.

The application has two major experiences:

* **Before Authentication** — Landing page and authentication.
* **After Authentication** — Movie browsing, trailers, categorized movie lists, hover previews, and AI movie recommendations.

---

# ✨ Features

## 🔐 Authentication

* User Sign Up
* User Sign In
* Firebase Authentication
* Profile creation
* Profile picture support
* Update user profile using Firebase `updateProfile`
* Sign Out functionality
* Authentication state management using `onAuthStateChanged`
* Automatic redirection based on authentication state
* Protected routes
* Public routes
* Firebase authentication listener cleanup

### Authentication Flow

```text
User
 │
 ├── Sign Up
 │      └── Firebase Authentication
 │
 ├── Sign In
 │      └── Firebase Authentication
 │
 └── Authentication State
        │
        ├── Authenticated → Browse
        │
        └── Not Authenticated → Login
```

---

# 🏠 Landing Page

The landing page is displayed before authentication.

### Features

* Responsive Header
* Sign In button
* Movie suggestions
* Trending / Popular movie section
* Numbered movie cards
* Reason to Join section
* Responsive design

---

# 🎥 Browse Page

The Browse page is available after successful authentication.

It is divided into:

```text
Browse
 │
 ├── Header / Navbar
 │
 ├── MainContainer
 │     ├── VideoTitle
 │     └── VideoBackground
 │
 └── SecondaryContainer
       ├── MovieList
       ├── HorizontalMovieCard
       └── MovieHoverCard
```

---

## 🎬 Main Movie Section

The main movie section displays the currently selected movie.

### Includes

* Movie title
* Movie description
* Movie background
* YouTube trailer
* Play button
* More Info button
* Responsive movie information section
* Gradient overlays for better readability

The trailer is fetched dynamically using the movie ID.

---

# 🍿 Movie Categories

The Browse page contains multiple movie categories.

Examples include:

* Now Playing
* Popular Movies
* Top Rated Movies
* Trending Movies
* Upcoming Movies

Each category is displayed as a horizontally scrollable movie list.

```text
Movie Category
───────────────────────────────────────→

[Now Playing Movies] 
[Top Rated Movies] 
[Trending Movies] 
[Popular Movies] 
[Upcoming Movies]
```

---

# 🎞️ Movie Cards

Netflix AI contains different movie card implementations.

### Horizontal Movie Cards

Movie cards are displayed horizontally and support:

* Responsive sizing
* Hover interactions
* Movie information popup
* Movie trailer preview
* Genre information

### Numbered Movie Cards

The popular movie section uses a Higher Order Component to display movie ranking numbers.

Example:

```text
1   Now Playing MovieCards * N
2   Top Rated MovieCards * N
3   Trending MovieCards * N
4   Popular MovieCards * N
5   Upcoming MovieCards * N
```

---

# 🖱️ Movie Hover Experience

The movie cards provide an interactive hover experience.

When the user hovers over a movie:

* Movie information appears
* Trailer can be played
* Movie title is displayed
* Match percentage can be displayed
* Movie genres are displayed
* Action buttons are available
* Trailer can be muted / unmuted

A custom hook called:

```text
useHoverPopup.jsx
```

is responsible for handling the hover popup behavior.

---

# 🎥 Movie Trailer System

Netflix AI dynamically fetches movie trailers.

### Custom Hooks

```text
useTrailerId.jsx
useMovieTrailer.jsx
```

### `useTrailerId`

Used for fetching the trailer of the main movie displayed in the Browse page.

### `useMovieTrailer`

Used for fetching trailers for individual movie cards when the user interacts with them.

---

# 🎭 Movie Genres

Netflix AI uses TMDB genre information to display movie genres.

A custom hook:

```text
useGenres.jsx
```

is responsible for:

1. Fetching the TMDB genre list.
2. Reading `genre_ids` from movie objects.
3. Mapping genre IDs to their corresponding genre names.

Example:

```text
Movie
 │
 ├── genre_ids
 │      ├── 28
 │      ├── 12
 │      └── 878
 │
 └── Genre Names
        ├── Action
        ├── Adventure
        └── Science Fiction
```

---

# 🤖 Netflix AI - AI Movie Recommendations

The main AI feature of the application is the **AI Movie Search** system.

Instead of using OpenAI GPT, this project uses:

> **Google Gemini AI**

The user enters a natural-language movie request and Gemini generates movie recommendations.

### Example

User:

```text
Suggest me some action movies similar to RRR
```

Gemini:

```text
KGF, Pushpa, Salaar, Baahubali, Vikram
```

The recommended movie names are then sent to the **TMDB API** to retrieve the corresponding movie information.

---

# 🧠 AI Recommendation Flow

```text
User enters movie request
          │
          ▼
     Netflix AI
          │
          ▼
    Google Gemini AI
          │
          ▼
 Movie recommendations
          │
          ▼
       Movie Names
          │
          ▼
       TMDB API
          │
          ▼
   Movie Information
          │
          ▼
   Movie Recommendation UI
```

---

# 🔎 AI Movie Search

The AI search page contains:

* Search bar
* Google Gemini AI integration
* Loading state
* AI-generated movie recommendations
* TMDB movie results
* Movie cards
* Movie hover trailer functionality
* Responsive UI

The AI search can be toggled from the Browse page.

---

# 🔄 AI Search Toggle

The Browse page contains a toggle between:

```text
Browse Page
     ↕
AI Movie Search
```

The state is managed through Redux:

```text
gptSearchView
```

When:

```js
gptSearchView === false
```

the Browse page is displayed.

When:

```js
gptSearchView === true
```

the AI Movie Search page is displayed.

---

# ⏳ Loading State

A dedicated:

```text
Loading.jsx
```

component is used while Netflix AI waits for the Gemini API response.

Flow:

```text
Search
  ↓
Loading
  ↓
Gemini AI Response
  ↓
TMDB Search
  ↓
Movie Results
```

---

# 🗃️ Redux State Management

Netflix AI uses:

* Redux Toolkit
* React Redux

The main Redux store:

```text
appStore
```

contains multiple slices.

### User Slice

```text
userSlice
```

Responsible for:

* User information
* Authentication state
* Profile information

### Movie Slice

```text
movieSlice
```

Responsible for:

* Now Playing Movies
* Popular Movies
* Trending Movies
* Upcoming Movies
* Top Rated Movies
* Movie trailer ID

### Genre Slice

```text
genreSlice
```

Responsible for:

* Movie genre data
* Async genre fetching
* Genre ID mapping

### AI Movie Slice

```text
gptSlice
```

Responsible for:

* AI search view state
* Gemini movie recommendations
* Movie names
* TMDB movie results
* AI loading state

---

# 🪝 Custom Hooks

Custom React hooks are heavily used throughout the application.

### Movie Hooks

```text
usePopularMovies
useTrendingMovies
useUpcomingMovies
useNowPlayingMovies
```

### Trailer Hooks

```text
useTrailerId
useMovieTrailer
```

### Genre Hook

```text
useGenres
```

### Hover Hook

```text
useHoverPopup
```

### AI Search Hook

```text
useSearchMovieByName
```

These hooks help separate API calls and application logic from UI components.

---

# 🧩 Higher Order Component

A Higher Order Component is used for the numbered movie cards.

```text
NumberOnMoviesCard
        │
        ▼
    MoviesCard
```

This allows the existing movie card component to be enhanced with ranking numbers without modifying its core functionality.

---

# 🛣️ Routing

React Router is used for application navigation.

Current routes:

```text
/
├── Landing / Home

/login
├── Login / Sign Up

/browse
├── Browse Movies
└── AI Movie Search
```

The application uses:

```text
AppLayout
Outlet
ErrorPage
ProtectedRoute
PublicRoute
```

---

# 🔒 Route Protection

Netflix AI implements route protection based on authentication status.

### Protected Route

Prevents unauthenticated users from directly accessing:

```text
/browse
```

Unauthenticated users are redirected to:

```text
/login
```

### Public Route

Prevents authenticated users from unnecessarily accessing the login page.

---

# 🔥 Firebase

Firebase is used for authentication.

Installed package:

```bash
npm i firebase
```

### Firebase APIs Used

```js
signInWithEmailAndPassword()
createUserWithEmailAndPassword()
updateProfile()
onAuthStateChanged()
signOut()
```

Firebase is responsible for authentication and user profile management.

---

# 🎨 UI & Responsive Design

The application is designed to work across different screen sizes.

Responsive improvements were implemented throughout:

* Header
* Landing page
* Browse page
* Movie cards
* Movie lists
* AI search
* Movie hover cards
* Main movie section
* Buttons
* Forms
* Authentication pages

Tailwind CSS is used extensively for responsive styling.

---

# 🌐 APIs

Netflix AI uses two major external APIs.

## TMDB API

The **TMDB API** provides:

* Movie information
* Movie posters
* Backdrops
* Movie genres
* Movie trailers
* Popular movies
* Trending movies
* Upcoming movies
* Now Playing movies
* Top Rated movies
* Movie search results

## Google Gemini AI

Google Gemini AI is responsible for:

* Understanding the user's movie request
* Generating movie recommendations
* Providing movie names based on the user's query

Gemini does **not** provide the complete movie UI data.

Instead:

```text
Gemini
  ↓
Movie Names
  ↓
TMDB
  ↓
Movie Details
```

---

# 🔐 Environment Variables

Sensitive API keys are stored inside `.env`.

Example:

```env
VITE_TMDB_KEY=your_tmdb_api_key
VITE_GEMINI_API_KEY=your_gemini_api_key
VITE_FIREBASE_KEY=your_firebase_key
```

The `.env` file should **not be committed to GitHub**.

Add it to `.gitignore`:

```gitignore
.env
```

---

# 📦 Tech Stack

### Frontend

* React
* Vite
* JavaScript
* Tailwind CSS
* React Router

### State Management

* Redux Toolkit
* React Redux

### Authentication

* Firebase Authentication

### APIs

* TMDB API
* Google Gemini AI

### Icons

* React Icons

### Development

* Git
* GitHub
* ESLint

---

# 📁 Project Structure

```text
netflix-gpt/
│
├── 📄 .env
├── 📄 .gitignore
├── 📜 eslint.config.js
├── 📄 index.html
├── ⚙️ package.json
├── ⚙️ package-lock.json
├── 📄 README.md
├── ⚙️ vite.config.js
│
├── 📁 public/
│
└── 📁 src/
    │
    ├── 📄 App.jsx
    ├── 📄 index.css
    ├── 📄 main.jsx
    │
    ├── 📁 asset/
    │   ├── 📄 N-favicon.png
    │   ├── 📄 NETFLIX-AI.png
    │   └── 📄 NETFLIX-GPT.png
    │
    ├── 📁 components/
    │   ├── 📄 Background.jsx
    │   ├── 📄 Body.jsx
    │   ├── 📄 Browse.jsx
    │   ├── 📄 ErrorPage.jsx
    │   │
    │   ├── 📄 GPTMovieSuggestion.jsx
    │   ├── 📄 GPTSearch.jsx
    │   ├── 📄 GPTSearchBar.jsx
    │   │
    │   ├── 📄 Header.jsx
    │   ├── 📄 HeroSection.jsx
    │   ├── 📄 HorizontalMovieCard.jsx
    │   ├── 📄 Loading.jsx
    │   ├── 📄 Login.jsx
    │   │
    │   ├── 📄 MainContainer.jsx
    │   ├── 📄 MovieHoverCard.jsx
    │   ├── 📄 MovieList.jsx
    │   ├── 📄 MoviesCard.jsx
    │   │
    │   ├── 📄 ReasonCard.jsx
    │   ├── 📄 ReasonForJoin.jsx
    │   ├── 📄 SecondaryContainer.jsx
    │   │
    │   ├── 📄 VideoBackground.jsx
    │   └── 📄 VideoTitle.jsx
    │
    ├── 📁 constants/
    │   └── 📄 constant.jsx
    │
    ├── 📁 hooks/
    │   ├── 📄 useGenres.jsx
    │   ├── 📄 useHoverPopup.jsx
    │   ├── 📄 useMovieTrailer.jsx
    │   ├── 📄 useNowPlayingMovies.jsx
    │   ├── 📄 usePopularMovies.jsx
    │   ├── 📄 useSearchMovieByName.jsx
    │   ├── 📄 useTopRatedMovies.jsx
    │   ├── 📄 useTrailerId.jsx
    │   ├── 📄 useTrendingMovies.jsx
    │   └── 📄 useUpcomingMovies.jsx
    │
    ├── 📁 redux/
    │   │
    │   ├── 📁 Slice/
    │   │   ├── 📄 genreSlice.jsx
    │   │   ├── 📄 gptSlice.jsx
    │   │   ├── 📄 moviesSlice.jsx
    │   │   └── 📄 userSlice.jsx
    │   │
    │   └── 📁 Store/
    │       └── 📄 appStore.jsx
    │
    ├── 📁 routes/
    │   ├── 📄 AppLayout.jsx
    │   ├── 📄 ProtectedRoute.jsx
    │   └── 📄 PublicRoute.jsx
    │
    └── 📁 utils/
        ├── 📜 firebaseConfig.js
        ├── 📜 googleGenAI.js
        └── 📜 validate.js
```

## 📂 Folder Responsibilities

### `src/asset/`

Contains static visual assets used throughout the application.

* `N-favicon.png` — Browser favicon
* `NETFLIX-AI.png` — Netflix AI application logo
* `NETFLIX-GPT.png` — Previous project logo

---

### `src/components/`

Contains the application's reusable UI components.

| Component                 | Responsibility                                       |
| ------------------------- | ---------------------------------------------------- |
| `Header.jsx`              | Navigation, authentication actions, AI search toggle |
| `HeroSection.jsx`         | Landing page hero section                            |
| `Body.jsx`                | Landing page movie content                           |
| `Background.jsx`          | Landing page background                              |
| `Login.jsx`               | Login / Sign Up interface                            |
| `MainContainer.jsx`       | Main movie hero section                              |
| `VideoTitle.jsx`          | Movie title, description and actions                 |
| `VideoBackground.jsx`     | Main movie trailer background                        |
| `SecondaryContainer.jsx`  | Movie category container                             |
| `MovieList.jsx`           | Horizontal movie lists                               |
| `MoviesCard.jsx`          | Basic movie card                                     |
| `HorizontalMovieCard.jsx` | Interactive horizontal movie card                    |
| `MovieHoverCard.jsx`      | Movie hover details and trailer                      |
| `ReasonCard.jsx`          | Individual "Reason to Join" card                     |
| `ReasonForJoin.jsx`       | Reason to Join section                               |
| `GPTSearch.jsx`           | AI movie search page                                 |
| `GPTSearchBar.jsx`        | AI movie search input                                |
| `GPTMovieSuggestion.jsx`  | Displays AI-generated movie recommendations          |
| `Loading.jsx`             | Loading state                                        |
| `ErrorPage.jsx`           | Application error page                               |
| `Browse.jsx`              | Browse page composition                              |

---

### `src/constants/`

Contains application constants and API-related configuration.

```text
constant.jsx
```

Includes values such as movie API URLs, image URLs and other reusable constants.

---

### `src/hooks/`

Contains custom React hooks responsible for API calls and reusable application logic.

```text
useNowPlayingMovies.jsx
usePopularMovies.jsx
useTopRatedMovies.jsx
useTrendingMovies.jsx
useUpcomingMovies.jsx
```

Movie data hooks.

```text
useTrailerId.jsx
useMovieTrailer.jsx
```

Trailer-related hooks.

```text
useGenres.jsx
```

Fetches and maps TMDB movie genres.

```text
useHoverPopup.jsx
```

Handles movie-card hover popup positioning and animation.

```text
useSearchMovieByName.jsx
```

Handles the Google Gemini AI → movie name → TMDB search flow.

---

### `src/redux/`

Contains the Redux Toolkit state-management architecture.

#### `redux/Slice/`

```text
genreSlice.jsx
gptSlice.jsx
moviesSlice.jsx
userSlice.jsx
```

Responsible for managing:

* User authentication state
* Movie data
* Movie trailers
* Genre information
* AI movie recommendations
* AI search state

#### `redux/Store/`

```text
appStore.jsx
```

Configures the application's Redux store and combines the different slices.

---

### `src/routes/`

Contains routing and route-protection logic.

```text
AppLayout.jsx
```

Provides the main application layout and nested routing through React Router's `Outlet`.

```text
ProtectedRoute.jsx
```

Restricts authenticated-only pages such as `/browse`.

```text
PublicRoute.jsx
```

Controls access to public authentication pages.

---

### `src/utils/`

Contains utility and third-party service configuration.

```text
firebaseConfig.js
```

Firebase initialization and authentication configuration.

```text
googleGenAI.js
```

Google Gemini AI client configuration.

```text
validate.js
```

Login / Sign Up form validation utilities.

---

# 🔄 High-Level Architecture

```text
                         Netflix AI
                             │
             ┌───────────────┴────────────────┐
             │                                │
        React Components                  React Router
             │                                │
             │                    ┌───────────┴───────────┐
             │                    │                       │
             │              PublicRoute            ProtectedRoute
             │                    │                       │
             ▼                    ▼                       ▼
        Custom Hooks          Login Page             Browse Page
             │                                            │
             │                              ┌─────────────┴─────────────┐
             │                              │                           │
             │                       MainContainer              SecondaryContainer
             │                              │                           │
             │                       Movie Trailer              Movie Lists/Cards
             │
             ├──────────────► TMDB API
             │
             └──────────────► Google Gemini AI
                                      │
                                      ▼
                              AI Movie Suggestions
                                      │
                                      ▼
                                  TMDB API
                                      │
                                      ▼
                                Movie Results

                             Redux Toolkit
                                  │
                  ┌───────────────┼────────────────┐
                  │               │                │
              userSlice      moviesSlice       genreSlice
                                  │
                              gptSlice
```

> **Note:** The repository folder is currently named `netflix-gpt`, and some implementation filenames such as `GPTSearch.jsx` and `gptSlice.jsx` still use the original GPT naming. The application's current brand and AI provider are **Netflix AI** and **Google Gemini AI**, respectively.

---

# 🛠️ Installation & Setup

## 1. Clone the Repository

```bash
git clone https://github.com/Shrivesh26/Netflix-AI.git
```

## 2. Navigate to the Project

```bash
cd netflix-ai
```

## 3. Install Dependencies

```bash
npm install
```

## 4. Create `.env`

Create a `.env` file in the project root:

```env
VITE_TMDB_KEY=your_tmdb_api_key
VITE_GEMINI_API_KEY=your_gemini_api_key
```

## 5. Start Development Server

```bash
npm run dev
```

The application will run on the local development server provided by Vite.

---

# 📚 What I Learned

During the development of Netflix AI, I worked with several important frontend and full-stack development concepts.

### React

* Functional Components
* Props
* State
* Hooks
* `useEffect`
* `useRef`
* Custom Hooks
* Higher Order Components
* Component composition
* Conditional rendering
* Performance optimization

### Redux Toolkit

* Store creation
* Slices
* Actions
* Reducers
* `useSelector`
* `useDispatch`
* Async operations with thunks

### React Router

* Routes
* Nested routes
* `Outlet`
* Protected routes
* Public routes
* Error pages
* Route-based application structure

### Firebase

* Authentication
* Sign In
* Sign Up
* User profiles
* Profile updates
* Authentication listeners
* Sign Out

### API Integration

* Fetch API
* TMDB API
* Google Gemini AI API
* Async/Await
* Promise handling
* API error handling
* Environment variables

### UI Development

* Tailwind CSS
* Responsive design
* Hover interactions
* Portals
* Animations
* Gradients
* Loading states
* Responsive movie layouts

---

# 🐛 Problems & Bugs Solved

Some of the important problems solved during development:

### Authentication State

Implemented `onAuthStateChanged` and properly unsubscribed from the Firebase listener.

### Route Protection

Created:

```text
ProtectedRoute.jsx
PublicRoute.jsx
```

to control access based on authentication state.

### Firebase Profile

Implemented Firebase `updateProfile()` for updating the user's profile information.

### Movie Trailer

Created reusable hooks for fetching movie-specific trailers.

### Hover Popup

Implemented dynamic hover popup positioning using:

```text
useHoverPopup.jsx
```

### Genre Mapping

Mapped TMDB `genre_ids` to readable genre names.

### AI Movie Search

Connected:

```text
Google Gemini AI
       +
TMDB API
```

to transform natural-language movie requests into actual movie results.

### Responsive Design

Updated the application's components to support:

* Mobile
* Tablet
* Desktop
* Large screens

---

# 📱 Responsive Design

Netflix AI is designed with responsive layouts for different screen sizes.

```text
Mobile
   ↓
Tablet
   ↓
Desktop
   ↓
Large Desktop
```

The movie lists remain horizontally scrollable while movie cards, search forms, headers, hero sections, and content areas adapt to the available screen width.

---

# 🔄 Application Flow

```text
                    Netflix AI
                        │
              ┌─────────┴─────────┐
              │                   │
        Not Authenticated    Authenticated
              │                   │
              ▼                   ▼
         Landing Page          Browse Page
              │                   │
        ┌─────┴─────┐       ┌─────┴─────────┐
        │           │       │               │
     Sign Up     Sign In   Movies         AI Search
        │           │       │               │
        └─────┬─────┘       │          Gemini AI
              │              │               │
           Firebase          │         Movie Names
              │              │               │
              └──────►       │              TMDB
                             │               │
                             │          Movie Results
                             │               │
                             └───────┬───────┘
                                     │
                                Movie UI
```

---

# 🎯 Project Goal

The goal of Netflix AI is to build a modern movie streaming-style web application while learning and applying real-world frontend development concepts.

The project focuses on:

* React architecture
* State management
* Authentication
* API integration
* Custom Hooks
* Higher Order Components
* Routing
* Responsive UI
* AI integration
* Performance optimization
* Real-world debugging

---

# 🚧 Current Development Status

### Completed

* Vite setup
* Tailwind CSS
* React Router
* Landing page
* Authentication
* Firebase integration
* Redux Toolkit
* Movie API integration
* Movie categories
* Movie trailers
* Movie hover cards
* Genre mapping
* Protected/Public routes
* Google Gemini AI integration
* AI movie recommendations
* TMDB movie search
* Loading states
* Responsive design
* Environment variable configuration

---

# 🔮 Future Improvements

Possible future improvements include:

* Movie details page
* Watchlist functionality
* User movie preferences
* Better AI recommendation context
* Improved AI prompt engineering
* Advanced movie filtering
* Search history
* Personalized recommendations
* More detailed movie information
* Better mobile interactions
* Improved accessibility
* Performance optimization
* Additional animations and transitions

---

# 🎬 Project Highlights

### Traditional Movie Discovery

```text
Browse
  ↓
Movie Categories
  ↓
Movie Cards
  ↓
Hover
  ↓
Trailer
```

### AI Movie Discovery

```text
Natural Language Query
        ↓
   Google Gemini AI
        ↓
  Movie Recommendations
        ↓
       TMDB
        ↓
    Movie Results
```

Netflix AI combines both experiences into one application.

---

# 👨‍💻 Author

**Shrivesh Gupta**

B.Tech Computer Science & Engineering

Built with ❤️ using React, Redux Toolkit, Firebase, TMDB API, Tailwind CSS, and Google Gemini AI.

---

## ⭐ If you like this project

Feel free to explore the code, suggest improvements, or use the project as a reference for learning React, Redux, Firebase, API integration, and AI-powered application development.
