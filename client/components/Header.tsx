import { Link } from "react-router-dom";

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-background/80 backdrop-blur-md">
      <div className="container mx-auto max-w-7xl px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link
            to="/"
            className="flex items-center gap-2 hover:opacity-80 transition-opacity"
          >
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white font-bold text-lg">
              <img className="rounded-full" src="https://imgs.search.brave.com/Oh879n3dA9C9nAuSEvwP8Cg5H2nW2OPT9jReNQnCWN4/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/aWNvbnM4LmNvbS9n/bHlwaC1uZXVlLzEy/MDAvbWVkaXRhdGlv/bi1ndXJ1LmpwZw" alt="" />
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-foreground text-sm">
                Sentinel Soul
              </span>
              <span className="text-xs text-muted-foreground">Coach AI</span>
            </div>
          </Link>

          {/* Nav Links */}
          <nav className="hidden md:flex items-center gap-8">
            <Link
              to="/"
              className="text-sm font-medium text-foreground hover:text-primary transition-colors"
            >
              Dashboard
            </Link>
            <Link
              to="/journal"
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              Journal Analysis
            </Link>
            <Link
              to="/coach"
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              Coach Chat
            </Link>
            <Link
              to="/admin"
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              Admin Panel
            </Link>
          </nav>

          {/* CTA Button */}
          <button className="px-6 py-2.5 rounded-lg bg-gradient-to-r from-primary to-secondary text-primary-foreground font-medium text-sm hover:shadow-lg glow-primary transition-all duration-300 transform hover:scale-105">
            Talk to Coach
          </button>
        </div>
      </div>
    </header>
  );
}
