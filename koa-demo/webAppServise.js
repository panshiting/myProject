// var fs = require('fs') // 对系统文件和目录进行读写操作
// exports.getSearchData = function (key, start, end) {
//   return function (cb) {
//     var http = require('http')
//     var qs = require('querystring') // 对数据进行解析模块qs.parse,qs.stringify,qs.escape,qs.unescape
//     var data= {
//       key: key,
//       start: start,
//       end: end
//     }
//     var content = qs.stringify(data)
//     var htp_req = {
//       hostname: 'apicloud.mob.com',
//       port: 8090,
//       path: '/train/tickets/queryByStationToStation?' + content,
//       method: 'GET'
//     }
//     var req = http.request(htp_req, function(res){
//       var body = ''
//       res.setEncoding('utf-8')
//       res.on('data', function(chunk){
//         body += chunk
//       })
//       res.on('end', function(){
//         cb(null, body)
//       })
//     })
//     req.end()
//   }
// }
