import { actionType } from "./types";
import { FETCH_ALL, CREATE, DELETE } from "./constants";
import { applicantType } from "../types/types";

const applicants: applicantType[] = [];

export default (state = applicants, action: actionType) => {
  switch (action.type) {
    case FETCH_ALL:
      return action.payload;

    case CREATE:
      return [...state, action.payload];
    case DELETE:
      return state.filter((applicant) => applicant !== action.payload);
    default:
      return state;
  }
};
