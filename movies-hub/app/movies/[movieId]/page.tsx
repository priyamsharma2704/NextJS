import React from "react";
import WatchProviders from "@/app/watch-providers/watch-providers";
interface Movie {
    title: string;
    id: number;
    poster_path: string;
    release_date: string;
    rating: number;
    overview: string;
    vote_average: number;
    genres: [{ id: number; name: string }];
}

const getMovieById = async (id: number) => {
    const api = process.env.NEXT_PUBLIC_API_BEARER_KEY;
    const url = `https://api.themoviedb.org/3/movie/${id}`;

    const resp = await fetch(url, {
        headers: {
            Authorization: `Bearer ${api}`,
            Accept: "application/JSON",
        },
    });
    const data = await resp.json();
    return data;
};

const MoviePage = async ({ params }: { params: { movieId: number } }) => {
    console.log(params.movieId);
    const movieId = params.movieId;
    const movieData: Movie = await getMovieById(movieId);
    return (
        <>
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
                    <br />
                    <div className="text-2xl">
                        Release Date: {movieData.release_date}
                    </div>
                    <br />
                    <div className="mr-10">
                        <span className="text-2xl"> {movieData.overview}</span>
                    </div>
                    <br />
                    <div className="flex text-lg  text-black">
                        {movieData.genres.map((genre) => (
                            <div className="  rounded-lg bg-red-200 pr-2 pl-2 mr-4">
                                {" "}
                                {genre.name}{" "}
                            </div>
                        ))}
                    </div>
                    <br />
                    <div className="text-2xl">
                        Votes: {movieData.vote_average}
                    </div>
                    <br />
                    <div>
                        <span className="text-lg">Available on:</span>
                        <WatchProviders movieId={movieId}></WatchProviders>
                    </div>
                    {/* <Link href="/">
                        <button className="bg-blue-950 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                            Back
                        </button>
                    </Link> */}
                </div>
            </div>
            <div>Recommendations:</div>
        </>
    );
};

export default MoviePage;
