import {
  ADD_BUILDING,
  EDIT_BUILDING,
  DELETE_BUILDING,
  SET_BUILDINGS,
} from "./actions";

export const buildings = (state = [], action) => {
  switch (action.type) {
    case SET_BUILDINGS:
      return action.payload;
    case ADD_BUILDING:
      const building = action.payload;
      return [...state, building];
    case EDIT_BUILDING:
      const editID = action.payload.id;
      const index = state.findIndex((e) => e.id === editID);
      const newState = [...state];
      newState[index] = action.payload;
      return newState;
    case DELETE_BUILDING:
      const deleteID = action.payload;
      return state.filter((e) => e.id !== deleteID);
    default:
      return state;
  }
};
