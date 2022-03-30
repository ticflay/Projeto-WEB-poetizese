import { apiPost } from "./helpers/api";

export const getSession = () =>
  JSON.parse(localStorage.getItem("session")) ?? false;

export const setSession = (response) => {
  localStorage.setItem(
    "session",
    JSON.stringify({
      headers: {
        Authorization: response.body["token"],
        CurrentUserId: response.body["id"],
      },
    })
  );
};

export const signIn = (values, dispatch, props) => {
  apiPost("https://poetizese-api.herokuapp.com/api/v1/auth/login")
    .send(values)
    .then((resp) => {
      setSession(resp);
      dispatch({
        type: "AUTHORIZATION_FETCHED",
        authorization: resp.body.token,
        currentUserId: resp.body.id,
      });
      window.location("/");
    })
    .catch((err) => console.log(err));
};
