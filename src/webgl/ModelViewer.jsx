import React, { useContext,useRef } from "react"
import { useGLTF, useTexture } from "@react-three/drei"
import { useFrame } from "@react-three/fiber";
import { MODEL_CONFIG } from "../config/models.config"
import { Context } from "../components/context/context"

function ModelViewer(props) {
  const { selectedModel, textureID, rotationEnabled } = useContext(Context)
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

  const modelRef = useRef();

  useFrame((_, delta) => {
    if (rotationEnabled) {
      modelRef.current.rotation.y += delta * 0.5;
    }
  });

  return (
    <group {...props}  ref={modelRef} dispose={null}>
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
          metalness={0.5}
          roughness={0.1}
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
