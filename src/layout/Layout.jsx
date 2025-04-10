import { useEffect, useState } from "react";
import Header from "../components/Header";
import OverviewLoad from "../components/OverviewLoad";
import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";

export default function Layout() {
  const [overviewData, setOverviewData] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3001/overview")
      .then((res) => res.json())
      .then((data) => {
        setOverviewData(data);
      })
      .catch((error) => console.error("Error fetching overview data:", error));
  }, []);

  return (
    <div className="flex bg-gray-100">
      {/* Sidebar */}
      <Sidebar />
      <div className="flex-1">
        <Header />
        <OverviewLoad overviewData={overviewData} />
        <Outlet />
      </div>
    </div>
  );
}
