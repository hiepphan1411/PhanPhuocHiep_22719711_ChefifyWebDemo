import { NavLink } from "react-router-dom";

export default function Sidebar() {
  return (
    <aside className="w-64 bg-white p-6 flex flex-col justify-between border-r-gray-200 border-r">
      <div>
        <div className="text-2xl font-bold text-pink-5500 mb-10">
          <img src="../public/Image 1858.png"></img>
        </div>
        <nav className="flex flex-col gap-4">
          <NavLink
            to="/home"
            className={({ isActive }) =>
              `flex items-center gap-3 p-2 rounded-lg transition-all duration-300 ${
                isActive
                  ? "bg-pink-500 text-white"
                  : "text-gray-600 hover:bg-gray-100"
              }`
            }
          >
            <img
              className="bg-white rounded"
              src="../public/Squares four 1.png"
            ></img>
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
  );
}
