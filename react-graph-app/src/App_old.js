import { PieChart } from "react-minimal-pie-chart"

function App() {
  const dataMock = [
    { title: "One", value: 10, color: "#E38627" },
    { title: "Two", value: 15, color: "#C13C37" },
    { title: "Three", value: 20, color: "#6A2135" },
  ]

  return (
    <div className="App">
      <PieChart
        data={dataMock}
        label={({ x, y, dx, dy, dataEntry }) => (
          <text
            x={x}
            y={y}
            dx={dx}
            dy={dy}
            dominant-baseline="central"
            text-anchor="middle"
            style={{
              fontSize: "1px",
              fontFamily: "sans-serif",
            }}
          >
            {Math.round(dataEntry.percentage) + "%"}
          </text>
        )}
        radius={PieChart.defaultProps.radius - 45}
        lengthAngle={-360}
        animate
      />
      ;
    </div>
  )
}

export default App
