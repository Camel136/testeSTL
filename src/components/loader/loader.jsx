import { Html, useProgress } from '@react-three/drei';

export default function Loader() {
  const { active } = useProgress();

  if (!active) return null;

  return (
    <Html center>
      <div className="loader">
        <div className="loader-bar"></div>
        <div  style={{ color: "#fff" }} className="loader-text">Carregando... </div>
      </div>
    </Html>
  );
}
