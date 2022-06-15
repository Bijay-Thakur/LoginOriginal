
import { server } from "../../utils/fetch";
import {
  FETCHING_OUR_COMPANY_CONTENT_FAILURE,
  FETCHING_OUR_COMPANY_CONTENT_SUCCESS,
  OUR_COMPANY_SPINNER_STARTS,
  OUR_COMPANY_SPINNER_STOPS,
  START_FETCHING_OUR_COMPANY_CONTENT,
} from "./ourCompanyActionTypes";
const INITIAL_STATE = {
  ourCompany: [],
  ourCompanySpinner: false,

  error: null,
};

export const ourCompanyReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case START_FETCHING_OUR_COMPANY_CONTENT:
      return {
        ...state,
      };

    case FETCHING_OUR_COMPANY_CONTENT_SUCCESS:
      return {
        ...state,

        ourCompany: action.payload.ourCompany.data.sort(
          (a, b) => a.rank - b.rank
        ),
      };
    case FETCHING_OUR_COMPANY_CONTENT_FAILURE:
      return {
        ...state,
        error: action.payload,
      };
    case OUR_COMPANY_SPINNER_STOPS:
      return {
        ...state,
        ourCompanySpinner: false,
      };
    case OUR_COMPANY_SPINNER_STARTS:
      return {
        ...state,
        ourCompanySpinner: true,
      };

    default:
      return state;
  }
};
