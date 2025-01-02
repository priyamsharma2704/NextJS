import Link from "next/link";
export default function Home() {
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
        <>
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
            {/* Start Your Build */}
            <div className="bg-[#282838] py-20 font-bold">
                <p className="text-6xl flex justify-center ">
                    Pick Parts. Build Your PC.
                </p>
                <p className="text-6xl flex justify-center">
                    Compare and Share.
                </p>
                <div className="py-10 font-thin text-[#7B7B7F] text-lg flex flex-col items-center">
                    <p>
                        We provide part selection, pricing, and compatibility
                        guidance for
                    </p>
                    <p> do-it-yourself computer builders.</p>
                </div>
                <div className="flex flex-col items-center">
                    <button className="bg-[#2B86DE] px-8 py-3 text-2xl rounded-md hover:bg-[#195FA3]">
                        Start Your Build
                    </button>
                </div>
            </div>
            {/*Build Guides */}
            <div className=" py-20 font-bold">
                <p className="text-6xl flex justify-center ">Build Guides</p>
                <div className="py-10 font-thin text-[#7B7B7F] text-lg flex flex-col items-center">
                    <p>
                        Building your own PC and need ideas on where to get
                        started? Explore our
                    </p>
                    <p>
                        build guides which cover systems for a variety of
                        use-cases and budgets.
                    </p>
                </div>
                <div className="flex flex-col items-center">
                    <button className="bg-[#2B86DE] px-8 py-3 text-2xl rounded-md hover:bg-[#195FA3]">
                        View Build Guides
                    </button>
                </div>
            </div>
        </>
    );
}
