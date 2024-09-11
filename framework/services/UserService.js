import axios from 'axios'


export const GetUser = async  (userID) => {
    return  await axios.get('https://bookstore.demoqa.com/Account/v1/GenerateToken',{
        userID
    })
}
export const DeleteUser = async  (userfordeleteID) => {
    return  await axios.delete('https://bookstore.demoqa.com/Account/v1/GenerateToken',{
        userfordeleteID
    })
}

//export default {GenerateToken}