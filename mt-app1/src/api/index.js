import axios from '../axios'

var api={
    searchHotWords(params){
         return  axios.get('/api/meituan/header/searchHotWords.json',params);
    },
    search(){
        return axios.get('/api/meituan/header/search.json');
    },
    getMenuList(){
        return axios.get('/api/meituan/index/nav.json');
    },
    resultsByKeywords(){
        return axios.get('/api/meituan/index/resultsByKeywords.json');
    },
    getGoodsList(){
        return axios.get('/api/meituan/list/goodsList.json');
    },
    getHotCity(){
        return axios.get('/api/meituan/city/hot.json');
    },
    getRecentCity(){
        return axios.get('/api/meituan/city/recents.json');
    },
    getProvince(){
        return axios.get('/api/meituan/city/province.json');
    },
    getCurposition(){
        return axios.get('/api/meituan/city/getPosition.json');
    },
    getCityList(){
        return axios.get('/api/meituan/city/cityList.json');
    },
    login(params){
        return axios.get('/api/meituan/login',params);
    },
    register(params){
        return axios.get('/api/meituan/register',params);
    },
}

export default api;