import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts"

const data = [
  { name: "Mon", score: 62 },
  { name: "Tue", score: 70 },
  { name: "Wed", score: 68 },
  { name: "Thu", score: 75 },
  { name: "Fri", score: 80 },
  { name: "Sat", score: 78 },
  { name: "Sun", score: 85 },
]

const AIScoreChart = () => {
  return (
    <div className="bg-white/5 border border-white/10 backdrop-blur-xl rounded-2xl p-6 mt-10">
      <h2 className="text-xl font-semibold mb-4 text-white">
        AI Risk Trend
      </h2>

      <div className="h-64">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data}>
            <XAxis dataKey="name" stroke="white" opacity={0.5} />
            <YAxis stroke="white" opacity={0.5} />
            <Tooltip />
            <Line
              type="monotone"
              dataKey="score"
              strokeWidth={3}
              dot={false}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  )
}

export default AIScoreChart