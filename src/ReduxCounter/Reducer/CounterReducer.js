const initialState = {
    counterValue: 0,
  };
  
  export const CounterReducer = (state = initialState, action) => {
    const { payload } = action;
    switch (action.type) {
      case "ADD":
        return Object.assign(
          {},
          {
            ...state,
            counterValue: state.counterValue + payload,
          }
        );
      case "SUBTRACT":
        return Object.assign(
          {},
          {
            ...state,
            counterValue: state.counterValue - payload,
          }
        );
      default:
        return state;
    }
  };