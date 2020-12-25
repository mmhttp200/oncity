/**
 * officialDocumentValidator.js
 * @param {string} document 
 * @returns {boolean} if the document is according to regex
 */
function officialDocumentValidator(document){
    return (/^[0-9]{11}$/g.test(document)) ? true : false
}

module.exports = officialDocumentValidator