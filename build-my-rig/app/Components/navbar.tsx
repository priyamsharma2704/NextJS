import React from "react";
import Link from "next/link";
const Navbar = () => {
    const navigations = [
        "Builder",
        "Products",
        "Guides",
        "Completed Builds",
        "Trends",
        "Benchmarks",
        "Forums",
    ];
    return (
        <nav>
            <div className="text-4xl px-5 py-5">
                <span>BUILD</span>
                <span className="text-yellow-500">MY</span>
                <span>RIG</span>
            </div>
            <div className="flex text-xl border-solid border border-slate-700 w-screen">
                {navigations.map((nav) => (
                    <Link
                        href="/"
                        className="p-5 hover:bg-slate-800 border-l boder-r border-slate-700"
                    >
                        {nav}
                    </Link>
                ))}
                {/*ml-auto is to move the search input to the right */}
                <input
                    type="text"
                    placeholder="Search..."
                    className="bg-slate-800 rounded-full ml-auto px-5 mt-3 mb-3 mr-2"
                />
            </div>
        </nav>
    );
};

export default Navbar;
