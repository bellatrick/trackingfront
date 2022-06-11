import React from "react";
const ShipmentTable = ({ List, loading }) => {
  const formatDate = (str) => {
    const date = new Date(str);
    return date.toString("YYYY-MM-dd");
  };
  if (loading) {
    return (
      <div
        data-testid="spin"
        className="mt-32 flex items-center justify-center"
      >
        Loading
      </div>
    );
  } else if (List <= 0) {
    return (
      <div className="flex justify-center gap-4 items-center mx-auto px-8 sm:px-16 py-8 mt-16 rounded-md">
        <p className="text-gray-600 font-semibold text-sm sm:text-lg text-center">
          No user has logged in yet
        </p>
      </div>
    );
  } else
    return (
      <div className="flex flex-col">
        <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
            <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th
                      scope="col"
                      className="px-6 py-3  text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      S/N
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3  text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Name
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3  text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Tracking ID
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3  text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Date
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {List &&
                    List.map((interest, i) => (
                      <tr
                        key={i}
                        className={i % 2 === 0 ? "bg-white" : "bg-gray-100"}
                      >
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                          {i + 1}
                        </td>
                        <td className="px-6 py-4 capitalize whitespace-nowrap text-sm text-gray-600">
                          {interest?.name}
                        </td>
                        <td className="px-6 py-4 capitalize whitespace-nowrap text-sm text-gray-600">
                          {interest.tracking_id}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                          {formatDate(interest?.date)}
                        </td>
                      </tr>
                    ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    );
};

export default ShipmentTable;
