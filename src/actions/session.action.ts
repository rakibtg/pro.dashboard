import { getRequest } from "../utils/request.util";
import { orderApiUrl, sessionApiUrl } from "../utils/constants.util";

export const getOrders = async () => {
  return getRequest(orderApiUrl);
};

export const getSessions = async () => {
  return getRequest(sessionApiUrl);
};
