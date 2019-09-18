import axios from 'axios'
function getData (url, data) {
    return axios
            .get('http://api.duyiedu.com' + url, {
                params: {
                    appkey: '1419479392_1553871312917',
                    ...data
                }
            })
    
}
export { getData }