import { defaultHeaders } from "./url.js";

const apiResponse = async (url, res) => {
  const response = await fetch(url, { headers: defaultHeaders });

  if (!response.ok) {
    throw new Error("Network response was not ok");
  }

  const data = await response.json();
  res.json(data);
};

export default apiResponse;
