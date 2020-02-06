const reducer = (state = [], action) => {
  // console.log('action: ', action);

  // const {
  //   payload: { id, label, completed }
  // } = action;

  // console.log(action.payload.id);

  // console.log('action::', action);
  // console.log('action.paylod::', action.payload);
  // debugger;
  switch (action.type) {
    case 'ADD_TODO':
      return [
        ...state,
        {
          id: action.payload.id,
          label: action.payload.label,
          completed: action.payload.completed
        }
      ];
    default:
      return state;
  }
};

export default reducer;
