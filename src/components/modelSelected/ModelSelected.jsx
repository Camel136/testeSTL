import React, { useState } from "react"
import "./ModelSelected.css"

const models = [
  { id: "stlai-car", label: "STLAI Car", thumbnail: "/thumbnails/StlAiCar.png" },
  { id: "stlflix-car", label: "STLFlix Car", thumbnail: "/thumbnails/StlFlixCar.png" },
]

const ModelSelected = () => {
  const [selectedModelId, setSelectedModelId] = useState(models[0].id)

  return (
    <aside className="model-selected">
      <h2 className="model-selected__title">Modelos</h2>

      <div className="model-selected__list">
        {models.map((model) => {
          const isSelected = selectedModelId === model.id

          return (
            <button
              key={model.id}
              type="button"
              onClick={() => setSelectedModelId(model.id)}
              className={`model-selected__item ${isSelected ? "is-selected" : ""}`}
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
