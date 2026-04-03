import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname,
    );
  }, [location.pathname]);

  return (
    <div className="vm_main_wrapper" id="notfound_wrapper">
      <section className="main_content py-24 md:py-32">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-8xl font-bold font-saira mb-4 text-vm-pink">404</h1>
          <p className="text-2xl text-foreground mb-4 font-saira">Oops! Page not found</p>
          <p className="text-lg text-gray-600 mb-8">
            The page you're looking for doesn't exist or has been moved.
          </p>
          <Link to="/">
            <button className="btn-vm-pink">
              Return to Home
            </button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default NotFound;
