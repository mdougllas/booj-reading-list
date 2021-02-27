import axios from 'axios'

export const googleBooksApi = axios.create(
    {
        baseURL: 'https://www.googleapis.com/books/v1',

        headers: {
            'key': 'AIzaSyCoyzAVLtJ0jYOXDbeq3rTtFMlNGOGDEcE',
            'Cache-control': 'no-cache',
            'Accept': '*/*',
          }
    }
)