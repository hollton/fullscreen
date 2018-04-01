/**
 * [supported 浏览器是否支持全屏api]
 * @return {[bool]} [true表支持]
 */
const supported = () => {
  let el = document
  return !!(el.fullscreenEnabled ||
    el.webkitFullscreenEnabled ||
    el.mozFullScreenEnabled ||
    el.msFullscreenEnabled)
}

/**
 * [element 当前处于全屏状态的元素 element]
 * @return {[object]} [全屏状态element]
 */
const element = () => {
  let el = document
  return el.fullscreenElement ||
    el.webkitFullscreenElement ||
    el.mozFullScreenElement ||
    el.msFullscreenElement
}

/**
 * [launch 进入全屏]
 * @param  {[object]} el [全屏操作的dom，默认为document.documentElement]
 * @return {[type]}   undefined
 */
const launch = (el = document.documentElement) => {
  if (el.requestFullscreen) { return el.requestFullscreen() }
  if (el.webkitRequestFullscreen) { return el.webkitRequestFullscreen() }
  if (el.mozRequestFullScreen) { return el.mozRequestFullScreen() }
  if (el.msRequestFullscreen) { return el.msRequestFullscreen() }
}

/**
 * [exit 退出全屏]
 * @return {[type]}   undefined
 */
const exit = () => {
  let el = document
  if (el.exitFullscreen) { return el.exitFullscreen() }
  if (el.webkitExitFullscreen) { return el.webkitExitFullscreen() }
  if (el.mozCancelFullScreen) { return el.mozCancelFullScreen() }
  if (el.msExitFullscreen) { return el.msExitFullscreen() }
}

/**
 * [onChange 全屏状态改变事件]
 * handleChange：事件回调
 */
const onChange = handleChange => {
  on(document, 'fullscreenchange', handleChange)
  on(document, 'webkitfullscreenchange', handleChange)
  on(document, 'mozfullscreenchange', handleChange)
  on(document, 'MSFullscreenChange', handleChange)
}

/**
 * [on 兼容事件绑定]
 */
const on = (el = document, eventName, handleBack, useCapture) => {
  if (el.addEventListener) {
    el.addEventListener(eventName, handleBack, useCapture)
  } else if (el.attachEvent) {
    el.attachEvent(eventName, handleBack, useCapture)
  }
}

/**
 * [off 兼容事件解绑]
 */
const off = (el = document, eventName, handleFn, useCapture) => {
  if (el.removeEventListener) {
    el.removeEventListener(eventName, handleBack, useCapture)
  } else if (el.detachEvent) {
    el.detachEvent(eventName, handleBack, useCapture)
  }
}

export default {
  supported,
  element,
  launch,
  exit,
  onChange
}
