"use client";
import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
    const [searchQuery, setSearchQuery] = useState("");

    const categories = [
        { name: "Now Playing", type: "now_playing" },
        { name: "Top Rated", type: "top_rated" },
        { name: "Upcoming", type: "upcoming" },
        { name: "Popular", type: "popular" },
    ];

    const handleSearch = (e:any) => {
        e.preventDefault();
        console.log("searching...");
    };

    return (
        <>
            <nav className="bg-slate-900 text-white shadow-lg">
                <div className="max-w-7xl mx-auto px-4 py-3">
                    <div className="flex flex-col sm:flex-row justify-between items-center gap-4 mb-3">
                        <a href="/" className="flex items-center">
                            <span className="text-xl font-bold">
                                Movies Hub
                            </span>
                        </a>
                        <div className="overflow-x-auto scrollbar-hide">
                            <div className="flex space-x-10">
                                {categories.map((category) => (
                                    <Link
                                        href={`/?type=${category.type}`}
                                        key={category.type}
                                        className="text-lg whitespace-nowrap hover:text-blue-400 transition-colors px-2 py-1 rounded-md hover:bg-slate-800"
                                    >
                                        {category.name}
                                    </Link>
                                ))}
                            </div>
                        </div>
                        <form
                            onSubmit={handleSearch}
                            className="relative -full sm:w-auto"
                        >
                            <input
                                type="text"
                                placeholder="Search movies..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className="rounded-full bg-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-400 px-4 py-2 pr-10
                                sm:w-64 w-full"
                            />
                        </form>
                    </div>
                </div>
            </nav>
        </>
    );
}
