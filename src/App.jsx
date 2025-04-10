import { useEffect, useState } from "react";
import "./App.css";
import { BrowserRouter, NavLink, Router } from "react-router-dom";
import Home from "./pages/Home";
import Folder from "./pages/Folder";
import Teams from "./pages/Teams";
import Analytics from "./pages/Analytics";
import Messages from "./pages/Messages";
import Integrations from "./pages/Integrations";
import ModalAdd from "./components/ModalAdd";
import OverviewLoad from "./components/OverviewLoad";
import TableDataLoad from "./components/TableDataLoad";

function App() {
  const [search, setSearch] = useState("");
  const [overviewData, setOverviewData] = useState([]);
  const [customerData, setCustomerData] = useState([]);
  //Quản lý dữ liệu edit
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedCustomer, setSelectedCustomer] = useState(null);
  //Quản lý modal thêm 
  const [isModalAddOpen, setIsModalAddOpen] = useState(false);
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
  //Xử lý lưu dữ liệu
  const handleSave = async () => {
    try {
      await fetch(`http://localhost:3002/users/${selectedCustomer.id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(selectedCustomer),
      });
      alert("Cập nhật thành công!");
      setIsModalOpen(false);
      //Làm mới datatable
      fetchCustomerData();
    } catch (error) {
      console.error("Error saving customer data:", error);
    }
  };
  const fetchCustomerData = async () => {
    try {
      const response = await fetch("http://localhost:3002/users");
      const data = await response.json();
      setCustomerData(data);
    } catch (error) {
      console.error("Error fetching customer data:", error);
    }
  };
  const fetchUsers = async () => {
    try {
      const response = await fetch("http://localhost:3002/users");
      const data = await response.json();
      setCustomerData(data);
    } catch (error) {
      console.error("Error fetching customer data:", error);
    }
  }
  const handleAddUser = () => {
    setIsModalAddOpen(true);
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
          <OverviewLoad overviewData={overviewData}/>
          {/* Table */}
          <div className="flex bg-white justify-between items-center pb-5">
            <div className="flex justify-start gap-2 items-center pl-5">
              <img src="../public/File text 1.png"></img>
              <h1 className="text-2xl font-bold">Detailed report</h1>
            </div>
            <div className="flex justify-end gap-2">
              <button onClick={handleAddUser} className="border px-4 py-2 rounded-lg text-pink-500 border-pink-500 flex gap-2">
                <img src="../public/Download.png"></img>
                <h3>Import</h3>
              </button>
              <button className="border px-4 py-2 rounded-lg text-pink-500 border-pink-500 flex gap-2">
                <img src="../public/Move up.png"></img>
                <h3>Export</h3>
              </button>
            </div>
          </div>
          <TableDataLoad customerData={customerData} handleEdit={handleEdit} />
          {/*Xử lý modal thêm*/}
          {isModalAddOpen && (
            <ModalAdd setIsModalAddOpen={setIsModalAddOpen} onUserAdded={fetchUsers}/>
          )}
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
                        onChange={(e) =>
                          setSelectedCustomer({
                            ...selectedCustomer,
                            name: e.target.value,
                          })
                        }
                        className="p-2 w-full bg-gray-200 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
                      />
                    </div>
                    <div>
                      <label>Company:</label>
                      <input
                        type="text"
                        value={selectedCustomer.company}
                        onChange={(e) =>
                          setSelectedCustomer({
                            ...selectedCustomer,
                            company: e.target.value,
                          })
                        }
                        className="p-2 w-full bg-gray-200 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
                      />
                    </div>
                    <div>
                      <label>Order Value:</label>
                      <input
                        type="text"
                        value={selectedCustomer.orderValue}
                        onChange={(e) =>
                          setSelectedCustomer({
                            ...selectedCustomer,
                            orderValue: e.target.value,
                          })
                        }
                        className="p-2 w-full bg-gray-200 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
                      />
                    </div>
                    <div>
                      <label>OrderDate:</label>
                      <input
                        type="text"
                        value={selectedCustomer.orderDate}
                        onChange={(e) =>
                          setSelectedCustomer({
                            ...selectedCustomer,
                            orderDate: e.target.value,
                          })
                        }
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
                    onClick={handleSave}
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
