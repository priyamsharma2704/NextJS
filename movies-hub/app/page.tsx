import Navbar from "./navbar";
import Movies from "./movies/movies";

interface Props {
    searchParams: {
        type?: string;
        page?: number;
    };
}

export default async function Home({ searchParams }: Props) {
    const type = searchParams.type?.split("-").join("_") || "popular";
    const pageNum = searchParams.page || 1;
    return (
        <>
            <Navbar></Navbar>
            <Movies type={type} page={pageNum}></Movies>
        </>
    );
}
