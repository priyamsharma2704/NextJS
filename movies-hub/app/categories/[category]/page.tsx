import React from "react";
import Link from "next/link";
import MovieTile from "@/app/movie-tile/movie-tile";
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
const getMovies = async (type: string, page: number) => {
    try {
        const api_key = process.env.NEXT_PUBLIC_API_KEY;
        const url = `https://api.themoviedb.org/3/movie/${type}?api_key=${api_key}&page=${page}`;
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

const CategoryPage = async ({ params }: { params: { category: string } }) => {
    console.log(params.category);
    const movieCategory = params.category;
    const result = await getMovies(movieCategory, 1);
    const movieResp: MovieAPIResp = result;
    const movies: Movie[] = movieResp.results;
    const typeUpper =
        movieCategory.toUpperCase().charAt(0) + movieCategory.slice(1);
    const category = typeUpper.split("_").join(" ");

    return (
        <main className="p-8">
            <h1 className="text-3xl font-bold mb-6">{category}</h1>

            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-8">
                {movies.map((movie) => (
                    <div
                        key={movie.id}
                        className="rounded-lg shadow-lg overflow-hidden"
                    >
                        <Link href={`/movies/${movie.id}`}>
                            <MovieTile
                                movieData={movie}
                                category={category}
                            ></MovieTile>
                        </Link>
                    </div>
                ))}
            </div>

            <div className="flex justify-center">
                <Link
                    className="px-10"
                    href={`?type=${movieCategory}&page=${movieResp.page - 1}`}
                >
                    <button
                        className="bg-blue-950 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                        disabled={movieResp.page === 1}
                    >
                        Previous
                    </button>
                </Link>
                <span className="py-2">
                    Page {movieResp.page} of {movieResp.total_pages}
                </span>
                <Link
                    className="px-10"
                    href={`?type=${movieCategory}&page=${movieResp.page + 1}`}
                >
                    <button
                        className="bg-blue-950 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                        disabled={movieResp.page === movieResp.total_pages}
                    >
                        Next
                    </button>
                </Link>
            </div>
        </main>
    );
};

export default CategoryPage;
