const initialState = {
  tasks: [0]
};

const taskReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'ADDTOCART':
        return {
          ...state,
          tasks: [...state.tasks, action.payload]
        };
      case 'REMOVE':
        return {
          ...state,
          tasks: state.tasks.filter(task => task.id !== action.payload)
        };
        case 'INCREMENT':
          return state + 1
        case "DECREMENT":
          return state - 1
        default:
          return state;
    }
  };
  
  export default taskReducer;