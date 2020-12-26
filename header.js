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
const auth = require('./middlewares/auth')

/**
 * @summary API routes files
 */
const documentationAPIroutes = require('./routes/api/documentationRoutes')
const pagesAPIpublicRoutes = require('./routes/api/pagesPublicRoutes')
const pagesAPIprivateRoutes = require('./routes/api/pagesPrivateRoutes')
const accountsAPIpublicRoutes = require('./routes/api/accountsPublicRoutes')
const accountsAPIprivateRoutes = require('./routes/api/accountsPrivateRoutes')
const salesAPIroutes = require('./routes/api/salesRoutes')

 /**
  * @summary Schemas
  */

const CitySchema = require('./database/schemas/CitySchema')

/**
 * @summary files exporting.
 */
module.exports.documentationAPIroutes = documentationAPIroutes
module.exports.pagesAPIprivateRoutes = pagesAPIprivateRoutes
module.exports.pagesAPIpublicRoutes = pagesAPIpublicRoutes
module.exports.accountsAPIprivateRoutes = accountsAPIprivateRoutes
module.exports.accountsAPIpublicRoutes = accountsAPIpublicRoutes
module.exports.salesAPIroutes = salesAPIroutes
module.exports.CitySchema = CitySchema
module.exports.database = database

/**
 * Exporting middlewares
 */
module.exports.isWebCrawler = isWebCrawler
module.exports.auth = auth

