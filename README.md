# Movie Database App 🎬

A modern, responsive movie database application built with React, Bootstrap, and The Movie Database (TMDB) API. Perfect for showcasing in your portfolio!

## Features

- 🏠 **Home Page** - Displays trending and popular movies
- 🔍 **Search Functionality** - Search for any movie by title
- ⭐ **Popular Movies** - Browse through popular movies with pagination
- 🏆 **Top Rated Movies** - View the highest rated movies
- 📱 **Movie Details** - Comprehensive movie information including:
  - Movie poster and overview
  - Cast information
  - Production companies
  - Ratings and reviews
  - Budget and revenue
  - Genres and release information
- 📱 **Responsive Design** - Works seamlessly on desktop, tablet, and mobile devices
- 🎨 **Modern UI** - Beautiful Bootstrap-based interface

## Technologies Used

- **React 18** - Frontend framework
- **React Router** - Navigation and routing
- **Bootstrap 5** - Responsive styling
- **Axios** - HTTP client for API requests
- **Vite** - Build tool and development server
- **TMDB API** - Movie database API

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

<<<<<<< HEAD
### Installation

1. Clone or download this repository

2. Install dependencies:
```bash
npm install
```

3. Get your TMDB API key:
   - Go to [TMDB](https://www.themoviedb.org/)
   - Sign up for a free account
   - Navigate to Settings > API
   - Request an API key (it's free!)
   - Copy your API key

4. Configure the API key:
   - Copy `.env.example` to `.env`:
     ```bash
     cp .env.example .env
     ```
   - Open `.env` and replace `your_api_key_here` with your actual TMDB API key
   - **Note:** The `.env` file is already in `.gitignore` and won't be committed to Git

5. Start the development server:
```bash
npm run dev
```

6. Open your browser and navigate to `http://localhost:5173`

## Project Structure

```
movie-database-app/
├── src/
│   ├── components/
│   │   ├── Navbar.jsx      # Navigation bar component
│   │   ├── MovieCard.jsx    # Movie card component
│   │   └── MovieList.jsx    # Movie list container
│   ├── pages/
│   │   ├── Home.jsx         # Home page
│   │   ├── Popular.jsx      # Popular movies page
│   │   ├── TopRated.jsx     # Top rated movies page
│   │   ├── Search.jsx       # Search results page
│   │   └── MovieDetails.jsx # Movie details page
│   ├── services/
│   │   └── api.js           # TMDB API service
│   ├── App.jsx              # Main app component
│   ├── main.jsx             # Entry point
│   └── index.css            # Global styles
├── index.html
├── package.json
├── vite.config.js
└── README.md
```

## Building for Production

To create a production build:

```bash
npm run build
```

The built files will be in the `dist` directory. You can preview the production build with:

```bash
npm run preview
```

## Deployment

You can deploy this app to various platforms:

- **Netlify** - Drag and drop the `dist` folder
- **Vercel** - Connect your GitHub repository
- **GitHub Pages** - Use the `dist` folder after building

## API Configuration

This app uses The Movie Database (TMDB) API. The API is free to use, but you need to:
1. Sign up for an account
2. Request an API key
3. Add the API key to your `.env` file as `VITE_TMDB_API_KEY`

### Environment Variables

The app uses environment variables for secure API key management:
- `.env` - Your local environment variables (not committed to Git)
- `.env.example` - Template file showing required variables

**For Production Deployment:**
- **Netlify**: Add `VITE_TMDB_API_KEY` in Site Settings > Environment Variables
- **Vercel**: Add `VITE_TMDB_API_KEY` in Project Settings > Environment Variables
- **GitHub Pages**: Use GitHub Secrets and update your build workflow

## Customization

Feel free to customize:
- Colors in `src/index.css` (CSS variables)
- Movie display count on home page
- Styling and layout
- Additional features

## License

This project is open source and available for portfolio use.

## Credits

- Movie data provided by [The Movie Database (TMDB)](https://www.themoviedb.org/)
- Built with React and Bootstrap

---

Made with ❤️ for your portfolio
=======
>>>>>>> 35cd407a5e9ba8e9bcb75111c68abb7b5fe9d16f

