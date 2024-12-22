import Navbar from "./navbar";
import Movies from "./movies/movies";

interface SearchParams {
    searchParams: {
        type?: string;
    };
}

export default function Home({ searchParams }: SearchParams) {
    const type = searchParams.type?.split("-").join("_");
    const category = type || "popular";
    console.log(type);
    return (
        <>
            <Navbar></Navbar>
            <Movies type={category}></Movies>
        </>
    );
}
