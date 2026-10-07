import React, { Suspense } from "react"
import { Canvas } from "@react-three/fiber"
import Navbar from "./layout/Navbar"
import Experience from "./webgl/Experience"
import ModelSelected from "./components/modelSelected/ModelSelected"
import ColorSelected from "./components/colorSelected/ColorlSelected"
import DownloadButton from "./components/DownloadButton/downloadButton"
import Loader from "./components/loader/loader"
import RotationButton from "./components/rorationButton/rotationButton"

function App() {
  return (
    <div className="h-screen flex flex-col overflow-hidden">
      <Navbar />

      <div className="flex flex-1 min-h-0">
     <ModelSelected />

        <div className="relative flex-1 bg-[#444444]">
          <Canvas
            dpr={[1, 2]}
            camera={{ position: [0, 2, 6], fov: 50 }}
            style={{ width: "100%", height: "100%" }}
          >
          <ambientLight intensity={1.5} color="#cf5e13" /> 
            <Loader />
            <Suspense fallback={null}>
              <Experience />
            </Suspense>
          </Canvas>

      <DownloadButton />
      <RotationButton/>
        </div>

        <ColorSelected />
      </div>
    </div>
  )
}

export default App
