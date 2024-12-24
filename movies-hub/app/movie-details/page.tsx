"use client";
import Navbar from "../navbar";
import { useSearchParams } from "next/navigation";
interface Movie {
    title: string;
    id: number;
    poster_path: string;
    release_date: string;
    rating: number;
    overview: string;
    vote_average: number;
}

const MovieDetails = () => {
    let movieData: Movie = {
        title: "",
        id: 0,
        poster_path: "",
        release_date: "",
        rating: 0,
        overview: "",
        vote_average: 0,
    };
    const searchParams = useSearchParams();
    const data = searchParams.get("data");
    if (data != null) {
        movieData = JSON.parse(data);
        console.log(movieData);
    }

    return (
        <div>
            <Navbar></Navbar>
            <div className="grid grid-cols-2 gap-10">
                <div>
                    <img
                        src={`https://image.tmdb.org/t/p/w500${movieData.poster_path}`}
                        alt={movieData.title}
                        className="mr-auto ml-auto mt-10 w-1/2"
                    ></img>
                </div>
                <div className="my-10">
                    <div className="text-3xl font-bold">{movieData.title}</div>
                    <br></br>
                    <div className="text-2xl">
                        Release Date: {movieData.release_date}
                    </div>
                    <br></br>
                    <div className="mr-10">
                        <span className="text-2xl"> {movieData.overview}</span>
                    </div>
                    <div>Votes: {movieData.vote_average}</div>
                </div>
            </div>
        </div>
    );
};

export default MovieDetails;
