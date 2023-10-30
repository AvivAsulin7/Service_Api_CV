export interface applicantType {
  firstName: string;
  lastName: string;
  email: string;
  linkedinUrl: string;
  phone: string;
  id: string;
  rawData: string;
  _id: number;
}

export interface CustomErrorType {
  response?: {
    data?: {
      message?: string;
    };
  };
}
