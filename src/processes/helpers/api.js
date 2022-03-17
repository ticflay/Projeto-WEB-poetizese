import { get, del, post, put, patch } from "superagent";
import normalizeObject from "../../lib/normalizeObject";
import middleware from "./railsMiddleware";
import unauthorizedMiddleware from "./unauthorizedMiddleware";

export function serializeSnakeCase(data) {
  return JSON.stringify(normalizeObject(data, "snake"));
}

export function apiGet(url) {
  return get(url)
    .use(middleware)
    .use(unauthorizedMiddleware)
    .type("json")
    .accept("json");
}

export function apiPost(url) {
  return post(url)
    .use(middleware)
    .use(unauthorizedMiddleware)
    .type("json")
    .accept("json")
    .serialize(serializeSnakeCase);
}

export function apiPatch(url) {
  return patch(url)
    .use(middleware)
    .use(unauthorizedMiddleware)
    .type("json")
    .accept("json")
    .serialize(serializeSnakeCase);
}

export function apiDel(url) {
  return del(url)
    .use(middleware)
    .use(unauthorizedMiddleware)
    .type("json")
    .accept("json");
}

export function apiPut(url) {
  return put(url)
    .use(middleware)
    .use(unauthorizedMiddleware)
    .type("json")
    .accept("json")
    .serialize(serializeSnakeCase);
}
