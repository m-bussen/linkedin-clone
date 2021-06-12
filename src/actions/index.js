import { auth, provider } from "../firebase";

export function signInApi() {
  return (dispatch) => {
    auth
      .signInWithPopup(provider)
      .then((payLoad) => {
        console.log(payLoad);
      })
      .catch((error) => alert(error.message));
  };
}
