import axios from 'axios';
import React from 'react'
const USER_API_BASE_URL = 'https://jsonplaceholder.typicode.com/users';


class ApiService {

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