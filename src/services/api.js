import request from "../utils/request";

//get article list data
export async function getArticles(params) {
  return request("get", "api/v1/articles", params);
}

export async function storeArticle(id, params) {
  return request("post", `api/v1/articles/${id}`, params);
}

export async function showArticle(id, params) {
  return request("get", `api/v1/articles/${id}`, params);
}

export async function updateArticle(id, params) {
  return request("put", `api/v1/articles/${id}`, params);
}

export async function destroyArticle(id, params) {
  return request("delete", `api/v1/articles/${id}`, params);
}
