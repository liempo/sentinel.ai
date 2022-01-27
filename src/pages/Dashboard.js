import React, { useEffect, useState } from "react"

import Header from "../partials/Header"
import WelcomeBanner from "../partials/dashboard/WelcomeBanner"
import SuspiciousActivityCard from "../partials/dashboard/SuspiciousActivityCard"
import UpTimeCard from "../partials/dashboard/UpTimeCard"
import ActiveCamerasCard from "../partials/dashboard/ActiveCamerasCard"
import CameraCard from "../partials/dashboard/CameraCard"
import SettingCard from "../partials/dashboard/SettingCard"

function Dashboard(props) {
  const [sidebarOpen, setSidebarOpen] = useState(false)

  const [cameraOpen, setCameraOpen] = useState(false)

  const [threshold, setThreshold] = useState(0.1)

  const [activeCameras, setActiveCameras] = useState(0)

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
              <SuspiciousActivityCard />
              <UpTimeCard starttime={props.starttime} />
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
