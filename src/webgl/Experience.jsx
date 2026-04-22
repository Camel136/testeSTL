import React from "react"
import { OrbitControls, Stage } from "@react-three/drei"
import ModelViewer from "./ModelViewer"

const Experience = () => {
  return (
    <>
      <color attach="background" args={["#444444"]} />
      <OrbitControls makeDefault />
      <Stage
        environment="sunset"
        intensity={0.6}
        shadows="contact"
        adjustCamera
      >
        <ModelViewer />
      </Stage>
    </>
  )
}

export default Experience
