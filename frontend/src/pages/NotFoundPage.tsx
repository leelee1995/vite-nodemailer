import { Link } from "react-router";

const NotFoundPage = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-base-200 text-base-content p-4">
            <div className="text-center">
                <h1 className="text-9xl font-extrabold text-primary mb-4">
                    404
                </h1>
                <h2 className="text-4xl font-bold mb-4">Page Not Found</h2>
                <p className="text-lg mb-8 max-w-lg mx-auto">
                    The page you are looking for might have been removed, had
                    its name changed, or is temporarily unavailable.
                </p>
                <Link to="/" className="btn btn-primary btn-lg animate-pulse">
                    Go Home
                </Link>
            </div>
        </div>
    );
};

export default NotFoundPage;
