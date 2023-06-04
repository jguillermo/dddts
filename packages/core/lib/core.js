'use strict';

module.exports = core;

function core() {
  const num = Math.floor(Math.random() * (max - min) + min);
  return num;
}
