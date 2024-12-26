import Navbar from "../navbar";
import WatchProviders from "../watch-providers/watch-providers";
import Link from "next/link";

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

interface Props {
    searchParams: {
        id: number;
    };
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
    //console.log(data);
    return data;
};

const MovieDetails = async ({ searchParams }: Props) => {
    const movieData: Movie = await getMovieById(searchParams.id);
    console.log(movieData);

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
                    <br />
                    <div className="text-2xl">
                        Release Date: {movieData.release_date}
                    </div>
                    <br />
                    <div className="mr-10">
                        <span className="text-2xl"> {movieData.overview}</span>
                    </div>
                    <br />
                    <div className="text-2xl">
                        |{" "}
                        {movieData.genres.map((genre) => (
                            <span> {genre.name} | </span>
                        ))}
                    </div>
                    <br />
                    <div className="text-2xl">
                        Votes: {movieData.vote_average}
                    </div>
                    <br />
                    <div>
                        Where to watch:
                        <WatchProviders></WatchProviders>
                    </div>
                    <Link href="/">
                        <button className="bg-blue-950 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                            Back
                        </button>
                    </Link>
                </div>
            </div>
            <div>Recommendations:</div>
        </div>
    );
};

export default MovieDetails;
