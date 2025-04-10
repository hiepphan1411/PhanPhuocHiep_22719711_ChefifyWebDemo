export default function OverviewLoad({overviewData}) {
  return (
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
                        item.change >= 0 ? "text-green-500" : "text-red-500"
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
                        item.change >= 0 ? "text-green-500" : "text-red-500"
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
                        item.change >= 0 ? "text-green-500" : "text-red-500"
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
  );
}
