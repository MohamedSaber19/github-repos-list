import { Link } from "react-router-dom";

const NoMatch = () => {
  return (
    <div className="p-8 lg:p-16 flex flex-col items-center justify-center h-full">
      <h1 className="text-lg lg:text-2xl font-bold mb-4">404</h1>
      <p className="text-gray-500">Page not found.</p>
      <Link to="/" className="text-purple-700 font-bold mt-4">
        Go back to home
      </Link>
    </div>
  );
};

export default NoMatch;
