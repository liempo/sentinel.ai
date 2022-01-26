import { useState } from "react"

function SettingCard(props) {
  const [threshold, setThreshold] = useState(0.1)

  return (
    <div className="flex-col col-span-full sm:col-span-3 bg-white shadow-lg rounded-sm= border border-gray-200">
      <header className="px-5 py-4 border-b border-gray-100">
        <h2 className="text-lg font-semibold text-gray-800">Settings </h2>
      </header>

      <header className="px-5 py-4">
        <div class="flex justify-between items-center">
          <h2 className="text-md font-semibold text-gray-800">Camera 1</h2>
          <div class="form-check form-switch">
            <input
              class="form-check-input appearance-none w-9 rounded-full float-left h-5 align-top text-green-600 bg-white bg-no-repeat bg-contain border-gray-700 focus:outline-none cursor-pointer shadow-sm"
              type="checkbox"
              role="switch"
              id="cameraSwitch"
              onChange={(e) => {
                props.onCameraOnChanged(e.target.checked)
              }}
            />
          </div>
        </div>
      </header>

      <header className="px-5 py-4">
        <div class="flex justify-between items-center">
          <h2 className="text-md font-semibold text-gray-800">Alarm</h2>
          <div class="form-check form-switch">
            <input
              class="form-check-input appearance-none w-9 rounded-full float-left h-5 align-top text-green-600 bg-white bg-no-repeat bg-contain border-gray-700 focus:outline-none cursor-pointer shadow-sm"
              type="checkbox"
              role="switch"
              id="recordSwitch"
            />
          </div>
        </div>
      </header>

      <header className="px-5 py-4">
        <div class="items-center">
          <div className="flex justify-between items-center">
            <h2 className="text-md font-semibold text-gray-800">Threshold:</h2>
            <h3 className="text-sm font-semibold text-red-600">{threshold}</h3>
          </div>
          <div className="items-center py-5 w-100">
            <input
              className="w-full"
              type="range"
              id="thresholdSwitch"
              min="0"
              max="1"
              step="0.1"
              value={threshold}
              onChange={(e) => {
                setThreshold(e.target.value)
                props.onThresholdOnChanged(e.target.value)
              }}
            />
          </div>
        </div>
      </header>
    </div>
  )
}

export default SettingCard
