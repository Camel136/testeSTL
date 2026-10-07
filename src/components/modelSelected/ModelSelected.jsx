import React, { useContext } from "react"
import "./ModelSelected.css"
import { Context } from "../context/context";
import { MODEL_CONFIG } from "../../config/models.config"

const ModelSelected = () => {
  const { modelID, setModelID } = useContext(Context);

  return (
    <aside className="model-selected">
      <h2 className="model-selected__title">Modelos</h2>

      <div className="model-selected__list">
        {Object.entries(MODEL_CONFIG).map(([id, model]) => {

          const isSelected = modelID === id

          return (
            <button
              key={id}
              type="button"
              onClick={() => setModelID(id)}
              className={`model-selected__item ${isSelected ? "is-selected" : ""}`}
              aria-pressed={isSelected}
            >
              <img
                src={model.thumbModel}
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
