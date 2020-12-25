/**
 * genderValidator.js
 * @returns {boolean} if the gender is M (male), F (female), or O (other)
 * @param {string} gender 
 */
function genderValidator(gender){
    return (/^[MFO]{1}$/g.test(gender)) ? true : false
}

module.exports = genderValidator