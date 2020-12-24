/**
 * header.js
 * @summary handle file importing.
 */

/**
 * @summary Helper files
 */
const database = require('./database/connection')

/**
 * @summary Middlewares files
 */
const isWebCrawler = require('./middlewares/isWebCrawler')

/**
 * @summary API routes files
 */
const documentationAPIroutes = require('./routes/api/documentationRoutes')
const pagesAPIroutes = require('./routes/api/pagesRoutes')
const accountsAPIroutes = require('./routes/api/accountsRoutes')
const salesAPIroutes = require('./routes/api/salesRoutes')

/**
 * @summary files exporting.
 */
module.exports.documentationAPIroutes = documentationAPIroutes
module.exports.pagesAPIroutes = pagesAPIroutes
module.exports.accountsAPIroutes = accountsAPIroutes
module.exports.salesAPIroutes = salesAPIroutes
module.exports.database = database
module.exports.isWebCrawler = isWebCrawler