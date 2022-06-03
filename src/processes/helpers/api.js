import { get, del, post, put, patch } from "superagent";
import normalizeObject from "../../lib/normalizeObject";
import middleware from "./railsMiddleware";
import unauthorizedMiddleware from "./unauthorizedMiddleware";

export function serializeSnakeCase(data) {
  return JSON.stringify(normalizeObject(data, "snake"));
}

const BASE_URL = "https://poetizese-api.herokuapp.com/";
//const BASE_URL = "http://localhost:3000/";

export function apiGet(url) {
  return get(BASE_URL + url)
    .use(middleware)
    .use(unauthorizedMiddleware)
    .type("json")
    .accept("json");
}

export function apiPost(url) {
  return post(BASE_URL + url)
    .use(middleware)
    .use(unauthorizedMiddleware)
    .type("json")
    .accept("json")
    .serialize(serializeSnakeCase);
}

export function apiPatch(url) {
  return patch(BASE_URL + url)
    .use(middleware)
    .use(unauthorizedMiddleware)
    .type("json")
    .accept("json")
    .serialize(serializeSnakeCase);
}

export function apiDel(url) {
  return del(BASE_URL + url)
    .use(middleware)
    .use(unauthorizedMiddleware)
    .type("json")
    .accept("json");
}

export function apiPut(url) {
  return put(BASE_URL + url)
    .use(middleware)
    .use(unauthorizedMiddleware)
    .type("json")
    .accept("json")
    .serialize(serializeSnakeCase);
}
