export default function TableDataLoad({customerData, handleEdit}) {
    return (
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
    )
}