import { useLocation } from "react-router-dom";
import Lottie from "lottie-react";
import NotFoundAnimation from "../assets/pet.json"
import { useEffect } from "react";
const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    // <div className="min-h-screen flex items-center justify-center bg-gray-100">
     <div className="min-h-screen flex flex-col items-center justify-center text-center px-4 md:px-8  bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-100">
      <div className="text-center">
        <Lottie animationData={NotFoundAnimation} loop={true} />
        <h1 className="text-8xl font-extrabold text-blue-600">404</h1>
        <p className="text-xl mt-4 text-gray-700 dark:text-gray-300">Sorry, page not found.</p>
        <div className="flex justify-center gap-4 mt-6 flex-wrap mt-4 inline-block px-6 py-3 bg-blue-600 text-white font-semibold rounded-xl hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 transition">
          <a href="/" className="btn">🏠 Home</a>
          <a href="/course/intro-to-react" className="btn">📘 Courses</a>
          <a href="/dsa-sheet" className="btn">🧩 DSA Sheet</a>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
