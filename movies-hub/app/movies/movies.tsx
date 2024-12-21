import React from "react";
//TODO:
/*  To extend this task, you could:

    Add pagination
    Implement search functionality
    Add movie details page using dynamic routes
    Add client-side interactivity like favoriting movies
    Implement filters by genre or release date
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
    console.log(movies);

    return (
        <main className="p-8">
            <h1 className="text-3xl font-bold mb-6">Popular Movies</h1>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {movies.map((movie) => (
                    <div
                        key={movie.id}
                        className="border rounded-lg shadow-lg overflow-hidden"
                    >
                        <img
                            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                            alt={movie.title}
                            className="w-40 h-64 mr-auto ml-auto"
                        ></img>
                        <div className="p-4">
                            <h2 className="text-xl font-semibold mb-2">
                                {movie.title}
                            </h2>
                            <p className="text-gray-500 mb-2">
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
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </main>
    );
};

export default Movies;
