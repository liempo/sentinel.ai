import PoseNet from "react-posenet"
import { useState } from "react"

function CameraCard() {
  return (
    <div className="flex flex-col col-span-full sm:col-span-9 bg-white shadow-lg rounded-sm border border-gray-200">
      <header className="px-5 py-4 border-b border-gray-100">
        <h2 className="text-lg font-semibold text-gray-800">Camera 1: </h2>
      </header>
      <div className="h-3/4 p-8">
        <PoseNet className="m-auto" />
      </div>
    </div>
  )
}

export default CameraCard
