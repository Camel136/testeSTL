import JSZip from "jszip";
import { useContext } from "react";
import "./downloadButton.css";

import { Context } from "../context/context";
import { MODEL_CONFIG } from "../../config/models.config";

function DownloadButton() {
  const { modelID, textureID } = useContext(Context);

  const handleDownload = async () => {
    const model = MODEL_CONFIG[modelID];
    const texturePath = model.textures[textureID];
  
    try {
      const modelResponse = await fetch(model.path);

      const textureResponse = await fetch(texturePath);

      if (!modelResponse.ok || !textureResponse.ok) {
        throw new Error("Erro ao carregar os arquivos.");
      }

      const modelBlob = await modelResponse.blob();
      const textureBlob = await textureResponse.blob();

      const zip = new JSZip();

      zip.file(`${modelID}.glb`, modelBlob);

      const textureName = texturePath.split("/").pop();

      zip.folder("textures").file(
        textureName,
        textureBlob
      );

      const zipBlob = await zip.generateAsync({
        type: "blob",
      });

      const url = URL.createObjectURL(zipBlob);

      const link = document.createElement("a");

      link.href = url;
      link.download = `${modelID}.zip`;

      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);

      URL.revokeObjectURL(url);

    } catch (error) {
      console.error("Erro ao gerar ZIP:", error);
    }
  };

  return (
    <button className="button" onClick={handleDownload}>
      Download ZIP
    </button>
  );
}

export default DownloadButton;