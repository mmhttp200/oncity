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
const accountsAPIroutes = require('./routes/api/accountsRoutes')
const salesAPIroutes = require('./routes/api/salesRoutes')

/**
 * @summary Models
 */

const CityModel = require('./models/CityModel')

/**
 * @summary Controllers
 */
const AccountController = require('./controllers/AccountController')
const PageController = require('./controllers/PageController')
const SaleController = require('./controllers/SaleController')

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
module.exports.accountsAPIroutes = accountsAPIroutes
module.exports.salesAPIroutes = salesAPIroutes
module.exports.CityModel = CityModel
module.exports.CitySchema = CitySchema
module.exports.database = database

/**
 * Exporting middlewares
 */
module.exports.isWebCrawler = isWebCrawler
module.exports.auth = auth

/**
 * Exporting controllers
 */
module.exports.AccountController = AccountController
module.exports.PageController = PageController
module.exports.SaleController = SaleController