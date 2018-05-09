import axios from 'axios'
axios.defaults.headers.post['Content-Type'] = 'application/json'

function requireAll (r) { return r.keys().map(r) }

// 测试
window.host = 'http://testapi.thaipaymall.com'

const apis = requireAll(require.context('./', true, /\.js$/))
let allApi = apis.reduce((apis, api) => Object.assign(apis, api), {})
export default allApi
