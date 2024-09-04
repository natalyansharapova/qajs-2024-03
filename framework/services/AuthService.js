import axios from 'axios'


export const GenerateToken = async  (userName, password) => {
    return  await axios.post('https://bookstore.demoqa.com/Account/v1/GenerateToken',{
        userName,
        password
    })

}

//export default {GenerateToken}