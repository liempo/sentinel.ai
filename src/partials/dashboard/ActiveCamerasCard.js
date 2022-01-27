import React, { useState } from "react"
function ActiveCamerasCard(props) {
  return (
    <div className="flex flex-col col-span-full sm:col-span-6 xl:col-span-4 bg-white shadow-lg rounded-sm border border-gray-200">
      <div className="p-5">
        <header className="flex justify-between items-start mb-2"></header>
        <h2 className="text-lg font-semibold text-gray-600 mb-2">
          Active Cameras:{" "}
        </h2>
        <div className="flex items-start text-3xl font-bold text-red-600 mr-2">
          {props.isActiveCameraOpen}
        </div>
      </div>
    </div>
  )
}

export default ActiveCamerasCard
