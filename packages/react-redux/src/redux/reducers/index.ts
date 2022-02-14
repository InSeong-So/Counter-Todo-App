const initialState = {
  count: 0,
};

export const INCREMENT_REQUEST = 'INCREMENT_REQUEST';
export const INCREMENT_SUCCESS = 'INCREMENT_SUCCESS';
export const INCREMENT_FAILURE = 'INCREMENT_FAILURE';

export const DECREMENT_REQUEST = 'DECREMENT_REQUEST';
export const DECREMENT_SUCCESS = 'DECREMENT_SUCCESS';
export const DECREMENT_FAILURE = 'DECREMENT_FAILURE';

export const RESET_REQUEST = 'RESET_REQUEST';
export const RESET_SUCCESS = 'RESET_SUCCESS';
export const RESET_FAILURE = 'RESET_FAILURE';

export const increment = () => ({ type: INCREMENT_SUCCESS });
export const decrement = () => ({ type: DECREMENT_SUCCESS });
export const reset = () => ({ type: RESET_SUCCESS });

export const incrementAsync = () => ({ type: INCREMENT_REQUEST });
export const decrementAsync = () => ({ type: DECREMENT_REQUEST });
export const resetAsync = () => ({ type: RESET_REQUEST });

const reducer = (state = initialState, action = { type: '' }) => {
  switch (action.type) {
    case INCREMENT_SUCCESS:
      return {
        ...state,
        count: state.count + 1,
      };
    case DECREMENT_SUCCESS:
      return {
        ...state,
        count: state.count - 1,
      };
    case RESET_SUCCESS:
      return {
        ...state,
        count: 0,
      };
    default:
      return state;
  }
};

export default reducer;
