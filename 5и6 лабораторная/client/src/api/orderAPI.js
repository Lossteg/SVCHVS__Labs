import axios from "axios";
import { handleApiError } from "./utils";

const ORDER_URL = "/data/orders.json";

export const getOrder = async () => {
  try {
    const response = await axios.get(ORDER_URL);
    return response.data;
  } catch (error) {
    return handleApiError(error);
  }
};

export const postOrder = async (orderData) => {
  try {
    const response = await axios.post(ORDER_URL, orderData);
    return response.data;
  } catch (error) {
    return handleApiError(error);
  }
};