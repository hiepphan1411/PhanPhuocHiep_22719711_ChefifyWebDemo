import { useState } from "react";

export default function ModalAdd({ setIsModalAddOpen, onUserAdded }) {
  const [newUser, setNewUser] = useState({
    name: "",
    company: "",
    orderValue: "",
    orderDate: "",
    status: "New",
    linkAvatar: "",
  });
  const [previewAvatar, setPreviewAvatar] = useState(null);
  const handleSave = async () => {
    try {
      await fetch("http://localhost:3002/users", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newUser),
      });
      alert("Thêm người dùng thành công!");
      setIsModalAddOpen(false);
      if (onUserAdded) onUserAdded();
    } catch (error) {
      console.error("Failed to add user:", error);
    }
  };

  const handleAvatarChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setPreviewAvatar(imageUrl);
      setNewUser({
        ...newUser,
        linkAvatar: imageUrl,
      });
    }
  };
  return (
    <div className="fixed inset-0 bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-6 rounded-lg w-1/3">
        <div className="flex gap-2 mb-4">
          <img className="w-7 h-7" src="../public/Download.png" alt="Add" />
          <h2 className="text-xl font-bold">Add User</h2>
        </div>

        <div className="space-y-4">
          <div>
            <label>Name:</label>
            <input
              type="text"
              value={newUser.name}
              onChange={(e) => setNewUser({ ...newUser, name: e.target.value })}
              className="p-2 w-full bg-gray-200 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>
          <div>
            <label>Company:</label>
            <input
              type="text"
              value={newUser.company}
              onChange={(e) =>
                setNewUser({ ...newUser, company: e.target.value })
              }
              className="p-2 w-full bg-gray-200 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>
          <div>
            <label>Order Value:</label>
            <input
              type="number"
              value={newUser.orderValue}
              onChange={(e) =>
                setNewUser({ ...newUser, orderValue: e.target.value })
              }
              className="p-2 w-full bg-gray-200 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>
          <div>
            <label>Order Date:</label>
            <input
              type="text"
              placeholder="dd/mm/yyyy"
              value={newUser.orderDate}
              onChange={(e) =>
                setNewUser({ ...newUser, orderDate: e.target.value })
              }
              className="p-2 w-full bg-gray-200 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>
          <div>
            <label>Status:</label>
            <select
              value={newUser.status}
              onChange={(e) =>
                setNewUser({ ...newUser, status: e.target.value })
              }
              className="p-2 w-full bg-gray-200 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
            >
              <option value="New">New</option>
              <option value="In-progress">In-progress</option>
              <option value="Completed">Completed</option>
            </select>
          </div>
          <div>
            <label>Avatar:</label>
           <div>
               <input
              type="file"
              accept="image/*"
              onChange={handleAvatarChange}
              className="p-2 w-full bg-gray-200"
            />
            {previewAvatar && (
              <img
                src={previewAvatar}
                alt="Avatar Preview"
                className="mt-2 w-24 h-24 object-cover rounded"
              />
            )}
           </div>
          </div>
        </div>

        <div className="flex justify-end gap-2 mt-6">
          <button
            className="px-4 py-2 bg-pink-500 text-white rounded hover:bg-pink-600"
            onClick={handleSave}
          >
            Thêm
          </button>
          <button
            className="px-4 py-2 bg-white border-pink-500 border text-pink-500 rounded hover:bg-pink-200"
            onClick={() => setIsModalAddOpen(false)}
          >
            Hủy bỏ
          </button>
        </div>
      </div>
    </div>
  );
}
