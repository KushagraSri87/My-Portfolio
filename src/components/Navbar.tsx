import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const navItems = ["Home", "About", "Projects", "Skills", "Ideas", "Contact"];

const Navbar = () => {
  const [active, setActive] = useState("Home");
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map((item) => ({
        name: item,
        element: document.getElementById(item.toLowerCase()),
      }));

      const current = sections.find((section) => {
        if (!section.element) return false;
        const rect = section.element.getBoundingClientRect();
        return rect.top <= 100 && rect.bottom >= 100;
      });

      if (current) {
        setActive(current.name);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    setActive(id);
    setMobileOpen(false);
    const el = document.getElementById(id.toLowerCase());
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container flex items-center justify-between h-16">
        <span className="font-heading font-bold text-primary text-lg tracking-widest">KUSHAGRA SRIVASTAVA</span>
        <div className="hidden md:flex gap-8">
          {navItems.map((item) => (
            <button
              key={item}
              onClick={() => scrollTo(item)}
              className={`text-sm font-medium transition-colors ${
                active === item
                  ? "text-foreground border-b-2 border-primary pb-1"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {item}
            </button>
          ))}
        </div>
        <button className="md:hidden text-foreground" onClick={() => setMobileOpen(!mobileOpen)}>
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      {mobileOpen && (
        <div className="md:hidden bg-background border-b border-border py-4">
          {navItems.map((item) => (
            <button
              key={item}
              onClick={() => scrollTo(item)}
              className="block w-full text-left px-6 py-2 text-sm text-muted-foreground hover:text-foreground"
            >
              {item}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
