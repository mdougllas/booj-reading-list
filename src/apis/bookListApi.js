import axios from 'axios'

export const bookListApi = axios.create(
    {
        baseURL: 'https://booj-reading-list-api.herokuapp.com/api',

        headers: {
            'Authorization': `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIxIiwianRpIjoiYTUwNzA3YzhmZDk2MmNkZjk0YzI1Zjk1MTBhYjZhYzQwNmI1ZTU0Y2E4NzA1NTY0MWJlMGQ2ZWZkNjg5ZjVlY2NiZTFiMzEyYTY0ZTE3YWMiLCJpYXQiOiIxNjE0NDYwNjgzLjEyNDYxMCIsIm5iZiI6IjE2MTQ0NjA2ODMuMTI0NjE0IiwiZXhwIjoiMTY0NTk5NjY4My4xMDQ3NTQiLCJzdWIiOiIxIiwic2NvcGVzIjpbXX0.Z_JKFP-xIKpfQyCasENI3Qu0_oOb0oP5sSWixDdPvWOK2XtQTYN6yUr74utuoeQE06dL_cXgdVipgc2EKXdYs_1uxv2eZbFMEQfD8iogxWxTUxilRGbDx1iQM60X0adQbAY0R5Y6f8LRcLogVAFe53pKYyg3qKlRko-Rnw4KEwViKd_4lk-CSpKIzEHLSYx18C8XTYn4BzE_wpq9yEvPrJCgHQxBbsMZ6ziZWC2GULpZgmHx-l-jXZRPjfa1QEZ0PY-DLUF57SjyNUg4S15GMAi22h42OO8NVFS3DAr3L_VgEbjKINkznAHTh2Pce3qjLlR2E50zDCB0W6xJKKb05DG7W4ExPtkEUFyJrRTQ0nNOBd7rdj89QQpx9ebQd6OOHMSzOGr0uT4gAYPxqgbNSWCxyJT6OdamwB1-3H3ffGP-4lYztffzXfAc5lk85S10bkCsTtrpTxlP2SAsqcl8n_Usn7gtxSdIIbo0ksAVDqwLh9778uZk9rzTLveCT2u25LVwyDHuUexu2b2RgnuND1fQS8xPNowU29V6-Z5GFB9gZ1CjNJ7dwnx-fPflvwtuEDK_3_BOwAVChetaqk6vfEbnTJVa4ueyQvpa68Lbm8e1EefCRv0Y81F4KWaZLXhXmZbVBakx5bT3wD5zKKlDxTNy9Wu8TwmbUE5lcRIJ1VI`,
            'Content-Type': 'application/json'
        }
    }
)