import axios from 'axios'
const host = 'http://localhost:3001/ajax/search?'

export function getData (data) {
  return axios.get(host, {params: data}).then(res => {
    return Promise.resolve
  })
}
