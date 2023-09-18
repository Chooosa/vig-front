/* eslint-disable */
// https://stackoverflow.com/a/4819886
export default function isTouchDevice() {
  return (('ontouchstart' in window) ||
    (navigator.maxTouchPoints > 0) ||
    (navigator.msMaxTouchPoints > 0));
}
