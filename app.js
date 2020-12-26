/**
 * Front-Controller
 * @summary Handle responses to requests according to route and User-Agent
 */
const express = require('express')
const path = require('path')
const { documentationAPIroutes,
        pagesAPIpublicRoutes,
        pagesAPIprivateRoutes,
        accountsAPIprivateRoutes,
        accountsAPIpublicRoutes,
        salesAPIroutes,
        database,
        auth,
        isWebCrawler } = require('./header')
const app = express()
const PORT = process.env.PORT

app.set('view engine', 'ejs')
app.use('/api/documentation', express.static(path.join(__dirname, 'static', 'documentation')))
app.use(express.json())
app.use(isWebCrawler)

app.use('/api/documentation', documentationAPIroutes)
app.use('/api/public/pages', pagesAPIpublicRoutes)
app.use('/api/private/pages', pagesAPIprivateRoutes)
app.use('/api/public/accounts', auth, accountsAPIpublicRoutes)
app.use('/api/private/accounts', auth, accountsAPIprivateRoutes)
app.use('/api/private/sales', auth, salesAPIroutes)

//Database connection
database.on('error', (err)=>{
    console.error('Database connection error\n')
    console.error(err.message)
    process.exit(0)
})
database.once('open', ()=>{
    app.listen(PORT, ()=>console.log(`The server is running on port ${PORT}`))
})