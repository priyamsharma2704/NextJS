import React from "react";

const Loading = () => {
    return (
        <div className="p-8 text-center">
            <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-gray-900 mx-auto"></div>
            <p className="mt-4">Loading movies...</p>
        </div>
    );
};

export default Loading;
