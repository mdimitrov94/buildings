export const SET_BUILDINGS = "Get Buildings";
export const ADD_BUILDING = "Add Building";
export const EDIT_BUILDING = "Edit Building";
export const DELETE_BUILDING = "Delete building";

export const actions = {
  setBuildings: (payload) => {
    return { type: SET_BUILDINGS, payload };
  },
  addBuilding: (payload) => {
    return { type: ADD_BUILDING, payload };
  },
  editBuilding: (payload) => {
    return { type: EDIT_BUILDING, payload };
  },
  deleteBuilding: (payload) => {
    return { type: DELETE_BUILDING, payload };
  },
};
