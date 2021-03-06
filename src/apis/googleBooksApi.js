import axios from 'axios'

export const googleBooksApi = axios.create(
    {
        baseURL: 'https://www.googleapis.com/books/v1',

        headers: {
            'Content-Type': 'application/json'
        }
    }
)