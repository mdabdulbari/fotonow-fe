import { BACKEND_URL } from "../apiConfig";

export const uploadImage = async (file) => {
  const formData = new FormData();
  formData.append("file", file);

  const url = BACKEND_URL + "/image/metaData";
  const response = await fetch(url, {
    method: "POST",
    body: formData,
  });
  if (response.status === 201) {
    return true;
  } else {
    throw new Error("Failed to upload");
  }
};
