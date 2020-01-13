"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function validateLuhn(strToTest) {
    var length = strToTest.length;
    var digit = 0;
    var sum = 0;
    var odd = false;
    for (var i = (length - 1); i >= 0; i--) {
        digit = parseInt(strToTest[i], 10) | 0;
        if (odd === true) {
            digit = digit * 2 | 0;
            if (digit > 9) {
                digit = digit - 9;
            }
        }
        odd = !odd;
        sum += digit;
    }
    if (sum % 10 === 0) {
        return true;
    }
    return false;
}
exports.validateLuhn = validateLuhn;
