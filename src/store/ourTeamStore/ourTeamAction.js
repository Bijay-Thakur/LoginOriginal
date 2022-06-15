import {
  FETCHING_OUR_TEAM_CONTENT_FAILURE,
  FETCHING_OUR_TEAM_CONTENT_SUCCESS,
  OUR_TEAM_SPINNER_STARTS,
  OUR_TEAM_SPINNER_STOPS,
  START_FETCHING_OUR_TEAM_CONTENT,
  START_FETCHING_OUR_TEAM_CONTENT_WITH_SPINNER,
} from "./ourTeamActionTypes";

export const fetchingOurTeamContentStarts = () => {
  return {
    type: START_FETCHING_OUR_TEAM_CONTENT,
  };
};
export const fetchingOurTeamContentWithSpinnerStarts = () => {
  return {
    type: START_FETCHING_OUR_TEAM_CONTENT_WITH_SPINNER,
  };
};

export const fetchingOurTeamContentSuccess = (data) => {
  return {
    type: FETCHING_OUR_TEAM_CONTENT_SUCCESS,
    payload: data,
  };
};
export const fetchingOurTeamContentFailure = (error) => {
  return {
    type: FETCHING_OUR_TEAM_CONTENT_FAILURE,
    payload: error,
  };
};

export const ourTeamSpinnerStarts = () => {
  return {
    type: OUR_TEAM_SPINNER_STARTS,
  };
};
export const ourTeamSpinnerStops = () => {
  return {
    type: OUR_TEAM_SPINNER_STOPS,
  };
};
