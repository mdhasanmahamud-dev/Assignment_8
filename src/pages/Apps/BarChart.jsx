import {
  BarChart as ReBarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";

const BarChart = ({ app }) => {
  const data = app.ratings;

  return (
    <div>
      <div className="bg-white p-6 rounded-lg shadow-md mt-6">
        <h2 className="text-lg font-semibold text-gray-800 mb-4">
          Ratings Overview
        </h2>

        <ResponsiveContainer width="100%" height={300}>
          <ReBarChart
            data={data}
            layout="vertical"
            margin={{ top: 20, right: 30, left: 40, bottom: 5 }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis type="number" />
            <YAxis
              type="category"
              dataKey="name"
              tick={{ fontSize: 12, fill: "#4B5563" }}
            />
            <Tooltip />
            <Bar dataKey="count" fill="#34d399" radius={[0, 5, 5, 0]} />
          </ReBarChart>
        </ResponsiveContainer>
      </div>

      <div className="bg-gray-50 p-4 rounded-sm shadow-inner border border-gray-200 my-5">
        <h3 className="text-md font-semibold text-gray-700 mb-2">
          App Description
        </h3>
        <p className="text-gray-600 text-sm leading-relaxed">
          {app.description}
        </p>
      </div>
    </div>
  );
};

export default BarChart;
