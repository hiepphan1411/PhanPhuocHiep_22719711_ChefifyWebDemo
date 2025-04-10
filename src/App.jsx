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
  const [customerData, setCustomerData] = useState([]);
  //Quản lý dữ liệu edit khách hàng
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedCustomer, setSelectedCustomer] = useState(null);
  useEffect(() => {
    fetch("http://localhost:3001/overview")
      .then((res) => res.json())
      .then((data) => {
        setOverviewData(data);
      })
      .catch((error) => console.error("Error fetching overview data:", error));
  }, []);

  useEffect(() => {
    fetch("http://localhost:3002/users")
      .then((res) => res.json())
      .then((data) => setCustomerData(data))
      .catch((error) => console.error("Error fetching customer data:", error));
  }, []);

  //Xử lý modal edit
  const handleEdit = async (id) => {
    try {
      const response = await fetch("http://localhost:3002/users/" + id);
      const data = await response.json();

      setSelectedCustomer(data);
      setIsModalOpen(true);
    } catch (error) {
      console.error("Error fetching customer data:", error);
    }
  };
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
          <main className="pl-5 bg-white p-3">
            <div className="flex flex-row gap-4 items-center ">
              <img className="w-7 h-6" src="../public/Squares four 1.png"></img>
              <h1 className="text-2xl font-bold">Overview</h1>
            </div>

            <section className="grid grid-cols-3 gap-6 mb-5 mt-4">
              {overviewData.map((item) => {
                if (item.id == 1) {
                  return (
                    <div
                      key={item.id}
                      className="bg-pink-100 p-3 rounded-xl flex relative"
                    >
                      <div>
                        <p className="font-bold">{item.title}</p>
                        <h2 className="text-3xl font-bold ml-1">
                          ${item.amount.toLocaleString("en-US")}
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
                } else if (item.id == 2) {
                  return (
                    <div
                      key={item.id}
                      className="bg-blue-100 p-3 rounded-xl flex relative"
                    >
                      <div>
                        <p className="font-bold">{item.title}</p>
                        <h2 className="text-3xl font-bold ml-1">
                          ${item.amount.toLocaleString("en-US")}
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
                } else if (item.id == 3) {
                  return (
                    <div
                      key={item.id}
                      className="bg-indigo-100 p-3 rounded-xl flex relative"
                    >
                      <div>
                        <p className="font-bold">{item.title}</p>
                        <h2 className="text-3xl font-bold ml-1">
                          {item.amount.toLocaleString("en-US")}
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
          {/* Table */}
          <div className="flex bg-white justify-between items-center pb-5">
            <div className="flex justify-start gap-2 items-center pl-5">
              <img src="../public/File text 1.png"></img>
              <h1 className="text-2xl font-bold">Detailed report</h1>
            </div>
            <div className="flex justify-end gap-2">
              <button className="border px-4 py-2 rounded-lg text-pink-500 border-pink-500 flex gap-2">
                <img src="../public/Download.png"></img>
                <h3>Import</h3>
              </button>
              <button className="border px-4 py-2 rounded-lg text-pink-500 border-pink-500 flex gap-2">
                <img src="../public/Move up.png"></img>
                <h3>Export</h3>
              </button>
            </div>
          </div>
          <table className="w-full text-left bg-white">
            <thead className="bg-gray-100">
              <tr>
                <th className="p-3">
                  <input type="checkbox"></input>
                </th>
                <th className="p-3">CUSTOMER NAME</th>
                <th className="p-3">COMPANY</th>
                <th className="p-3">ORDER VALUE</th>
                <th className="p-3">ORDER DATE</th>
                <th className="p-3">STATUS</th>
                <th className="p-3"></th>
              </tr>
            </thead>
            <tbody>
              {customerData.map((customer) => (
                <tr key={customer.id} className="border-b border-b-gray-200">
                  <td className="p-3">
                    <input type="checkbox"></input>
                  </td>
                  <td className="p-3 flex items-center gap-2">
                    <img
                      src={customer.linkAvatar}
                      alt={customer.name}
                      className="w-8 h-8 rounded-full"
                    />
                    {customer.name}
                  </td>
                  <td className="p-3">{customer.company}</td>
                  <td className="p-3">
                    {customer.orderValue.toLocaleString("en-US")}
                  </td>
                  <td className="p-3">{customer.orderDate}</td>
                  <td className="p-3">
                    <span
                      className={`px-2 py-1 rounded-full text-xs font-semibold ${
                        customer.status === "New"
                          ? "bg-blue-100 text-blue-500"
                          : customer.status === "In-progress"
                          ? "bg-yellow-100 text-yellow-500"
                          : "bg-green-100 text-green-500"
                      }`}
                    >
                      {customer.status}
                    </span>
                  </td>
                  <td className="p-3">
                    <button onClick={() => handleEdit(customer.id)}>
                      <img
                        src="../public/create.png"
                        alt="Edit"
                        className="w-4 h-4"
                      />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          {/* Xử lý modal edit */}
          {isModalOpen && (
            <div className="fixed inset-0 bg-opacity-50 flex justify-center items-center">
              <div className="bg-gray-100 p-6 rounded-lg w-1/3">
                <div className="flex gap-2">
                  <img className="w-7 h-7" src="../public/create.png"></img>
                  <h2 className="text-xl font-bold mb-4">Edit Customer</h2>
                </div>
                {selectedCustomer ? (
                  <div className="space-y-4">
                    <div>
                      <label>Name:</label>
                      <input
                        type="text"
                        value={selectedCustomer.name}
                        className="p-2 w-full bg-gray-200 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
                      />
                    </div>
                    <div>
                      <label>Company:</label>
                      <input
                        type="text"
                        value={selectedCustomer.company}
                        className="p-2 w-full bg-gray-200 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
                      />
                    </div>
                    <div>
                      <label>Order Value:</label>
                      <input
                        type="text"
                        value={selectedCustomer.orderValue}
                        className="p-2 w-full bg-gray-200 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
                      />
                    </div>
                    <div>
                      <label>OrderDate:</label>
                      <input
                        type="text"
                        value={selectedCustomer.orderDate}
                        className="p-2 w-full bg-gray-200 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
                      />
                    </div>
                    <div>
                      <label>Status:</label>
                      <select
                        value={selectedCustomer.status}
                        onChange={(e) =>
                          setSelectedCustomer({
                            ...selectedCustomer,
                            status: e.target.value,
                          })
                        }
                        className="p-2 w-full bg-gray-200 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
                      >
                        <option value="New">New</option>
                        <option value="In-progress">In-progress</option>
                        <option value="Completed">Completed</option>
                      </select>
                    </div>
                  </div>
                ) : (
                  <p>Loading...</p>
                )}
                <div className="flex justify-end mt-4 gap-2">
                  <button
                    onClick={() => setIsModalOpen(false)}
                    className="px-4 py-2 bg-pink-500 text-white rounded"
                  >
                    Lưu thay đổi
                  </button>
                  <button
                    onClick={() => setIsModalOpen(false)}
                    className="px-4 py-2 bg-white text-pink-500 border-pink-500 border rounded"
                  >
                    Đóng
                  </button>
                </div>
              </div>
            </div>
          )}
          <div className="flex items-center justify-between bg-white pl-5">
            <div className="text-3sm">{customerData.length} results</div>
            <div className="flex items-center justify-end space-x-2 mt-4">
              <button className="p-2 rounded-full hover:bg-gray-200">
                &lt;
              </button>
              <button className="w-8 h-8 rounded-full bg-pink-500 text-white font-bold">
                1
              </button>
              <button className="p-2 rounded-full hover:bg-gray-200">
                &gt;
              </button>
            </div>
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
