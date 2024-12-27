import React from "react";
//https://image.tmdb.org/t/p/w500/pvske1MyAoymrs5bguRfVqYiM9a.jpg
const getProviders = async (movie_id: number) => {
    const api = process.env.NEXT_PUBLIC_API_BEARER_KEY;
    const url = `https://api.themoviedb.org/3/movie/${movie_id}/watch/providers`;

    const resp = await fetch(url, {
        headers: {
            Authorization: `Bearer ${api}`,
            Accept: "application/JSON",
        },
    });
    const data = await resp.json();
    return data.results.US == null ? null : data.results.US;
};

interface WatchProviders {
    display_priority: number;
    logo_path: string;
    provider_id: number;
    provider_name: string;
}

interface Props {
    movieId: number;
}
const WatchProviders = async ({ movieId }: Props) => {
    const provider = await getProviders(movieId);
    let data = [];
    if (provider == null) data = [];
    else if (provider.buy !== undefined) data = provider.buy;
    else if (provider.flatrate !== undefined) data = provider.flatrate;

    // console.log(data);
    return (
        <>
            <div className="flex pt-3">
                {data.map((image: WatchProviders) => (
                    <img
                        className="w-10 h-10 mr-5 rounded-lg"
                        key={image.provider_id}
                        src={`https://image.tmdb.org/t/p/w45${image.logo_path}`}
                        alt=""
                    />
                ))}
            </div>
        </>
    );
};

export default WatchProviders;
