import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, GraduationCap } from "lucide-react";

const navLinks = [
  { label: "Home", path: "/" },
  { label: "About", path: "/about" },
  { label: "Academics", path: "/academics" },
  { label: "Admissions", path: "/admissions" },
  { label: "Student Life", path: "/student-life" },
  { label: "Contact", path: "/contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="sticky top-0 z-50 bg-primary shadow-lg">
      <div className="container mx-auto flex items-center justify-between py-3 px-4">
        <Link to="/" className="flex items-center gap-2">
          <GraduationCap className="h-8 w-8 text-secondary" />
          <div className="leading-tight">
            <span className="block text-lg font-bold text-primary-foreground">Lubombo Central</span>
            <span className="block text-xs font-medium text-sky-light tracking-wide">HIGH SCHOOL</span>
          </div>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-1">
          {navLinks.map((l) => (
            <Link
              key={l.path}
              to={l.path}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                location.pathname === l.path
                  ? "bg-secondary text-secondary-foreground"
                  : "text-primary-foreground/80 hover:bg-navy-light hover:text-primary-foreground"
              }`}
            >
              {l.label}
            </Link>
          ))}
          <Link
            to="/admissions"
            className="ml-3 px-5 py-2 rounded-lg text-sm font-semibold bg-secondary text-secondary-foreground hover:bg-sky-light transition-colors"
          >
            Apply Now
          </Link>
        </nav>

        {/* Mobile toggle */}
        <button
          className="lg:hidden text-primary-foreground p-2"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile nav */}
      {open && (
        <nav className="lg:hidden bg-primary border-t border-navy-light pb-4 px-4">
          {navLinks.map((l) => (
            <Link
              key={l.path}
              to={l.path}
              onClick={() => setOpen(false)}
              className={`block px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
                location.pathname === l.path
                  ? "bg-secondary text-secondary-foreground"
                  : "text-primary-foreground/80 hover:bg-navy-light"
              }`}
            >
              {l.label}
            </Link>
          ))}
          <Link
            to="/admissions"
            onClick={() => setOpen(false)}
            className="block mt-2 px-4 py-3 rounded-lg text-sm font-semibold bg-secondary text-secondary-foreground text-center"
          >
            Apply Now
          </Link>
        </nav>
      )}
    </header>
  );
};

export default Navbar;
