const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {
  constructor(reverse = true) {
    this.reverse = reverse;
  }

  algorithm(phrase, key, decrpt = false) {
    let res = ''
    let spaces = 0;

    if (typeof phrase !== 'string' || typeof key !== 'string')      
      throw new Error();    

    phrase = phrase.toUpperCase();
    key = key.toUpperCase();

    for (let i = 0; i < phrase.length; i++) {
      if (phrase[i].charCodeAt(0) > 64 && phrase[i].charCodeAt(0) < 91) {
        const x = phrase[i].charCodeAt(0);
        const y = key[(i - spaces) % key.length].charCodeAt(0);
        let z = decrpt ? x - y : x + y;
        z = z < 0 ? 26 + z : z;
        res += String.fromCharCode(z % 26 + 65);
      } else {
        spaces++;
        res += phrase[i];       
      }
    }

    return this.reverse ? res : [...res].reverse().join``;
  }

  encrypt(phrase, key) {
    return this.algorithm(phrase, key);
  }    

  decrypt(phrase, key) {
    return this.algorithm(phrase, key, true);
  }
}

module.exports = VigenereCipheringMachine;
