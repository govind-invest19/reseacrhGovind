import axios from 'axios';

const USER_API_BASE_URL = 'https://jsonplaceholder.typicode.com/users';
const USER_API_BASE_URL_CATEGORY = 'http://in19-trade-research-api.eba-3erkvgib.ap-south-1.elasticbeanstalk.com/';
const ENDPOINT_CATEGORY = 'find/scrip/regrex';
const ENDPOINT_CATEGORY_BYSCRIP = 'find/scrip/categories';
class ApiService {


    fetchCategory(category) {
        
        return axios.post(USER_API_BASE_URL_CATEGORY + ENDPOINT_CATEGORY, category );
    }


    fetchUsers() {
        return axios.get(USER_API_BASE_URL);
    }

    fetchUserById(userId) {
        return axios.get(USER_API_BASE_URL + '/' + userId);
    }

    deleteUser(userId) {
        return axios.delete(USER_API_BASE_URL + '/' + userId);
    }

    addUser(user) {
        return axios.post(""+USER_API_BASE_URL, user);
    }

    editUser(user) {
        return axios.put(USER_API_BASE_URL + '/' + user.id, user);
    }

}

export default new ApiService();