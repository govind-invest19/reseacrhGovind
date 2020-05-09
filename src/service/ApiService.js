import axios from 'axios';

const USER_API_BASE_URL = 'https://jsonplaceholder.typicode.com/users';
const USER_API_BASE_URL_CATEGORY = 'http://in19-trade-research-api.eba-3erkvgib.ap-south-1.elasticbeanstalk.com/';
const ENDPOINT_CATEGORY = 'find/scrip/regrex';
const ENDPOINT_CATEGORY_BYSCRIP = 'find/scrip/categories';
class ApiService {

    fetchCategoryTest(category) {
        console.log('govind1' + JSON.stringify(category));
        console.log('govind2' + JSON.stringify(axios.post(USER_API_BASE_URL_CATEGORY + ENDPOINT_CATEGORY, category )));
      
        //return axios.post(USER_API_BASE_URL_CATEGORY + ENDPOINT_CATEGORY, category );
        let data = {};
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');
        fetch(USER_API_BASE_URL_CATEGORY + ENDPOINT_CATEGORY, {
        method: 'POST', // or 'PUT'
        headers: headers,
        body: JSON.stringify(category), 
        })
        .then((response) => response.json())
        .then((data) => {
        //alert("----data"+JSON.stringify(data)+"----response"+JSON.stringify(response));
        //alert("----data"+JSON.stringify(data)+"----response"+JSON.stringify(response));
        console.log('Success:', data);
        return JSON.stringify(data);
        })

        .catch((error) => {
        alert("----error"+error);
        console.error('Error:', error);
        });
        return JSON.stringify(data);
    }

    fetchCategory(category) {
       // alert('----------hello1'+JSON.stringify(category));
        
      // var resp= axios.post(USER_API_BASE_URL_CATEGORY + ENDPOINT_CATEGORY, category );
     //  alert('----------hello2'+resp);
     let a= axios.post(USER_API_BASE_URL_CATEGORY + ENDPOINT_CATEGORY, category );
     //alert('----------hello2'+JSON.stringify(a));
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