import { useMemo, useState } from 'react';
import { Context } from './context';
import { MODEL_CONFIG } from '../../config/models.config';

export function Provider({ children }) {
  const [modelID, setModelID] = useState('STLAI_Car');
  const [textureID, setTextureID] = useState('A');
  const selectedModel = MODEL_CONFIG[modelID] ?? MODEL_CONFIG.STLAI_Car;

  const value = useMemo(() => ({
    modelID,
    setModelID,
    selectedModel,
    textureID,
    setTextureID,
  }), [modelID, selectedModel, textureID]);

  return <Context.Provider value={value}>{children}</Context.Provider>;
}
