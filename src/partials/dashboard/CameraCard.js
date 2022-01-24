import React from "react"

// Import utilities
import { tailwindConfig } from "../../utils/Utils"

function CameraCard() {
  return (
    <div className="flex flex-col col-span-full sm:col-span-9 bg-white shadow-lg rounded-sm border border-gray-200">
      <header className="px-5 py-4 border-b border-gray-100">
        <h2 className="text-lg font-semibold text-gray-800">Camera 1: </h2>
      </header>
      {/* Chart built with Chart.js 3 */}
      {/* Change the height attribute to adjust the chart height */}
      {/* <BarChart data={chartData} width={595} height={248} /> */}
    </div>
  )
}

export default CameraCard
