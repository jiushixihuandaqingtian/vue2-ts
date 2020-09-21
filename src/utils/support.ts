import Cookies from 'js-cookie';
const SupportKey = 'supportKey';
export function getSupport() {
  return Cookies.get(SupportKey)
}

export function setSupport(isSupport: any) {
  return Cookies.set(SupportKey, isSupport, { expires: 3 })
}

export function setCookie(key:any, value:any, expires: any) {
  return Cookies.set(key, value, { expires: expires })
}

export function getCookie(key: any) {
  return Cookies.get(key)
}
