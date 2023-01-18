import { types } from "../types/types";

/*
Cuando esta auth

state = {
    uid: 'sdfsfsf',
    name: 'Ale'
}
*/
export const authReducer = (state = {}, action) => {
  switch (action.type) {
    case types.login:
      return {
        uid: action.payload.uid,
        name: action.payload.displayName,
      };

    case types.logout:
      return {};

    default:
      return state;
  }
};
