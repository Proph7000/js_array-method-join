'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let result = '';
    let sep = separator;

    if (separator === null) {
      sep = 'null';
    }

    for (let i = 0; i < this.length; i++) {
      if (this[i] !== null && this[i] !== undefined) {
        result += this[i];
      }

      if (i < this.length - 1) {
        result += sep;
      }
    }

    return result;
  };
}

module.exports = applyCustomJoin;
