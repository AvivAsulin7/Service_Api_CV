import { applicantType } from "./../types/types";

export interface initialStateType {
  applicants: applicantType[];
}

export interface actionType {
  type: string;
  payload: applicantType | applicantType[];
}

export interface reducerType {
  reducer: initialStateType;
}
