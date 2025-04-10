import { useEffect, useState } from "react";
import "./App.css";
import { BrowserRouter, NavLink, Router } from "react-router-dom";
import Home from "./components/Home";
import Folder from "./components/Folder";
import Teams from "./components/Teams";
import Analytics from "./components/Analytics";
import Messages from "./components/Messages";
import Integrations from "./components/Integrations";

function App() {
  const [search, setSearch] = useState("");
  const [overviewData, setOverviewData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3001/overview")
      .then((res) => res.json())
      .then((data) => setOverviewData(data))
      .catch((error) => console.error("Error fetching overview data:", error));
  }, []);

  return (
    <BrowserRouter>
      <div className="flex bg-gray-100">
        {/* Sidebar */}
        <aside className="w-64 bg-white p-6 flex flex-col justify-between border-r-gray-200 border-r">
          <div>
            <div className="text-2xl font-bold text-pink-5500 mb-10">
              <img src="../public/Image 1858.png"></img>
            </div>
            <nav className="flex flex-col gap-4">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  `flex items-center gap-3 p-2 rounded-lg transition-all duration-300 ${
                    isActive
                      ? "bg-pink-500 text-white"
                      : "text-gray-600 hover:bg-gray-100"
                  }`
                }
              >
                <img src="../public/Squares four 1.png"></img>
                Dashboard
              </NavLink>
              <NavLink
                to="/projects"
                className={({ isActive }) =>
                  `flex items-center gap-3 p-2 rounded-lg transition-all duration-300 ${
                    isActive
                      ? "bg-pink-500 text-white"
                      : "text-gray-600 hover:bg-gray-100"
                  }`
                }
              >
                <img className="" src="../public/Folder.png"></img>
                Projects
              </NavLink>
              <NavLink
                to="/teams"
                className={({ isActive }) =>
                  `flex items-center gap-3 p-2 rounded-lg transition-all duration-300 ${
                    isActive
                      ? "bg-pink-500 text-white"
                      : "text-gray-600 hover:bg-gray-100"
                  }`
                }
              >
                <img src="../public/Groups.png"></img>
                Teams
              </NavLink>
              <NavLink
                to="/analytics"
                className={({ isActive }) =>
                  `flex items-center gap-3 p-2 rounded-lg transition-all duration-300 ${
                    isActive
                      ? "bg-pink-500 text-white"
                      : "text-gray-600 hover:bg-gray-100"
                  }`
                }
              >
                <img src="../public/Pie chart.png"></img>
                Analytics
              </NavLink>
              <NavLink
                to="/messages"
                className={({ isActive }) =>
                  `flex items-center gap-3 p-2 rounded-lg transition-all duration-300 ${
                    isActive
                      ? "bg-pink-500 text-white"
                      : "text-gray-600 hover:bg-gray-100"
                  }`
                }
              >
                <img src="../public/Chat.png"></img>
                Messages
              </NavLink>
              <NavLink
                to="/integrations"
                className={({ isActive }) =>
                  `flex items-center gap-3 p-2 rounded-lg transition-all duration-300 ${
                    isActive
                      ? "bg-pink-500 text-white"
                      : "text-gray-600 hover:bg-gray-100"
                  }`
                }
              >
                <img src="../public/Code.png"></img>
                Integrations
              </NavLink>
            </nav>
            <div className="mt-10 bf-pink-100 p-4 rounded-xl text-center">
              <img src="../public/Group.png"></img>
              <p className="font-semibold mb-2">V2.0 is available</p>
              <button className="text-pink-5500 font-bold underline">
                Try now
              </button>
            </div>
          </div>
        </aside>

        <div className="flex-1 flex flex-col">
          <header className="flex items-center justify-between p-3 bg-white border-b-gray-200 border-b">
            <h1 className="text-2xl font-bold text-pink-500">DashBoard</h1>
            <div className="flex items-center gap-4">
              <input
                type="text"
                placeholder="Search..."
                className="rounded-full px-9 py-2 bg-gray-100 focus:outline-none focus:ring-2 focus:ring-pink-500"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
              <span className="text-gray-500">
                <img src="../public/Bell 1.png"></img>
              </span>
              <span className="text-gray-500">
                <img src="../public/Question 1.png"></img>
              </span>
              <img
                src="../public/Avatar 313.png"
                alt="Avatar"
                className="rounded-full w-10 h-10"
              />
            </div>
          </header>
          {/* Overview */}
          <main className="pl-5 bg-white">
            <div className="flex flex-row gap-4 items-center ">
              <img className="w-7 h-6" src="../public/Squares four 1.png"></img>
              <h1 className="text-2xl font-bold">Overview</h1>
            </div>

            <section className="grid grid-cols-3 gap-6 mb-10 mt-4">
              {overviewData.map((item) => {
                if (item.id === 1) {
                  return (
                    <div
                      key={item.id}
                      className="bg-pink-100 p-3 rounded-xl flex relative"
                    >
                      <div>
                        <p className="font-bold">{item.title}</p>
                        <h2 className="text-3xl font-bold ml-1">
                          ${item.amount.toLocaleString('en-US')}
                        </h2>
                        <span className="flex items-center gap-2 mt-3">
                          <p
                            className={`text-sm ${
                              item.change >= 0
                                ? "text-green-500"
                                : "text-red-500"
                            }`}
                          >
                            {item.change >= 0 ? "▲" : "▼"} {item.change}%
                          </p>
                          <span> period of change</span>
                        </span>
                      </div>
                      <button className="absolute top-8 right-4">
                        <img src="../public/Button 1509.png" alt="Button" />
                      </button>
                    </div>
                  );
                } else if (item.id === 2) {
                  return (
                    <div
                      key={item.id}
                      className="bg-blue-100 p-3 rounded-xl flex relative"
                    >
                      <div>
                        <p className="font-bold">{item.title}</p>
                        <h2 className="text-3xl font-bold ml-1">
                          ${item.amount.toLocaleString('en-US')}
                        </h2>
                        <span className="flex items-center gap-2 mt-3">
                          <p
                            className={`text-sm ${
                              item.change >= 0
                                ? "text-green-500"
                                : "text-red-500"
                            }`}
                          >
                            {item.change >= 0 ? "▲" : "▼"} {item.change}%
                          </p>
                          <span> period of change</span>
                        </span>
                      </div>
                      <button className="absolute top-8 right-4">
                        <img src="../public/Button 1529.png" alt="Button" />
                      </button>
                    </div>
                  );
                } else if (item.id === 3) {
                  return (
                    <div
                      key={item.id}
                      className="bg-indigo-100 p-3 rounded-xl flex relative"
                    >
                      <div>
                        <p className="font-bold">{item.title}</p>
                        <h2 className="text-3xl font-bold ml-1">
                          {item.amount.toLocaleString('en-US')}
                        </h2>
                        <span className="flex items-center gap-2 mt-3">
                          <p
                            className={`text-sm ${
                              item.change >= 0
                                ? "text-green-500"
                                : "text-red-500"
                            }`}
                          >
                            {item.change >= 0 ? "▲" : "▼"} {item.change}%
                          </p>
                          <span> period of change</span>
                        </span>
                      </div>
                      <button className="absolute top-8 right-4">
                        <img src="../public/Button 1530.png" alt="Button" />
                      </button>
                    </div>
                  );
                }
              })}
            </section>
          </main>
          <div>
            <h1> Datatable</h1>
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
