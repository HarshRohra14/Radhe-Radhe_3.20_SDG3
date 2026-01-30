import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { Header } from "@/components/Header";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname,
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <div className="container mx-auto max-w-7xl px-4 min-h-[calc(100vh-80px)] flex items-center justify-center">
        <div className="glass rounded-2xl p-12 max-w-md w-full text-center animate-slide-up">
          <div className="text-7xl mb-6">🤔</div>
          <h1 className="text-5xl font-bold text-foreground mb-3">404</h1>
          <p className="text-xl text-muted-foreground mb-2">Page not found</p>
          <p className="text-sm text-muted-foreground mb-8">
            The page you're looking for doesn't exist or has been moved.
          </p>
          <Link
            to="/"
            className="inline-block px-6 py-3 rounded-lg bg-gradient-to-r from-primary to-secondary text-white font-medium hover:shadow-lg glow-primary transition-all duration-300 transform hover:scale-105"
          >
            Return to Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
