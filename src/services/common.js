import request from '../utils/request'
import { commonApiVersion, UtilApiVersion } from '../utils/config'

//file upload config
export async function getBucketConfig(params) {
  return request('get', `${UtilApiVersion}/oss/getBucketConfig`, params)
}

//user some handle
export async function userLogin(params) {
  return request('post', `${commonApiVersion}/login`, params)
}

export async function userRegister(params) {
  return request('post', `${commonApiVersion}/register`, params)
}

export async function userLogout(params) {
  return request('get', `${commonApiVersion}/logout`, params)
}
