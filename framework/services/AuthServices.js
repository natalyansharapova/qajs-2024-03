import axios from 'axios'

axios.defaults.url = 'https://bookstore.demoqa.com'
export const GenerateToken = async ({un, pass}) => {
    const response  = await axios.post('/Account/v1/GenerateToken',{
        userName: un,
        password: pass
    })
    return {
        headers: response.headers,
        status: response.status
    }
}

//export default {GenerateToken}