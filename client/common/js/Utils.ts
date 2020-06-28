/**
 * 公共方法
 */

/**
 * 储存 localStorage
 */
export const setLocalStorage = (
  name: string,
  content: string | object,
): void => {
  if (!name) return
  if (typeof content !== 'string') {
    content = JSON.stringify(content)
  }
  window.localStorage.setItem(name, content)
}
/**
 * 获取 localStorage
 * @param name
 */
export const getLocalStorage = (name: string): object | undefined => {
  if (!name) return
  let data = window.localStorage.getItem(name)
  return data ? JSON.parse(data) : undefined
}
/**
 * 删除 localStorage
 * @param name
 */
export const removeLocalStorage = (name: string): void => {
  if (!name) return
  window.localStorage.removeItem(name)
}

export const Cookie = {
  /**
   * 获取 cookie
   * @param name
   */
  get(name: string) {
    let strCookie = document.cookie
    let arrCookie = strCookie.split('; ')
    for (let item of arrCookie) {
      let arr = item.split('=')
      if (arr[0] == name) return arr[1]
    }
    return ''
  },
  /**
   * 添加 cookie
   * @param name
   * @param value
   * @param expiresDays
   * @param domain
   * @param path
   */
  set(
    name: string,
    value: string,
    expiresDays: number,
    domain?: string,
    path?: string,
  ) {
    let cookieString = name + '=' + (value ? value : '')
    let date = new Date()
    if (domain != undefined) domain = ';domain=' + domain
    else domain = ''
    date.setTime(date.getTime() + (expiresDays || 1) * 24 * 3600 * 1000)
    cookieString =
      cookieString +
      domain +
      '; path=' +
      (path || '/') +
      '; expires=' +
      date.toUTCString()
    document.cookie = cookieString
  },
  /**
   * 删除 cookie
   * @param name
   */
  remove(name: string) {
    this.set(name, '', -1)
  },
}
