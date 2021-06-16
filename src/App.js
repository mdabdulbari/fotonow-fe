import { useState } from "react";

import "./App.css";
import { uploadImage } from "./services/metadata";

function App() {
  const [fileUploadStatus, setFileUploadStatus] = useState("");

  const onFileUpload = async (e) => {
    const file = e.target.files[0];
    setFileUploadStatus("");
    try {
      await uploadImage(file);
      setFileUploadStatus("Success");
    } catch (e) {
      setFileUploadStatus("Error");
    }
  };

  return (
    <div className="App">
      <input
        type="file"
        accept="image/png, image/jpg, image/jpeg"
        onChange={onFileUpload}
      />
      <div>{fileUploadStatus}</div>
    </div>
  );
}

export default App;
