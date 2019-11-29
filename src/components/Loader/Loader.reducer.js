import { ACTION_TYPES } from './Loader.action';

const initialState = {
  isLoading: false,
};

const LoaderReducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTION_TYPES.TOGGLE:
      return { ...state, isLoading: action.val };
    default:
      return state;
  }
};

export default LoaderReducer;
