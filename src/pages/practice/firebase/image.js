import { ref, uploadBytes } from "firebase/storage";
import { useState } from "react";
import { storage } from "../../../config/firebase-config";

function Image() {
  const [fileUpload, setFileUpload] = useState(null);

  const uploadFile = async () => {
    if (!fileUpload) return;
    const fileFolderRef = ref(storage, `folder1/${fileUpload.name}`);
    try {
      await uploadBytes(fileFolderRef, fileUpload);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <input type="file" onChange={(e) => setFileUpload(e.target.files[0])} />
      <button
        onClick={() => {
          uploadFile();
        }}
      >
        파일 업로드
      </button>
    </>
  );
}

export default Image;
