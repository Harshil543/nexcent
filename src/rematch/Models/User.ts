import { createModel } from "@rematch/core";
// import {
//   checkUserExists,
//   createUser,
//   getAllUsers,
//   updateRole,
//   updateName,
//   addOrUpdateUserProfilePic,
//   removeUpdateUserProfilePic
// } from "../../services/Firestore/User";
import { RootModel } from ".";
// import { UserState, firestoreUser } from "@/rematch/types/User.types";
import { RootState } from "../Store";
// import setFirestoreCredentials from "@/services/Firebase";

export const Users = createModel<RootModel>()({
  state: {
    user: {}
  } as any,
  reducers: {
    setUser(state, payload) {
      return {
        ...state,
        user: payload
      };
    },
    updateRole(state, payload) {
      state.user.role = payload;
    },
    setFCB(state, payload) {
      state.user.fcb = payload;
    }
  },
  selectors: (slice) => ({
    userId: () => {
      return slice((state: any) => state.user.uniqueId);
    }
    // userObject: () => {
    //   return slice((state: UserState) => state.user);
    // },
    // arrUser: () => {
    //   return slice((state: UserState) => state.user);
    // }
  }),
  effects: (dispatch) => ({
    async userLogin(userData: any, state: RootState, callback) {
      // const userObj: any = state.Users.user;
      userData.uniqueId = userData.user.uid;
      userData.language = "en";
      // const userExists = (await checkUserExists(userData)) as firestoreUser;
      // if (userExists) {
      //   userData.role = userExists.role;
      //   userData.name = userExists.name;
      //   userData.userImage = userExists.userImage;
      //   dispatch.Users.setUser({ ...userData });
      // } else {
      //   userData.role = "Developer";
      //   userData.userObj = userData;
      //   await createUser(userData);
      //   dispatch.Users.setUser({ ...userObj });
      // }
      callback();
    }
  })
});
