import React, { useEffect, useState } from "react";
import Hero from "./components/Hero";
import TrendingApps from "./components/TrendingApps";

const App = () => {
  const [apps, setApps] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchAppsData = async () => {
      try {
        const response = await fetch("/apps.json");
        if (!response.ok) throw new Error("Failed to fetch apps data");
        const data = await response.json();
        setApps(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchAppsData();
  }, []);

  return (
    <div>
      <Hero />
      <TrendingApps apps={apps} loading={loading} error={error} />
    </div>
  );
};

export default App;
