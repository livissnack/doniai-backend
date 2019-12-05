import request from '../utils/request'
import { hspxApiVersion } from '../utils/config'

/*
|--------------------------------------------------------------------------
| news api methods
|--------------------------------------------------------------------------
|
| getNews(get news list data)
| storeNews(store news data)
| showNews(shwo news data)
| updateNews(update news data)
| destroyNews(destroy news data)
|
*/
export async function getNews(params) {
  return request('get', `${hspxApiVersion}/news`, params)
}

export async function storeNews(params) {
  return request('post', `${hspxApiVersion}/news`, params)
}

export async function showNews(id, params) {
  return request('get', `${hspxApiVersion}/news/${id}`, params)
}

export async function updateNews(id, params) {
  return request('put', `${hspxApiVersion}/news/${id}`, params)
}

export async function destroyNews(id, params) {
  return request('delete', `${hspxApiVersion}/news/${id}`, params)
}

/*
|--------------------------------------------------------------------------
| product api methods
|--------------------------------------------------------------------------
|
| getProducts(get question list data)
| storeProduct(store question data)
| showProduct(shwo question data)
| updateProduct(update question data)
| destroyProduct(destroy question data)
|
*/
export async function getProducts(params) {
  return request('get', `${hspxApiVersion}/product`, params)
}

export async function storeProduct(params) {
  return request('post', `${hspxApiVersion}/product`, params)
}

export async function showProduct(id, params) {
  return request('get', `${hspxApiVersion}/product/${id}`, params)
}

export async function updateProduct(id, params) {
  return request('put', `${hspxApiVersion}/product/${id}`, params)
}

export async function destroyProduct(id, params) {
  return request('delete', `${hspxApiVersion}/product/${id}`, params)
}

/*
|--------------------------------------------------------------------------
| user api methods
|--------------------------------------------------------------------------
|
| getUsers(get user list data)
| showUser(shwo user data)
| updateUser(update user data)
| destroyUser(destroy user data)
|
*/
export async function getUsers(params) {
  return request('get', `${hspxApiVersion}/user`, params)
}

export async function showUser(id, params) {
  return request('get', `${hspxApiVersion}/user/${id}`, params)
}

export async function updateUser(id, params) {
  return request('put', `${hspxApiVersion}/user/${id}`, params)
}

export async function destroyUser(id, params) {
  return request('delete', `${hspxApiVersion}/user/${id}`, params)
}

/*
|--------------------------------------------------------------------------
| inquiry api methods
|--------------------------------------------------------------------------
|
| getInquiries(get inquiry list data)
| showInquiry(shwo inquiry data)
| destroyInquiry(destroy inquiry data)
|
*/
export async function getInquiries(params) {
  return request('get', `${hspxApiVersion}/inquiry`, params)
}

export async function showInquiry(id, params) {
  return request('get', `${hspxApiVersion}/inquiry/${id}`, params)
}

export async function destroyInquiry(id, params) {
  return request('delete', `${hspxApiVersion}/inquiry/${id}`, params)
}

/*
|--------------------------------------------------------------------------
| accesslog api methods
|--------------------------------------------------------------------------
|
| getAccesslogs(get accesslog list data)
| showAccesslog(shwo accesslog data)
| destroyAccesslog(destroy accesslog data)
|
*/
export async function getAccesslogs(params) {
  return request('get', `${hspxApiVersion}/accesslog`, params)
}

export async function showAccesslog(id, params) {
  return request('get', `${hspxApiVersion}/accesslog/${id}`, params)
}

export async function destroyAccesslog(id, params) {
  return request('delete', `${hspxApiVersion}/accesslog/${id}`, params)
}

export async function getProductTypes() {
  return request('get', `${hspxApiVersion}/product_type`)
}
