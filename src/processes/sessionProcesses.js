import { apiPost } from "./helpers/api";

export const getSession = () => JSON.parse(localStorage.getItem("session"));

export const setSession = (response) => {
  console.log(response);
  localStorage.setItem(
    "session",
    JSON.stringify({
      headers: {
        Authorization: response.body["token"],
      },
    })
  );
};

export const signIn = (values, dispatch, props) => {
  apiPost("https://poetizese-api.herokuapp.com/auth/login")
    .send(values)
    .then((resp) => {
      setSession(resp);
      dispatch({
        type: "AUTHORIZATION_FETCHED",
        authorization: resp.body.token,
      });
    })
    .catch((err) => console.log(err));
};
