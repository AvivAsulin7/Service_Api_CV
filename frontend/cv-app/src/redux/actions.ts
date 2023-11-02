import { ThunkDispatch } from "redux-thunk";
import { httpRequest } from "../utils/httpRequest";
import { FETCH_ALL, CREATE, DELETE } from "./constants";
import { AnyAction } from "redux";

export const getApplicants =
  () => async (dispatch: ThunkDispatch<{}, {}, AnyAction>) => {
    try {
      const res = await httpRequest({ method: "GET", url: "/" });

      dispatch({ type: FETCH_ALL, payload: res.data });
    } catch (error) {
      throw error;
    }
  };

export const AddApplicant =
  (formData: FormData) =>
  async (dispatch: ThunkDispatch<{}, {}, AnyAction>) => {
    try {
      const res = await httpRequest({
        method: "POST",
        url: "/",
        data: formData,
      });

      dispatch({ type: CREATE, payload: res.data });
    } catch (error) {
      throw error;
    }
  };

export const deleteApplicant =
  (id: number) => async (dispatch: ThunkDispatch<{}, {}, AnyAction>) => {
    try {
      const res = await httpRequest({
        method: "DELETE",
        url: `/${id}`,
      });

      dispatch({ type: DELETE, payload: res.data });
    } catch (error) {
      throw error;
    }
  };
