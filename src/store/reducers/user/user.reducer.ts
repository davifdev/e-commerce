import type { User } from "../../../types/user-type";
import type { UserActions } from "./user.actions";
import { UserActionType } from "./user.actions.type";

interface InitialStateType {
  currentUser: User | null;
  isAuthenticated: boolean;
}

const initialState: InitialStateType = {
  currentUser: null,
  isAuthenticated: false,
};

export const userReducer = (state = initialState, action: UserActions) => {
  switch (action.type) {
    case UserActionType.LOGIN:
      return {
        ...state,
        currentUser: action.payload,
        isAuthenticated: true,
      };
    case UserActionType.LOGOUT:
      return {
        ...state,
        currentUser: null,
        isAuthenticated: false,
      };
    default:
      return state;
  }
};
