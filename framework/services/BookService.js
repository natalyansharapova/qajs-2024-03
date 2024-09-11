import axios from 'axios'
import config from '../config/config'

//Создание книги
export const CreateBook = async  (userId,isbn) => {
    return  await axios.post('https://bookstore.demoqa.com/BookStore/v1/Books',{
        userId,
        collectionOfIsbns: [
    {
      isbn
    }]
    },
    {headers: { Authorization: `Bearer ${config.token}` }})
}

//Получение данных книги
export const GetBook = async  (ISBN) => {
    return  await axios.get('http://bookstore.demoqa.com/BookStore/v1/Book',
        { params: { ISBN}},
        {headers: { Authorization: `Bearer ${config.token}` }}) 
}

//Удаление данных книги
export const DeleteBook = async  (ISBN, userID) => {
    return  await axios.delete('http://bookstore.demoqa.com/BookStore/v1/Book',
       {headers: { Authorization: `Bearer ${config.token}` }},
       { ISBN,userID}) 
}