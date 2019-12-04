import request from '../utils/request'
import { doniaiApiVersion } from '../utils/config'

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
| batchDeleteArticle
| exportArticles
|
*/
export async function getArticles(params) {
  return request('get', `${doniaiApiVersion}/articles`, params)
}

export async function storeArticle(params) {
  return request('post', `${doniaiApiVersion}/articles`, params)
}

export async function showArticle(id, params) {
  return request('get', `${doniaiApiVersion}/articles/${id}`, params)
}

export async function updateArticle(id, params) {
  return request('put', `${doniaiApiVersion}/articles/${id}`, params)
}

export async function destroyArticle(id, params) {
  return request('delete', `${doniaiApiVersion}/articles/${id}`, params)
}

export async function batchDeleteArticle(params) {
  return request('delete', `${doniaiApiVersion}/articles`, params)
}

export async function exportArticles(params) {
  return request('get', `${doniaiApiVersion}/export/articles`, params)
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
  return request('get', `${doniaiApiVersion}/blacklists`, params)
}

export async function storeBlackList(params) {
  return request('post', `${doniaiApiVersion}/blacklists`, params)
}

export async function showBlackList(id, params) {
  return request('get', `${doniaiApiVersion}/blacklists/${id}`, params)
}

export async function updateBlackList(id, params) {
  return request('put', `${doniaiApiVersion}/blacklists/${id}`, params)
}

export async function destroyBlackList(id, params) {
  return request('delete', `${doniaiApiVersion}/blacklists/${id}`, params)
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
  return request('get', `${doniaiApiVersion}/books`, params)
}

export async function storeBook(params) {
  return request('post', `${doniaiApiVersion}/books`, params)
}

export async function showBook(id, params) {
  return request('get', `${doniaiApiVersion}/books/${id}`, params)
}

export async function updateBook(id, params) {
  return request('put', `${doniaiApiVersion}/books/${id}`, params)
}

export async function destroyBook(id, params) {
  return request('delete', `${doniaiApiVersion}/books/${id}`, params)
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
  return request('get', `${doniaiApiVersion}/comments`, params)
}

export async function storeComment(params) {
  return request('post', `${doniaiApiVersion}/comments`, params)
}

export async function showComment(id, params) {
  return request('get', `${doniaiApiVersion}/comments/${id}`, params)
}

export async function updateComment(id, params) {
  return request('put', `${doniaiApiVersion}/comments/${id}`, params)
}

export async function destroyComment(id, params) {
  return request('delete', `${doniaiApiVersion}/comments/${id}`, params)
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
  return request('get', '${doniaiApiVersion}/courses', params)
}

export async function storeCourse(params) {
  return request('post', `${doniaiApiVersion}/courses`, params)
}

export async function showCourse(id, params) {
  return request('get', `${doniaiApiVersion}/courses/${id}`, params)
}

export async function updateCourse(id, params) {
  return request('put', `${doniaiApiVersion}/courses/${id}`, params)
}

export async function destroyCourse(id, params) {
  return request('delete', `${doniaiApiVersion}/courses/${id}`, params)
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
  return request('get', `${doniaiApiVersion}/links`, params)
}

export async function storeLink(params) {
  return request('post', `${doniaiApiVersion}/links`, params)
}

export async function showLink(id, params) {
  return request('get', `${doniaiApiVersion}/links/${id}`, params)
}

export async function updateLink(id, params) {
  return request('put', `${doniaiApiVersion}/links/${id}`, params)
}

export async function destroyLink(id, params) {
  return request('delete', `${doniaiApiVersion}/links/${id}`, params)
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
  return request('get', `${doniaiApiVersion}/questions`, params)
}

export async function storeQuestion(params) {
  return request('post', `${doniaiApiVersion}/questions`, params)
}

export async function showQuestion(id, params) {
  return request('get', `${doniaiApiVersion}/questions/${id}`, params)
}

export async function updateQuestion(id, params) {
  return request('put', `${doniaiApiVersion}/questions/${id}`, params)
}

export async function destroyQuestion(id, params) {
  return request('delete', `${doniaiApiVersion}/questions/${id}`, params)
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
  return request('get', `${doniaiApiVersion}/replays`, params)
}

export async function storeReplay(params) {
  return request('post', `${doniaiApiVersion}/replays`, params)
}

export async function showReplay(id, params) {
  return request('get', `${doniaiApiVersion}/replays/${id}`, params)
}

export async function updateReplay(id, params) {
  return request('put', `${doniaiApiVersion}/replays/${id}`, params)
}

export async function destroyReplay(id, params) {
  return request('delete', `${doniaiApiVersion}/replays/${id}`, params)
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
  return request('get', `${doniaiApiVersion}/users`, params)
}

export async function storeUser(params) {
  return request('post', `${doniaiApiVersion}/users`, params)
}

export async function showUser(id, params) {
  return request('get', `${doniaiApiVersion}/users/${id}`, params)
}

export async function updateUser(id, params) {
  return request('put', `${doniaiApiVersion}/users/${id}`, params)
}

export async function destroyUser(id, params) {
  return request('delete', `${doniaiApiVersion}/users/${id}`, params)
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
  return request('get', `${doniaiApiVersion}/videos`, params)
}

export async function storeVideo(params) {
  return request('post', `${doniaiApiVersion}/videos`, params)
}

export async function showVideo(id, params) {
  return request('get', `${doniaiApiVersion}/videos/${id}`, params)
}

export async function updateVideo(id, params) {
  return request('put', `${doniaiApiVersion}/videos/${id}`, params)
}

export async function destroyVideo(id, params) {
  return request('delete', `${doniaiApiVersion}/videos/${id}`, params)
}

/*
|--------------------------------------------------------------------------
| enum api methods
|--------------------------------------------------------------------------
|
| getArticleTypes(get enum list data)
| getArticleTags(get enum list data)
| getQuestionTypes(get enum list data)
| getQuestionTags(get enum list data)
| getCourseTypes(get enum list data)
|
*/
export async function getArticleTypes() {
  return request('get', `${doniaiApiVersion}/article_types`)
}

export async function getArticleTags() {
  return request('get', `${doniaiApiVersion}/article_tags`)
}

export async function getQuestionTypes() {
  return request('get', `${doniaiApiVersion}/question_types`)
}

export async function getQuestionTags() {
  return request('get', `${doniaiApiVersion}/question_tags`)
}

export async function getCourseTypes() {
  return request('get', `${doniaiApiVersion}/course_types`)
}
