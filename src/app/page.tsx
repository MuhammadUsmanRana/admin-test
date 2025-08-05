import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100 flex">
      {/* Sidebar */}
      <aside className="w-64 bg-white shadow-lg p-6">
        <div className="flex items-center space-x-4 mb-8">
          <img
            src="https://i.pravatar.cc/100"
            alt="avatar"
            className="w-12 h-12 rounded-full"
          />
          <div>
            <h2 className="text-lg font-semibold">Robert Del Naja</h2>
            <p className="text-sm text-gray-500">+1-541-754-3010</p>
          </div>
        </div>
        <nav className="space-y-4">
          <a href="#" className="block text-green-700 font-medium">
            My loans
          </a>
          <a href="#" className="block text-gray-600">
            Settings
          </a>
          <a href="#" className="block text-gray-600">
            Forms
          </a>
          <a href="#" className="block text-gray-600">
            FAQ
          </a>
        </nav>
        <div className="mt-20">
          <div className="bg-purple-600 text-white rounded-xl p-4 shadow-md">
            <p className="text-sm">Balance</p>
            <h3 className="text-2xl font-bold">$2302.00</h3>
            <p className="text-sm mt-2">**** 5008</p>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-8">
        {/* Loans Section */}
        <section className="mb-10">
          <h2 className="text-3xl font-bold mb-2">$6,202</h2>
          <p className="text-sm text-gray-600 mb-4 max-w-md">
            I tried to reflect that vision within dark spirit to outline the
            seriousness of intention that bank.
          </p>
          <button className="bg-green-700 text-white px-4 py-2 rounded">
            View details
          </button>
          <div className="grid grid-cols-3 gap-6 mt-6">
            {[
              { title: "Family house loan", amount: "- $120,000", icon: "🏠" },
              { title: "Eurotrip loan", amount: "- $21,489", icon: "🏛️" },
              { title: "Car loan", amount: "- $2,312", icon: "🚗" },
            ].map((loan, index) => (
              <div key={index} className="bg-gray-50 p-4 rounded shadow">
                <div className="text-3xl mb-2">{loan.icon}</div>
                <h3 className="font-semibold text-gray-700">{loan.title}</h3>
                <p className="text-red-600 font-bold">{loan.amount}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Docs Section */}
        <section className="mb-10">
          <h3 className="text-xl font-semibold mb-4">Docs</h3>
          <div className="bg-white rounded shadow overflow-x-auto">
            <table className="min-w-full text-sm">
              <thead>
                <tr className="text-left border-b border-gray-200">
                  <th className="p-4">Name</th>
                  <th className="p-4">Status</th>
                  <th className="p-4">Time</th>
                </tr>
              </thead>
              <tbody>
                {[
                  {
                    name: "ID Card",
                    status: "Verified",
                    time: "19 Mar, at 2:51 PM",
                  },
                  {
                    name: "Photo with ID Card",
                    status: "Declined",
                    time: "09 Mar, at 1:22 AM",
                  },
                  {
                    name: "Bank information",
                    status: "Waiting",
                    time: "07 Mar, at 6:44 PM",
                  },
                  {
                    name: "IBANK",
                    status: "Declined",
                    time: "08 Mar, at 4:50 PM",
                  },
                  {
                    name: "Registration",
                    status: "Verified",
                    time: "07 Mar, at 10:01 AM",
                  },
                ].map((doc, index) => (
                  <tr key={index} className="border-b">
                    <td className="p-4 flex items-center space-x-2">
                      <span className="text-gray-700">{doc.name}</span>
                    </td>
                    <td className="p-4">
                      <span
                        className={`text-xs font-semibold px-2 py-1 rounded-full 
                        ${
                          doc.status === "Verified"
                            ? "bg-green-100 text-green-800"
                            : doc.status === "Declined"
                            ? "bg-red-100 text-red-800"
                            : "bg-yellow-100 text-yellow-800"
                        }`}
                      >
                        {doc.status}
                      </span>
                    </td>
                    <td className="p-4 text-gray-500">{doc.time}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Statistics Section */}
        <section>
          <h3 className="text-xl font-semibold mb-4">Statistics</h3>
          <div className="grid grid-cols-2 gap-6">
            <div>
              <p className="text-sm text-green-600">↑ $3,430 Income</p>
              <p className="text-sm text-red-600">↓ $2,430 Expense</p>
            </div>
            <div className="flex items-end space-x-4">
              {[98, 108, 93, 123, 61].map((value, i) => (
                <div key={i} className="flex flex-col items-center">
                  <div
                    style={{ height: `${value}px` }}
                    className="w-4 bg-gray-400 rounded"
                  />
                  <span className="text-xs mt-1 text-gray-500">{value}</span>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
