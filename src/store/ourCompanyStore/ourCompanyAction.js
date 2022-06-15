import {
  FETCHING_OUR_COMPANY_CONTENT_FAILURE,
  FETCHING_OUR_COMPANY_CONTENT_SUCCESS,
  OUR_COMPANY_SPINNER_STARTS,
  OUR_COMPANY_SPINNER_STOPS,
  START_FETCHING_OUR_COMPANY_CONTENT,
  START_FETCHING_OUR_COMPANY_CONTENT_WITH_SPINNER,
} from "./ourCompanyActionTypes";

export const fetchingOurCompanyContentStarts = () => {
  return {
    type: START_FETCHING_OUR_COMPANY_CONTENT,
  };
};
export const fetchingOurCompanyContentWithSpinnerStarts = () => {
  return {
    type: START_FETCHING_OUR_COMPANY_CONTENT_WITH_SPINNER,
  };
};

export const fetchingOurCompanyContentSuccess = (data) => {
  return {
    type: FETCHING_OUR_COMPANY_CONTENT_SUCCESS,
    payload: data,
  };
};
export const fetchingOurCompanyContentFailure = (error) => {
  return {
    type: FETCHING_OUR_COMPANY_CONTENT_FAILURE,
    payload: error,
  };
};

export const ourCompanySpinnerStarts = () => {
  return {
    type: OUR_COMPANY_SPINNER_STARTS,
  };
};
export const ourCompanySpinnerStops = () => {
  return {
    type: OUR_COMPANY_SPINNER_STOPS,
  };
};
