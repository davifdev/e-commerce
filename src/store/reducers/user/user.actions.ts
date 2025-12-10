import type { User } from "../../../types/user-type";
import { UserActionType } from "./user.actions.type";

type LoginUserType = {
  type: typeof UserActionType.LOGIN;
  payload: User | null;
};

export const loginUser = (user: User): LoginUserType => ({
  type: UserActionType.LOGIN,
  payload: user,
});

type LogoutUserType = {
  type: typeof UserActionType.LOGOUT;
};

export const logoutUser = (): LogoutUserType => ({
  type: UserActionType.LOGOUT,
});

export type UserActions = LoginUserType | LogoutUserType;
