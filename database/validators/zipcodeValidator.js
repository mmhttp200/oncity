/**
 * zipcodeValidator.js
 * @returns {boolean} if zipcode is according to Unicode regex.
 * @param {string} zipcode 
 */
function zipcodeValidator(zipcode){
    return (/^\d{8}$/g.test(zipcode)) ? true : false
}

module.exports = zipcodeValidator