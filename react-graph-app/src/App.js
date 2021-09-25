import { useState } from "react"
import { PieChart } from "react-minimal-pie-chart"
// import { FaChevronDown, FaChevronUp } from "react-icons/fa"
const AgeGraphic = () => {
  const [show, setShow] = useState(true)

  const data = []
  const dataMock = [
    { title: "One", value: 10, color: "#E38627" },
    { title: "Two", value: 15, color: "#C13C37" },
    { title: "Three", value: 20, color: "#6A2135" },
  ]

  dataMock.map((obj) => {
    var randomColor = "#000000".replace(/0/g, function () {
      return (~~(Math.random() * 16)).toString(16)
    })

    let insert = {
      color: randomColor,
      title: obj.title,
      value: obj.value,
    }

    data.push(insert)
  })

  const renderRows = data.map((obj) => {
    return (
      <tr key={`group-${obj.key}`}>
        <td>{obj.title}</td>
        <td>{obj.value}</td>
        <td>{Math.round(obj.value) + "%"}</td>
      </tr>
    )
  })

  return (
    <div onClick={(e) => setShow(!show)}>
      <div className="inline-container">
        <h4>Age Demographic</h4>
        {show}
      </div>
      <>
        <div className="chart-container">
          <PieChart
            animate
            animationDuration={500}
            animationEasing="ease-out"
            center={[50, 50]}
            data={data}
            lengthAngle={360}
            lineWidth={15}
            paddingAngle={0}
            radius={50}
            rounded
            startAngle={0}
            viewBoxSize={[100, 100]}
            label={(data) => data.dataEntry.title}
            labelPosition={65}
            labelStyle={{
              fontSize: "10px",
              fontColor: "FFFFFA",
              fontWeight: "800",
            }}
          />
        </div>

        <table>
          <thead>
            <tr>
              <th>Age Group</th>
              <th>Votes</th>
              <th>Percentage</th>
            </tr>
          </thead>
          <tbody>{renderRows}</tbody>
        </table>
      </>

      <style jsx>{`
        .chart-container {
          height: 200px;
          margin-left: auto;
          margin-right: auto;
          width: 200px;
        }

        .inline-container {
          align-items: center;
          display: flex;
          flex-direction: row;
          justify-content: space-between;
          width: 100%;
        }

        table {
          margin-left: auto;
          margin-right: auto;
          margin-top: 3em;
          table-layout: fixed;
          width: 90%;
        }
        table tr th {
          text-align: left;
          background: gray;
          color: white;
        }
      `}</style>
    </div>
  )
}

export default AgeGraphic
