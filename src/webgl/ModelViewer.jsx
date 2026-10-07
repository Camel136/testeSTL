import React, { useContext } from "react"
import { useGLTF, useTexture } from "@react-three/drei"
import { MODEL_CONFIG } from "../config/models.config"
import { Context } from "../components/context/context"

function ModelViewer(props) {
  const { modelID } = useContext(Context)
  const modelConfig = MODEL_CONFIG[modelID] ?? MODEL_CONFIG.STLAI_Car
  const part = modelConfig.parts[0]

  const { nodes } = useGLTF(modelConfig.path)
  const texture = useTexture(modelConfig.bakedTexturePathA)
  texture.flipY = false;
  // texture.colorSpace = THREE.SRGBColorSpace; //aqui foi recomdado como boa pratica 
  texture.anisotropy = 16;

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
        <meshStandardMaterial map={texture} />
      </mesh>
    </group>
  )
}

Object.values(MODEL_CONFIG).forEach((modelConfig) => {
  useGLTF.preload(modelConfig.path)
  useTexture.preload(modelConfig.bakedTexturePathA)
})

export default ModelViewer
