import { useState } from "react"

function SettingCard() {
  const [threshold, setThreshold] = useState(0)
  return (
    <div className="flex-col col-span-full sm:col-span-6 bg-white shadow-lg rounded-sm= border border-gray-200">
      <header className="px-5 py-4 border-b border-gray-100">
        <h2 className="text-lg font-semibold text-gray-800">Settings </h2>
      </header>

      <header className="px-5 py-4">
        <div class="flex justify-between items-center">
          <h2 className="text-md font-semibold text-gray-800">Camera</h2>
          <div class="form-check form-switch">
            <input
              class="form-check-input appearance-none w-9 -ml-10 rounded-full float-left h-5 align-top text-green-600 bg-white bg-no-repeat bg-contain border-gray-700 focus:outline-none cursor-pointer shadow-sm"
              type="checkbox"
              role="switch"
              id="cameraSwitch"
            />
          </div>
        </div>
      </header>

      <header className="px-5 py-4">
        <div class="flex justify-between items-center">
          <h2 className="text-md font-semibold text-gray-800">Record</h2>
          <div class="form-check form-switch">
            <input
              class="form-check-input appearance-none w-9 -ml-10 rounded-full float-left h-5 align-top text-green-600 bg-white bg-no-repeat bg-contain border-gray-700 focus:outline-none cursor-pointer shadow-sm"
              type="checkbox"
              role="switch"
              id="recordSwitch"
            />
          </div>
        </div>
      </header>

      <header className="px-5 py-4">
        <div class="items-center">
          <h2 className="text-md font-semibold text-gray-800">Threshold</h2>
          <div class="flex justify-between items-center p-5 w-100">
            <input
              className="w-full bg-teal-900"
              type="range"
              role="switch"
              id="thresholdSwitch"
              min="0"
              max="100"
              step="0"
              value={threshold}
              onChange={(e) => {
                setThreshold(e.target.value)
              }}
            />
          </div>
        </div>
      </header>
    </div>
  )
}

export default SettingCard
