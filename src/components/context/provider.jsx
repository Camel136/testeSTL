import { useRef, useState } from 'react';
import { Context } from './context';

export function Provider({ children }) {
  const [modelID, setModelID] = useState(null);

  const value = {
    modelID,
    setModelID,
  };

  return <Context.Provider value={value}>{children}</Context.Provider>;
}
