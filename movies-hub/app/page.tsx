//TODO:
/*  To extend this task, you could:

    //Add pagination
    // Add movie details page using dynamic routes
    Add client-side interactivity like favoriting movies
    Implement filters by genre or release date

    Genre List API
    https://developer.themoviedb.org/reference/genre-movie-list

    Add to watchlist
    https://developer.themoviedb.org/reference/account-add-to-watchlist

    Get watchlist
    https://developer.themoviedb.org/reference/account-watchlist-movies

    //Recommendations
    //https://developer.themoviedb.org/reference/movie-recommendations
    
    Search movie
    https://developer.themoviedb.org/reference/search-movie

    //WatchProviders
    //https://developer.themoviedb.org/reference/movie-watch-providers
*/
export default async function Home() {
    return (
        <div className="flex justify-center text-3xl">
            Select a category to view movies
        </div>
    );
}
