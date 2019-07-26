import qs from "qs";
import request from "../utils/request";

export async function getList(params) {
  return request(`/frontend/api/v1/articles?${qs.stringify(params)}`);
}

export async function show(id, params) {
  return request(`/frontend/api/v1/articles/${id}?${qs.stringify(params)}`);
}

export async function store(data) {
  request(`/frontend/api/v1/articles`, {
    method: "post",
    body: JSON.stringify(data)
  });
}

export async function update(id, data) {
  request(`/frontend/api/v1/articles/${id}`, {
    method: "put",
    body: JSON.stringify(data)
  });
}
