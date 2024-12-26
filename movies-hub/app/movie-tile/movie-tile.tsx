//"use client";
import Link from "next/link";

interface Movie {
    title: string;
    id: number;
    poster_path: string;
    release_date: string;
    rating: number;
    overview: string;
    vote_average: number;
}

interface MovieTileProps {
    movieData: Movie;
    category: string;
}
const MovieTile = ({ movieData, category }: MovieTileProps) => {
    const movieId = movieData.id;

    return (
        <>
            <img
                src={`https://image.tmdb.org/t/p/w500${movieData.poster_path}`}
                alt={movieData.title}
                className="mr-auto ml-auto"
            ></img>
            <div className="p-4">
                <h2 className="text-center text-xl font-semibold mb-2">
                    {movieData.title}
                </h2>
            </div>
        </>
    );
};

export default MovieTile;
