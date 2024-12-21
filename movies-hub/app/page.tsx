import Navbar from "./navbar";
import Movies from "./movies/movies";

export default function Home() {
    return (
        <>
            <Navbar></Navbar>
            <Movies type={"popular"}></Movies>
        </>
    );
}
