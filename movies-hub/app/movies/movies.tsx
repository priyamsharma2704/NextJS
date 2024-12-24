import React from "react";
import MovieTile from "../movie-tile/movie-tile";
//TODO:
/*  To extend this task, you could:

    Add pagination
    Implement search functionality
    Add movie details page using dynamic routes
    Add client-side interactivity like favoriting movies
    Implement filters by genre or release date

    Genre List API
    https://developer.themoviedb.org/reference/genre-movie-list
*/
interface Movie {
    title: string;
    id: number;
    poster_path: string;
    release_date: string;
    rating: number;
    overview: string;
    vote_average: number;
}

interface MovieAPIResp {
    results: Movie[];
    page: number;
    total_pages: number;
    total_result: number;
}

interface Category {
    type: string;
}

const getMovies = async (type: string) => {
    try {
        const api_key = process.env.NEXT_PUBLIC_API_KEY;
        const url = `https://api.themoviedb.org/3/movie/${type}?api_key=${api_key}`;
        const res = await fetch(url, {
            next: {
                revalidate: 3600, // Revalidate every hour
            },
        });

        if (!res.ok) {
            throw new Error("Failed to fetch movies");
        }

        const data = await res.json();
        return data;
    } catch (error) {
        console.log(error);
        throw error;
    }
};

const Movies = async ({ type }: Category) => {
    const result = await getMovies(type);
    const movieResp: MovieAPIResp = result;
    const movies: Movie[] = movieResp.results;
    const typeUpper = type.toUpperCase().charAt(0) + type.slice(1);
    const category = typeUpper.split("_").join(" ");
    //console.log(movies);

    return (
        <main className="p-8">
            <h1 className="text-3xl font-bold mb-6">{category}</h1>

            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-8">
                {movies.map((movie) => (
                    <div
                        key={movie.id}
                        className="rounded-lg shadow-lg overflow-hidden"
                    >
                        <MovieTile movieData={movie}></MovieTile>
                        {/* <p className="text-gray-500 mb-2">
                                Release Date:
                                {new Date(
                                    movie.release_date
                                ).toLocaleDateString()}
                            </p>
                            <p className="text-gray-700 line-clamp-3">
                                {movie.overview}
                            </p>
                            <div className="mt-4 flex justify-between item-center">
                                <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded">
                                    Rating: {movie.vote_average.toFixed(1)}/10
                                </span>
                            </div> */}
                    </div>
                ))}
            </div>
        </main>
    );
};

export default Movies;
