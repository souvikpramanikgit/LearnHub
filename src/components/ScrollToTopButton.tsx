import React, { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";

const ScrollToTopButton: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setIsVisible(window.scrollY > 300);
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  if (!isVisible) return null;

  return (
    <button
      onClick={scrollToTop}
      style={{
        position: "fixed",
        bottom: "2rem",
        right: "2rem",
        backgroundColor: "#2e8555",
        border: "none",
        borderRadius: "50%",
        padding: "0.8rem",
        boxShadow: "0 4px 12px rgba(0, 0, 0, 0.2)",
        cursor: "pointer",
        transition: "transform 0.3s ease, background-color 0.3s ease",
        zIndex: 9999,
        animation: "bounceIn 0.5s ease-in-out",
      }}
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLButtonElement).style.transform = "scale(1.1)";
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLButtonElement).style.transform = "scale(1)";
      }}
      aria-label="Scroll to top"
    >
      <ArrowUp color="white" size={24} />
    </button>
  );
};

export default ScrollToTopButton;
