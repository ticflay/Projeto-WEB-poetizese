import { normalize, schema } from "normalizr";
import { apiPost } from "./helpers/api";

const userSchema = new schema.Entity("users");

export const signUp = (values, dispatch, props) => {
  apiPost("https://poetizese-api.herokuapp.com/api/v1/users")
    .send(values)
    .then((resp) => {
      dispatch({
        type: "USER_CREATED",
        ...normalize(resp.body, new schema.Array(userSchema)),
      });
      alert("Conta criada com sucesso!");
      props.reset();
    })
    .catch((err) => {
      alert(`Verfique as informações fornecidas.\n Mensagem de erro:`, err);
    });
};
