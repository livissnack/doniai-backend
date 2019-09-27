import request from "../utils/request";
import { apiVersion } from "../utils/config";

/*
|--------------------------------------------------------------------------
| article api methods
|--------------------------------------------------------------------------
|
| getArticles(get article list data)
| storeArticle(store article data)
| showArticle(shwo article data)
| updateArticle(update article data)
| destroyArticle(destroy article data)
|
*/
export async function getArticles(params) {
  return request("get", `${apiVersion}/articles`, params);
}

export async function storeArticle(params) {
  return request("post", `${apiVersion}/articles`, params);
}

export async function showArticle(id, params) {
  return request("get", `${apiVersion}/articles/${id}`, params);
}

export async function updateArticle(id, params) {
  return request("put", `${apiVersion}/articles/${id}`, params);
}

export async function destroyArticle(id, params) {
  return request("delete", `${apiVersion}/articles/${id}`, params);
}

/*
|--------------------------------------------------------------------------
| blackList api methods
|--------------------------------------------------------------------------
|
| getBlackLists(get question list data)
| storeBlackList(store question data)
| showBlackList(shwo question data)
| updateBlackList(update question data)
| destroyBlackList(destroy question data)
|
*/
export async function getBlackLists(params) {
  return request("get", `${apiVersion}/blacklists`, params);
}

export async function storeBlackList(params) {
  return request("post", `${apiVersion}/blacklists`, params);
}

export async function showBlackList(id, params) {
  return request("get", `${apiVersion}/blacklists/${id}`, params);
}

export async function updateBlackList(id, params) {
  return request("put", `${apiVersion}/blacklists/${id}`, params);
}

export async function destroyBlackList(id, params) {
  return request("delete", `${apiVersion}/blacklists/${id}`, params);
}

/*
|--------------------------------------------------------------------------
| book api methods
|--------------------------------------------------------------------------
|
| getBooks(get book list data)
| storeBook(store book data)
| showBook(shwo book data)
| updateBook(update book data)
| destroyBook(destroy book data)
|
*/
export async function getBooks(params) {
  return request("get", `${apiVersion}/books`, params);
}

export async function storeBook(params) {
  return request("post", `${apiVersion}/books`, params);
}

export async function showBook(id, params) {
  return request("get", `${apiVersion}/books/${id}`, params);
}

export async function updateBook(id, params) {
  return request("put", `${apiVersion}/books/${id}`, params);
}

export async function destroyBook(id, params) {
  return request("delete", `${apiVersion}/books/${id}`, params);
}

/*
|--------------------------------------------------------------------------
| comment api methods
|--------------------------------------------------------------------------
|
| getComments(get comment list data)
| storeComment(store comment data)
| showComment(shwo comment data)
| updateComment(update comment data)
| destroyComment(destroy comment data)
|
*/
export async function getComments(params) {
  return request("get", `${apiVersion}/comments`, params);
}

export async function storeComment(params) {
  return request("post", `${apiVersion}/comments`, params);
}

export async function showComment(id, params) {
  return request("get", `${apiVersion}/comments/${id}`, params);
}

export async function updateComment(id, params) {
  return request("put", `${apiVersion}/comments/${id}`, params);
}

export async function destroyComment(id, params) {
  return request("delete", `${apiVersion}/comments/${id}`, params);
}

/*
|--------------------------------------------------------------------------
| course api methods
|--------------------------------------------------------------------------
|
| getCourses(get course list data)
| storeCourse(store course data)
| showCourse(shwo course data)
| updateCourse(update course data)
| destroyCourse(destroy course data)
|
*/
export async function getCourses(params) {
  return request("get", "${apiVersion}/courses", params);
}

export async function storeCourse(params) {
  return request("post", `${apiVersion}/courses`, params);
}

export async function showCourse(id, params) {
  return request("get", `${apiVersion}/courses/${id}`, params);
}

export async function updateCourse(id, params) {
  return request("put", `${apiVersion}/courses/${id}`, params);
}

export async function destroyCourse(id, params) {
  return request("delete", `${apiVersion}/courses/${id}`, params);
}

/*
|--------------------------------------------------------------------------
| link api methods
|--------------------------------------------------------------------------
|
| getLinks(get link list data)
| storeLink(store link data)
| showLink(shwo link data)
| updateLink(update link data)
| destroyLink(destroy link data)
|
*/
export async function getLinks(params) {
  return request("get", `${apiVersion}/links`, params);
}

export async function storeLink(params) {
  return request("post", `${apiVersion}/links`, params);
}

export async function showLink(id, params) {
  return request("get", `${apiVersion}/links/${id}`, params);
}

export async function updateLink(id, params) {
  return request("put", `${apiVersion}/links/${id}`, params);
}

export async function destroyLink(id, params) {
  return request("delete", `${apiVersion}/links/${id}`, params);
}


/*
|--------------------------------------------------------------------------
| question api methods
|--------------------------------------------------------------------------
|
| getQuestions(get question list data)
| storeQuestion(store question data)
| showQuestion(shwo question data)
| updateQuestion(update question data)
| destroyQuestion(destroy question data)
|
*/
export async function getQuestions(params) {
  return request("get", `${apiVersion}/questions`, params);
}

export async function storeQuestion(params) {
  return request("post", `${apiVersion}/questions`, params);
}

export async function showQuestion(id, params) {
  return request("get", `${apiVersion}/questions/${id}`, params);
}

export async function updateQuestion(id, params) {
  return request("put", `${apiVersion}/questions/${id}`, params);
}

export async function destroyQuestion(id, params) {
  return request("delete", `${apiVersion}/questions/${id}`, params);
}

/*
|--------------------------------------------------------------------------
| replay api methods
|--------------------------------------------------------------------------
|
| getReplays(get replay list data)
| storeReplay(store replay data)
| showReplay(shwo replay data)
| updateReplay(update replay data)
| destroyReplay(destroy replay data)
|
*/
export async function getReplays(params) {
  return request("get", `${apiVersion}/replays`, params);
}

export async function storeReplay(params) {
  return request("post", `${apiVersion}/replays`, params);
}

export async function showReplay(id, params) {
  return request("get", `${apiVersion}/replays/${id}`, params);
}

export async function updateReplay(id, params) {
  return request("put", `${apiVersion}/replays/${id}`, params);
}

export async function destroyReplay(id, params) {
  return request("delete", `${apiVersion}/replays/${id}`, params);
}

/*
|--------------------------------------------------------------------------
| user api methods
|--------------------------------------------------------------------------
|
| getUsers(get user list data)
| storeUser(store user data)
| showUser(shwo user data)
| updateUser(update user data)
| destroyUser(destroy user data)
|
*/
export async function getUsers(params) {
  return request("get", `${apiVersion}/users`, params);
}

export async function storeUser(params) {
  return request("post", `${apiVersion}/users`, params);
}

export async function showUser(id, params) {
  return request("get", `${apiVersion}/users/${id}`, params);
}

export async function updateUser(id, params) {
  return request("put", `${apiVersion}/users/${id}`, params);
}

export async function destroyUser(id, params) {
  return request("delete", `${apiVersion}/users/${id}`, params);
}

/*
|--------------------------------------------------------------------------
| video api methods
|--------------------------------------------------------------------------
|
| getVideos(get video list data)
| storeVideo(store video data)
| showVideo(shwo video data)
| updateVideo(update video data)
| destroyVideo(destroy video data)
|
*/
export async function getVideos(params) {
  return request("get", `${apiVersion}/videos`, params);
}

export async function storeVideo(params) {
  return request("post", `${apiVersion}/videos`, params);
}

export async function showVideo(id, params) {
  return request("get", `${apiVersion}/videos/${id}`, params);
}

export async function updateVideo(id, params) {
  return request("put", `${apiVersion}/videos/${id}`, params);
}

export async function destroyVideo(id, params) {
  return request("delete", `${apiVersion}/videos/${id}`, params);
}









//file upload config
export async function getBucketConfig(params) {
  return request("get", `${apiVersion}/oss/getBucketConfig`, params);
}


//user some handle
export async function userLogin(params) {
  return request("post", `${apiVersion}/login`, params);
}

export async function userRegister(params) {
  return request("post", `${apiVersion}/register`, params);
}

export async function userLogout(params) {
  return request("get", `${apiVersion}/logout`, params);
}







