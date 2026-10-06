export const MODEL_CONFIG = {
  "STLAI Car": {
    enabled: true,
    label: "STLAI Car",
    path: "/models/StlAI_Car.glb",
    parts: [
      {
        nodeId: "StlAI_Car", // mesh name inside the .glb (use gltfjsx or https://gltf.pmnd.rs to inspect)
        label: "Cor",
        position: [0, 0, 0],
        rotation: [0, 0, 0],
        scale: 1,
      },
    ],
  },

  "STLFlix Car": {
    enabled: true,
    label: "STLFlix Car",
    path: "/models/StlFlix_Car.glb",
    parts: [
      {
        nodeId: "StlFlix_Car", 
        label: "Cor",
        position: [0, 0, 0],
        rotation: [0, 0, 0],
        scale: 1,
      },
    ],
  },

}
