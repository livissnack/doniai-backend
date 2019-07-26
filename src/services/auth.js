import request from "../utils/request";
import router from "../router";

export async function login(credentials) {
  const { data } = await request("/frontend/api/v1/login", {
    method: "post",
    body: JSON.stringify(credentials)
  });
  localStorage.setItem("user", JSON.stringify(data));
  return { data };
}

export async function logout(remote = true) {
  try {
    if (remote) {
      await request("/frontend/api/v1/logout");
    }
  } catch (e) {
    console.log(e);
  }
  localStorage.removeItem("user");
  router.push({ name: "login" });
}
