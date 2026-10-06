import React from "react"
import { useGLTF } from "@react-three/drei"
import { MODEL_CONFIG } from "../config/models.config"

const modelConfig = MODEL_CONFIG["STLAI Car"]
const part = modelConfig.parts[0]

useGLTF.preload(modelConfig.path)

function ModelViewer(props) {
  const { nodes } = useGLTF(modelConfig.path)
  console.log('...........', nodes);

  const node = nodes[part.nodeId]
  if (!node) return null

  return (
    <group {...props} dispose={null}>
      <mesh
        geometry={node.geometry}
        position={part.position}
        rotation={part.rotation}
        scale={part.scale}
      >
        <meshStandardMaterial color="#cccccc" />
      </mesh>
    </group>
  )
}

export default ModelViewer
