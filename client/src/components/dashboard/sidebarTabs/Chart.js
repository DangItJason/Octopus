import React from 'react'
import { Chart } from 'react-charts'
// import SyntaxHighlighter from 'components/SyntaxHighlighter'
 
function RevenueChart() {
    const data = React.useMemo(
        () => [
          {
            Label: 'Uber',
            data: [["Jan", 1], ["Feb", 2], ["Mar", 4], ["Apr", 2], ["May", 7], ["Jun", 6], ["Jul", 1], ["Aug", 2], ["Sep", 4], ["Oct", 2], ["Nov", 7], ["Dec", 6]]
          },
          {
            label: 'PostMates',
            data: [["Jan", 3], ["Feb", 1], ["Mar", 5], ["Apr", 6], ["May", 4], ["Jun", 9], ["Jul", 3], ["Aug", 1], ["Sep", 5], ["Oct", 6], ["Nov", 4], ["Dec", 9]]
          }
        ],
        []
      )
 
  const axes = React.useMemo(
    () => [
      { primary: true, type: 'ordinal', position: 'bottom',  },
      { type: 'linear', position: 'left', stacked: false, format: d => `$${d}k` }
    ],
    []
  )
 
  return (
    // A react-chart hyper-responsively and continuously fills the available
    // space of its parent element automatically
    <div
      style={{
        width: '1200px',
        height: '700px'
      }}
    >
      <Chart data={data} axes={axes} getLabel={"Label A"} />
    </div>
  )
}

export default RevenueChart;