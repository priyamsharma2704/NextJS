import Navbar from "./navbar";
import Movies from "./movies/movies";

interface Props {
    searchParams: {
        type?: string;
        page?: number;
    };
}

export default function Home({ searchParams }: Props) {
    const type = searchParams.type?.split("-").join("_");
    const category = type || "popular";
    const pageNum = searchParams.page || 1;
    return (
        <>
            <Navbar></Navbar>
            <Movies type={category} page={pageNum}></Movies>
        </>
    );
}
