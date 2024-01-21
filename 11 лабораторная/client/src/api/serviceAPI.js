import axios from "axios";
import { handleApiError } from "./utils";

const SERVICE_URL = "/data/services.json";

export const getServiceData = async () => {
  try {
    const response = await axios.get(SERVICE_URL);
    return response.data;
  } catch (error) {
    return handleApiError(error);
  }
};
