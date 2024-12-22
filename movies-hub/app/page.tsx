import Navbar from "./navbar";
import Movies from "./movies/movies";

export default function Home({
    searchParams,
}: {
    searchParams: { type?: string };
}) {
    const type = searchParams.type.split("-").join("_");
    const category = type || "popular";
    console.log(type);
    return (
        <>
            <Navbar></Navbar>
            <Movies type={category}></Movies>
        </>
    );
}
