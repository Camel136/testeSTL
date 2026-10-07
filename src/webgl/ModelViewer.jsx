import React, { useContext } from "react"
import { useGLTF, useTexture } from "@react-three/drei"
import { MODEL_CONFIG } from "../config/models.config"
import { Context } from "../components/context/context"

function ModelViewer(props) {
  const { selectedModel, textureID } = useContext(Context)
  const part = selectedModel.parts[0]
  const { nodes } = useGLTF(selectedModel.path)
  const textures = useTexture(selectedModel.textures[textureID])
  const alphaTexture = useTexture(selectedModel.alphaTexture)

  textures.flipY = false;
  textures.anisotropy = 16;
  alphaTexture.flipY = false;
  alphaTexture.anisotropy = 16;

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
        <meshStandardMaterial
          map={textures}
          alphaMap={alphaTexture}
          transparent
        />
      </mesh>
    </group>
  )
}

Object.values(MODEL_CONFIG).forEach((modelConfig) => {
  useGLTF.preload(modelConfig.path)
  Object.values(modelConfig.textures).forEach((texturePath) => {
    useTexture.preload(texturePath)
  })
  useTexture.preload(modelConfig.alphaTexture)
})

export default ModelViewer
