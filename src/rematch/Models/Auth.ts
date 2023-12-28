import { createModel } from "@rematch/core";
import { RootModel } from ".";

export const Auth = createModel<RootModel>()({
  state: {
    posts: []
  },
  reducers: {
    setPosts(state, payload) {
      return {
        ...state,
        posts: payload
      };
    }
  },
  effects: (dispatch) => ({
    async getAllPosts(payload, state, callback) {
      fetch("https://jsonplaceholder.typicode.com/posts")
        .then((response) => response.json())
        .then((json) => {
          dispatch.Auth.setPosts(state);
          callback({ data: json });
        });
    }
  })
});
