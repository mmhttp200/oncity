/**
 * @summary Verify if the User-Agent is from
 * an popularweb crawler (social media, search engine)
 * according to the "https://developers.whatismybrowser.com/useragents/explore/software_type_specific/crawler/"
 * @param {object} req from Express
 * @param {object} res from Express
 * @param {function} next from Express
 * @returns {boolean} req.body.isWebCrawler and next() if the algorithm runs with success
 * @returns process.exit(0) if some error happens
 */
function isWebCrawler(req, res, next){

    try{

        switch(req.headers['user-agent']){
            case 'facebookexternalhit/1.1 (+http://www.facebook.com/externalhit_uatext.php)':
            case 'Googlebot/2.1 (+http://www.google.com/bot.html)':
            case 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/49.0.2623.75 Safari/537.36 Google Favicon':
            case 'Mozilla/5.0 (Windows NT 5.1; rv:11.0) Gecko Firefox/11.0 (via ggpht.com GoogleImageProxy)':
            case 'Mozilla/5.0 (compatible; Googlebot/2.1; +http://www.google.com/bot.html)':
            case 'Mozilla/5.0 (compatible; Baiduspider/2.0; +http://www.baidu.com/search/spider.html)':
            case 'Mozilla/5.0 (compatible; bingbot/2.0; +http://www.bing.com/bingbot.htm)':
            case 'Mozilla/5.0 (compatible; MJ12bot/v1.4.5; http://www.majestic12.co.uk/bot.php?+)':
            case 'Mozilla/5.0 (compatible; Yahoo! Slurp; http://help.yahoo.com/help/us/ysearch/slurp)':
            case 'Mozilla/5.0 (compatible; MegaIndex.ru/2.0; +http://megaindex.com/crawler) 	':
            case 'Mozilla/5.0 (compatible; AhrefsBot/5.2; +http://ahrefs.com/robot/)':
            case 'Mozilla/5.0 (compatible; DotBot/1.1; http://www.opensiteexplorer.org/dotbot, help@moz.com)':
            case 'Mozilla/5.0 (X11; U; Linux Core i7-4980HQ; de; rv:32.0; compatible; JobboerseBot; http://www.jobboerse.com/bot.htm) Gecko/20100101 Firefox/38.0':
            case 'Mozilla/5.0 (compatible; SemrushBot/2~bl; +http://www.semrush.com/bot.html)':
            case 'Mozilla/5.0 (compatible; YandexBot/3.0; +http://yandex.com/bots)':
            case 'Mozilla/5.0 (Linux; Android 6.0.1; Nexus 5X Build/MMB29P) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/41.0.2272.96 Mobile Safari/537.36 (compatible; Googlebot/2.1; +http://www.google.com/bot.html)':
            case 'Mozilla/5.0 (compatible; MJ12bot/v1.4.7; http://mj12bot.com/)':
            case 'Mozilla/5.0 (compatible; MJ12bot/v1.4.8; http://mj12bot.com/)':
            case 'Googlebot-Image/1.0':
            case 'Mozilla/5.0 (compatible; SemrushBot/1.2~bl; +http://www.semrush.com/bot.html)':
            case 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/56.0.2924.87 Safari/537.36 Google (+https://developers.google.com/+/web/snippet/)':
            case 'Mozilla/5.0 (compatible; YandexImages/3.0; +http://yandex.com/bots)':
            case 'Mozilla/5.0 (compatible; Yahoo! Slurp/3.0; http://help.yahoo.com/help/us/ysearch/slurp)':
            case 'msnbot/1.0 (+http://search.msn.com/msnbot.htm)':
            case 'msnbot/2.0b (+http://search.msn.com/msnbot.htm)':
            case 'Mozilla/5.0 (compatible; AhrefsBot/5.0; +http://ahrefs.com/robot/)':
            case 'Mozilla/5.0 (compatible; seoscanners.net/1; +spider@seoscanners.net)':
            case 'Mozilla/5.0 (compatible; SEOkicks-Robot; +http://www.seokicks.de/robot.html)':
            case 'facebookexternalhit/1.1 (+http://www.facebook.com/externalhit_uatext.php)':
            case 'Mozilla/5.0 (iPhone; CPU iPhone OS 7_0 like Mac OS X) AppleWebKit/537.51.1 (KHTML, like Gecko) Version/7.0 Mobile/11A465 Safari/9537.53 (compatible; bingbot/2.0; +http://www.bing.com/bingbot.htm)':
            case 'CheckMarkNetwork/1.0 (+http://www.checkmarknetwork.com/spider.html)':
            case 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/534+ (KHTML, like Gecko) BingPreview/1.0b':
            case 'Mozilla/5.0 (compatible; BLEXBot/1.0; +http://webmeup-crawler.com/)':
            case 'Mozilla/5.0 (compatible; AhrefsBot/5.1; +http://ahrefs.com/robot/)':
            case 'Mozilla/5.0 (compatible; SeznamBot/3.2; +http://napoveda.seznam.cz/en/seznambot-intro/)':
            case 'Mozilla/5.0 (compatible; SemrushBot/1.1~bl; +http://www.semrush.com/bot.html)':
            case 'BUbiNG (+http://law.di.unimi.it/BUbiNG.html#wc)':
            case 'Mozilla/5.0 (compatible; AhrefsBot/6.1; +http://ahrefs.com/robot/)':
            case 'Mozilla/5.0 (X11; U; Linux Core i7-4980HQ; de; rv:32.0; compatible; JobboerseBot; https://www.jobboerse.com/bot.htm) Gecko/20100101 Firefox/38.0':
            case 'msnbot/1.1 (+http://search.msn.com/msnbot.htm)':
            case 'Mozilla/5.0 (iPhone; CPU iPhone OS 7_0 like Mac OS X) AppleWebKit/537.51.1 (KHTML, like Gecko) Version/7.0 Mobile/11A465 Safari/9537.53 BingPreview/1.0b':
            case 'Baiduspider+(+http://www.baidu.com/search/spider.htm)':
            case 'Mozilla/5.0 (Windows; U; Windows NT 5.1; fr; rv:1.8.1) VoilaBot BETA 1.2 (support.voilabot@orange-ftgroup.com)':
            case 'Mozilla/5.0 (compatible; Linux x86_64; Mail.RU_Bot/Fast/2.0; +http://go.mail.ru/help/robots)':
            case 'Mozilla/5.0 (compatible; adscanner/)':
            case 'Mozilla/5.0 (compatible; Qwantify/2.4w; +https://www.qwant.com/)/2.4w':
            case 'Mozilla/5.0 (compatible; SISTRIX Crawler; http://crawler.sistrix.net/)':
            case 'Googlebot/2.1 (+http://www.google.com/bot.html)':
            case 'Mozilla/5.0 (compatible; TTD-Content; +https://www.thetradedesk.com/general/ttd-content)':
            case 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/49.0.2623.75 Safari/537.36 Google Favicon':
            case 'BUbiNG (+http://law.di.unimi.it/BUbiNG.html)':
            case 'DomainCrawler/3.0 (info@domaincrawler.com; http://www.domaincrawler.com/example.com)':
            case 'Mozilla/5.0 (compatible; Ask Jeeves/Teoma; +http://about.ask.com/en/docs/about/webmasters.shtml)':
                req.body.isWebCrawler = true
                next()
            default:
                req.body.isWebCrawler = false
                next()
        }


    }catch(err){
        console.error(err.message)
        process.exit(0)
    }

}


module.exports = isWebCrawler