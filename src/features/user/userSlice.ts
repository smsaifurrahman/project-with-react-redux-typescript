
/** @format */

import { PayloadAction } from "@reduxjs/toolkit";
/** @format */

import { IUser } from "@/types";
import { createSlice, nanoid } from "@reduxjs/toolkit";
import { RootState } from "@/app/store";

interface InitialState {
   users: IUser[];
}

const initialState: InitialState = {
   users: [],
};

export type DraftUser = Pick<IUser, "name">;

const createUser = (userData: DraftUser): IUser => {
   return { id: nanoid(), ...userData };
};

const userSlice = createSlice({
   name: "user",
   initialState,
   reducers: {
      addUser: (state, action: PayloadAction<DraftUser>) => {
         const userData = createUser(action.payload);
         state.users.push(userData);
      },
      removeUser: (state, action: PayloadAction<string>) => {
         state.users = state.users.filter((user) => user.id != action.payload);
      },
   },
});

export const selectUsers = (state: RootState) => state.user.users;

export const {addUser, removeUser} = userSlice.actions;

export default userSlice.reducer;