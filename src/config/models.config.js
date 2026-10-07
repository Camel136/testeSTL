export const MODEL_CONFIG = {
  "STLAI_Car": {
    enabled: true,
    label: "STLAI Car",
    path: "/models/StlAI_Car.glb",

     textures: {
      A: "/textures/StlAI_Car/StlAiCar_A.png",
      B: "/textures/StlAI_Car/StlAiCar_B.png",
    },

    thumbs: {
      A: "/thumbnails/StlAI_CarA.png",
      B: "/thumbnails/StlAI_CarB.png",
    },

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

  "STLFlix_Car": {
    enabled: true,
    label: "STLFlix Car",
    path: "/models/StlFlix_Car.glb",

      textures: {
      A: "/textures/StlFlix_Car/StlFlix_Car_A.png",
      B: "/textures/StlFlix_Car/StlFlix_Car_B.png",
    },

    thumbs: {
      A: "/thumbnails/StlFlixCar.png",
      B: "/thumbnails/StlFlixCar.png",
    },

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
