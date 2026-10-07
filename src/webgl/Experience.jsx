import React from "react"
import { OrbitControls, Stage } from "@react-three/drei"
import ModelViewer from "./ModelViewer"

const Experience = () => {

    const ANGLE = {
    DEG_30: Math.PI / 6,
    DEG_75: Math.PI / 2.4,
  };

  return (
    <>
      <color attach="background" args={["#030303"]} />
      <OrbitControls 
      makeDefault 
      minPolarAngle={ANGLE.DEG_30}
      maxPolarAngle={ANGLE.DEG_75}
       />
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
