import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";

function Layout() {
  const [loading, setLoading] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);
  const [fadeOutElse, setFadeOutElse] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setFadeOut(true);
      setTimeout(() => setLoading(false), 1500);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className={`loading-icon ${fadeOut ? "fade-out" : ""}`}>
        <h2 className="loading">
        Loading...
        </h2>
      </div>
    );
  } else {
    return (
      <div className={`fade-in ${fadeOutElse ? "fade-out-else" : ""}`}>
        {/* <div className="navbar-container">
          <Navbar />
        </div> */}
        <Outlet />
      </div>
    );
  }
}

export default Layout;
