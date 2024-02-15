"use client"
import { useEffect, useState } from "react";
import Home from "./component/Home";

export default function Page() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulating loading completion after 2 seconds
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 2000);

    // Cleanup function to clear timeout
    return () => clearTimeout(timeout);
  }, []);

  return (
    <div>
      {loading ? (
        <div className="loader">Loading...</div>
      ) : (
        <Home />
      )}
    </div>
  );
}
