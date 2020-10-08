import { FETCHMATCH } from "../actions/actions";

const initialState = {
  isLoading: false,
  error: "",
  players: [],
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCHMATCH:
      return {
        ...state,
        isLoading: true,
      };
    default:
      return state;
  }
};
