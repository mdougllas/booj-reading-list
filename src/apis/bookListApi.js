import axios from 'axios'

export const bookListApi = axios.create(
    {
        baseURL: 'http://localhost:8000/api',
        // baseURL: 'https://booj-reading-list-api.herokuapp.com/api',

        headers: {
            'Content-Type': 'application/json'
        }
    }
)