import React, { useContext } from "react"
import "./ColorSelected.css"
import { Context } from "../context/context";

const ColorSelected = () => {
  const { selectedModel, textureID, setTextureID } = useContext(Context);

  return (
    <aside className="model-selected">
      <h2 className="model-selected__title">Personalizar</h2>
      <span>Cor</span>

      <div className="model-selected__list">
        {Object.entries(selectedModel.thumbs).map(([id, thumb]) => {
          const isSelected = textureID === id
          
          return (
            <button
              key={id}
              type="button"
              onClick={() => setTextureID(id)}
              className={`model-selected__item ${isSelected ? "is-selected" : ""}`}
              aria-pressed={isSelected}
            >
              <img
                src={thumb}
                alt={thumb}
                className="model-selected__thumb"
              />
              <span className="model-selected__label">{`Color ${id}`}</span>
            </button>
          )
        })}
      </div>
    </aside>
  )
}

export default ColorSelected
