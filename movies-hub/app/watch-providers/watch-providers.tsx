import React from "react";

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
    console.log(data);
    return data.results == null ? null : data.results.US;
};

interface WatchProviders {
    display_priority: number;
    logo_path: string;
    provider_id: number;
    provider_name: string;
}
const WatchProviders = () => {
    return <div>WatchProviders</div>;
};

export default WatchProviders;
