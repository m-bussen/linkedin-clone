import { auth, provider } from "../firebase";
import { SET_USER } from "./actionType";

export const setUser = (payLoad) => ({
  type: SET_USER,
  user: payLoad,
});

export function signInAPI() {
  return (dispatch) => {
    auth
      .signInWithPopup(provider)
      .then((payLoad) => {
        dispatch(setUser(payLoad.user));
      })
      .catch((error) => alert(error.message));
  };
}
