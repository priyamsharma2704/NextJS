"use client";

interface ErrorProps {
    error: Error & { digest?: string };
    reset: () => void;
}

const ErrorComp = ({ error, reset }: ErrorProps) => {
    return (
        <div className="p-8 text-center">
            <h2 className="text-2xl text-red-600 mb-4">
                Something went wrong!
            </h2>
            <button
                onClick={() => reset()}
                className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
            >
                Try again
            </button>
        </div>
    );
};

export default ErrorComp;
