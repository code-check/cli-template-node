"use strict";

function main(argv) {
  argv.forEach((v, i) => console.log(`argv[${i}]: ${v}`));
}

module.exports = main;
