const axios = require('axios')

class BaseApi {
    constructor(){
    }

    MovieApi(){
        return axios.get('https://www.majorcineplex.com/apis/get_movie_avaiable')
    }
}

module.exports = BaseApi;