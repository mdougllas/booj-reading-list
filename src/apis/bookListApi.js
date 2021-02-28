import axios from 'axios'

export const bookListApi = axios.create(
    {
        baseURL: 'https://booj-reading-list-api.herokuapp.com/api',

        headers: {
            'Content-Type': 'application/json'
        }
    }
)