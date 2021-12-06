import axios from 'axios'

var http
var token, lang
const BASEURL = "http://example.com/v1"

class APIProvider {

  constructor () {

    http = axios.create({
        baseURL: BASEURL,
        headers: { 'Content-Type': 'application/json' }
    })

    //攔截處理
    http.interceptors.request.use(function (config) {
        config.headers.Authorization =  `Bearer ${token}`;
        config.headers['Accept-Language'] =  `${lang}`;
        return config;
    }, function (error) {
        return Promise.reject(error);
    });
    
    //攔截處理
    http.interceptors.response.use(function (response) {
        return response;
    }, function (error) {
        return Promise.reject(error);
    });


    //default
    this.login('AAABBBCCC')
    this.lang('zh-CN')
  }

  login (_token) {
    token = _token
    // http.defaults.headers.common.Authorization = `Bearer ${token}`
  }

  lang (_lang) {
    lang = _lang
    // http.defaults.headers.common['Accept-Language'] = lang
  }

  //api1
  find (id) {
    return http.get(`item/${id}`)
  }

}

export default new APIProvider({
})