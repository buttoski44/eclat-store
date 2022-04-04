const INITIAL_STATE = {
  Data: null,
};

const dataReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "SET_SHOP_DATA":
      return {
        ...state,
        Data: action.payload,
      };

    default:
      return state;
  }
};

export default dataReducer;
