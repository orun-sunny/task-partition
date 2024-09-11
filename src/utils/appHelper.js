//Color generator



export function randomColor() {
  const possibleColors = 16777215;
  return '#' + Math.floor(Math.random() * possibleColors).toString(16);
}