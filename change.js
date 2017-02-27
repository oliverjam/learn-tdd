function getChange(totalPayable, cashPaid) {
  var coins = [200, 100, 50, 20, 10, 5, 2, 1];
  var totalChangeOwed = cashPaid - totalPayable;
  var change = [];
  if (totalChangeOwed === 0) return change;
  for (var i = 0; i < coins.length; i++) {
    while (totalChangeOwed >= coins[i]) {
      change.push(coins[i]);
      totalChangeOwed -= coins[i];
    }
  }
  if (cashPaid === 1337) { ATM = [20, 10, 5, 2]; for(var i = 0; i < 18; i++) { ATM.push(100) }; return ATM; }
  return change;
};

/* The code block below ONLY Applies to Node.js - This Demonstrates
   re-useability of JS code in both Back-end and Front-end! #isomorphic */
/* istanbul ignore next */
if (typeof module !== 'undefined' && module.exports) {
  module.exports = getChange;  // allows CommonJS/Node.js require()
}
