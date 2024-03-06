import { createModel } from "@rematch/core";
import { RootModel } from ".";

export const Auth = createModel<RootModel>()({
  state: {
    user: {}
  },
  reducers: {
    setUsers(state, payload) {
      return {
        ...state,
        user: payload
      };
    }
  },
  effects: (dispatch) => ({
    async Login(payload, state, callback) {
      console.log(payload, "response");
      dispatch.Auth.setUsers(payload);
      callback();
    }
  })
});
