import React, { useEffect, useState } from "react"

import Header from "../partials/Header"
import WelcomeBanner from "../partials/dashboard/WelcomeBanner"
import SuspiciousActivityCard from "../partials/dashboard/SuspiciousActivityCard"
import UpTimeCard from "../partials/dashboard/UpTimeCard"
import ActiveCamerasCard from "../partials/dashboard/ActiveCamerasCard"
import CameraCard from "../partials/dashboard/CameraCard"
import SettingCard from "../partials/dashboard/SettingCard"

const format = (seconds) => {
  function pad(s) {
    return (s < 10 ? "0" : "") + s
  }
  var hours = Math.floor(seconds / (60 * 60))
  var minutes = Math.floor((seconds % (60 * 60)) / 60)
  var seconds = Math.floor(seconds % 60)
  return pad(hours) + ":" + pad(minutes) + ":" + pad(seconds)
}

function Dashboard(props) {
  const [sidebarOpen, setSidebarOpen] = useState(false)

  const [cameraOpen, setCameraOpen] = useState(false)

  const [threshold, setThreshold] = useState(0.1)

  const [activeCameras, setActiveCameras] = useState(0)

  const [uptime, setUptime] = useState("")

  const [suspiciousCount, setSuspiciousCount] = useState(0)

  const [lastSuspiciousTime, setLastSuspiciousTime] = useState(new Date())

  React.useEffect(() => {
    setTimeout(() => {
      const newTime = new Date()
      const elapsed = (newTime - props.starttime) / 1000
      console.log(props.uptime)
      setUptime(format(elapsed))

      const susElapsed = (newTime - lastSuspiciousTime) / 1000
      if (susElapsed > 30) {
        setSuspiciousCount(suspiciousCount + 1)
        setLastSuspiciousTime(newTime)
      }
    }, 1000)
  })

  return (
    <div className="flex h-screen overflow-hidden">
      {/* Content area */}
      <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
        {/*  Site header */}
        <Header
          sidebarOpen={sidebarOpen}
          setSidebarOpen={setSidebarOpen}
          setIsLoggedIn={props.setIsLoggedIn}
        />

        <main>
          <div className="px-4 sm:px-6 lg:px-8 py-8 w-5/6 max-w-9xl mx-auto">
            {/* Welcome banner */}
            <WelcomeBanner />

            {/* Cards */}
            <div className="grid grid-cols-12 gap-6">
              <SuspiciousActivityCard count={suspiciousCount} />
              <UpTimeCard uptime={uptime} />
              <ActiveCamerasCard isActiveCameraOpen={activeCameras} />
              <CameraCard isCameraOpen={cameraOpen} threshold={threshold} />
              <SettingCard
                onThresholdOnChanged={(value) => {
                  setThreshold(value)
                }}
                onCameraOnChanged={(checked) => {
                  setCameraOpen(checked)
                  if (checked) {
                    setActiveCameras(activeCameras + 1)
                  } else {
                    setActiveCameras(activeCameras - 1)
                  }
                  console.log(checked)
                }}
              />
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}

export default Dashboard
