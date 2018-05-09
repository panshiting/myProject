let Koa = require('koa')
let Router = require('koa-router')
let cors = require('koa-cors')
let fs = require('fs')

const app = new Koa()
const router = new Router()
router.get('/getJson', async ctx => {
  await cors()
  ctx.body = JSON.parse(fs.readFileSync('../static/material.json'))
})
// app.use(async ctx => {
//   ctx.body = JSON.parse(fs.readFileSync('../static/material.json'))
// })
app.use(router.routes()).use(router.allowedMethods())
app.listen(3001)
//  const koa = require('koa')
//  const controller = require('koa-route')
//  let app = new koa()

//  let service = require('./webAppService.js')
//  app.use(controller.get('/ajax/search',function*(){
//   this.set('Cache-Control','no-cache')
//   this.set('Access-Control-Allow-Origin','*')
//   var querystring = require('querystring')
//   var params = querystring.parse(this.req._parsedUrl.query)
//   var key = params.key
//   var start = params.start
//   var end = params.end
//   this.body = yield service.getSearchData(key,start,end)
// }))
// app.listen(3001)
console.log('Koa server is started')
