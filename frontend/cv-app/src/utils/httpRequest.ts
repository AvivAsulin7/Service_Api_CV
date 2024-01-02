import axios, { AxiosRequestConfig, AxiosResponse } from "axios";
import { CustomErrorType } from "../types/types";
import { GENERAL_ERROR_MESSAGE } from "../constants/constant";

const BASE_URL = "http://localhost:5000";

type HttpRequestProps = AxiosRequestConfig & {
  params?: {
    id: string;
  };
  data?: any;
};

export const httpRequest = async ({
  params,
  method,
  url,
  data,
  ...config
}: HttpRequestProps): Promise<AxiosResponse> => {
  try {
    const response = await axios({
      method,
      url: `${BASE_URL}${url}`,
      params,
      data,
      ...config,
    });

    return response.data;
  } catch (error) {
    const customError = error as CustomErrorType;
    if (
      customError.response &&
      customError.response.data &&
      customError.response.data.message
    ) {
      throw customError.response.data.message;
    }
    throw GENERAL_ERROR_MESSAGE;
  }
};
