import React, { useContext } from "react"
import "./ModelSelected.css"
import { Context } from "../context/context";

const models = [
  { id: "STLAI_Car", label: "STLAI Car", thumbnail: "/thumbnails/StlAiCar.png" },
  { id: "STLFlix_Car", label: "STLFlix Car", thumbnail: "/thumbnails/StlFlixCar.png" },
]

const ModelSelected = () => {
  const { modelID, setModelID } = useContext(Context);

  return (
    <aside className="model-selected">
      <h2 className="model-selected__title">Modelos</h2>

      <div className="model-selected__list">
        {models.map((model) => {
          const isSelected = modelID === model.id

          return (
            <button
              key={model.id}
              type="button"
              onClick={() => setModelID(model.id)}
              className={`model-selected__item ${isSelected ? "is-selected" : ""}`}
              aria-pressed={isSelected}
            >
              <img
                src={model.thumbnail}
                alt={model.label}
                className="model-selected__thumb"
              />
              <span className="model-selected__label">{model.label}</span>
            </button>
          )
        })}
      </div>
    </aside>
  )
}

export default ModelSelected
