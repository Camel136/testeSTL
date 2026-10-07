import React, { Suspense } from "react"
import { Canvas } from "@react-three/fiber"
import Navbar from "./layout/Navbar"
import Experience from "./webgl/Experience"
import ModelSelected from "./components/modelSelected/ModelSelected"
// import ColorSelected from "./components/colorSelected/colorSelected"

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
            <Suspense fallback={null}>
              <Experience />
            </Suspense>
          </Canvas>

          {/* TODO: Add Download button */}
        </div>

        {/* <ColorSelected /> */}
      </div>
    </div>
  )
}

export default App
