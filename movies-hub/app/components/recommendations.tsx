import React from "react";
import Link from "next/link";
import MovieTile from "../movie-tile/movie-tile";
interface Movie {
    title: string;
    id: number;
    poster_path: string;
    release_date: string;
    rating: number;
    overview: string;
    vote_average: number;
}

const getRecommendations = async (movie_id: number) => {
    const api = process.env.NEXT_PUBLIC_API_BEARER_KEY;
    const url = `https://api.themoviedb.org/3/movie/${movie_id}/recommendations`;

    console.log(url);
    const resp = await fetch(url, {
        headers: {
            Authorization: `Bearer ${api}`,
            Accept: "application/JSON",
        },
    });
    const data = await resp.json();
    return data.results;
};
const Recommendations = async ({ movie_id }: { movie_id: number }) => {
    const recommendations: Movie[] = await getRecommendations(movie_id);
    console.log(recommendations);
    return (
        <div className="grid grid-cols-8 mb-10 mr-10 ml-10">
            {recommendations.slice(0, 8).map((movie) => (
                <div
                    key={movie.id}
                    className="rounded-lg shadow-lg overflow-hidden h-70 w-40"
                >
                    <Link href={`/movies/${movie.id}`}>
                        <MovieTile movieData={movie}></MovieTile>
                    </Link>
                </div>
            ))}
        </div>
    );
};

export default Recommendations;
