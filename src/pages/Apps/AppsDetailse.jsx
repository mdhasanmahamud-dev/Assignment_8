import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import AppsDetail from "./AppsDetail";
import BarChart from "./BarChart";

const AppsDetailse = () => {
  const { id } = useParams();
  const [app, setApp] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchApp = async () => {
      try {
        const res = await fetch("../apps.json");
        const data = await res.json();
        const singleApp = data.find((item) => item.id === Number(id));
        if (!singleApp) throw new Error("App not found");
        setApp(singleApp);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchApp();
  }, [id]);

  if (loading) return <div className="text-center py-10">Loading...</div>;
  if (error)
    return <div className="text-center py-10 text-red-600">{error}</div>;
  return (
    <div className="container max-w-7xl mx-auto px-4 py-6">
      <AppsDetail app={app} />
      <BarChart app={app}/>
    </div>
  );
};

export default AppsDetailse;
