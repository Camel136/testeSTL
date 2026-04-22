export const MODEL_CONFIG = {
  "STLFlix Car": {
    enabled: true,
    label: "STLFlix Car",
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

  // TODO: Add a second 3D model following the same pattern above.
  // Each model part should also include:
  // - a default texture identifier
  // - an alpha/opacity map path
  // - a list of texture variants, each with a display name, a unique value key,
  //   the texture file path, and a thumbnail image path
  // The config structure should make it easy to add new models in the future.
}
