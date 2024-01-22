import axios from "axios";
import { handleApiError } from './utils';

const USER_URL = '/data/users.json';

export const getUserData = async () => {
  try {
    const response = await axios.get(USER_URL);
    return response.data;
  } catch (error) {
    return handleApiError(error);
  }
};