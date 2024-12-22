import Navbar from "./navbar";
import Movies from "./movies/movies";

interface SearchParams {
    type?: string;
}

export default function Home({ searchParams }: SearchParams) {
    const type = searchParams.type?.split("-").join("_");
    const category = type || "popular";

    return (
        <>
            <Navbar></Navbar>
            <Movies type={category}></Movies>
        </>
    );
}
