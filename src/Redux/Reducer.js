const SET_START_COORD = "SET_START_COORD";
const SUCCESS_ANSWER = "SUCCESS_ANSWER";
const FAILED_ANSWER = "FAILED_ANSWER";
const CLEAR_DATA = "CLEAR_DATA";

const initialState = {
  cells: [
    { id: 1, coord: [1, 1] },
    { id: 2, coord: [1, 2] },
    { id: 3, coord: [1, 3] },
    { id: 4, coord: [2, 1] },
    { id: 5, coord: [2, 2] },
    { id: 6, coord: [2, 3] },
    { id: 7, coord: [3, 1] },
    { id: 8, coord: [3, 2] },
    { id: 9, coord: [3, 3] },
  ],

  startCoord: [],
  successId: "",
  failedId: "",
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_START_COORD:
      return {
        ...state,
        startCoord: action.payload,
      };
    case SUCCESS_ANSWER:
      return {
        ...state,
        successId: action.payload,
      };
    case FAILED_ANSWER:
      return {
        ...state,
        failedId: action.payload,
      };
    case CLEAR_DATA:
      return {
        ...state,
        failedId: "",
        successId: "",
        startCoord: [],
      };
    default:
      return state;
  }
};

export const setStartCoordAction = (payload) => {
  return {
    type: SET_START_COORD,
    payload,
  };
};

export const successAnswerAction = (payload) => {
  return {
    type: SUCCESS_ANSWER,
    payload,
  };
};

export const failedAnswerAction = (payload) => {
  return {
    type: FAILED_ANSWER,
    payload,
  };
};

export const clearDataAction = () => {
  return {
    type: CLEAR_DATA,
  };
};
