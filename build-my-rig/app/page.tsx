import Link from "next/link";
export default function Home() {
    return (
        <>
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
