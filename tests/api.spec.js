describe('Пользовтель', () => {
  it('Повторный логин', async () => {

    const user = { 
        userName: 'fakeUser', // пользователь создан заранее
        password: 'fakeUser2!'
    };

    const response = await fetch('https://bookstore.demoqa.com/Account/v1/User', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(user)
    })
  
    expect(response.status).toEqual(406)
 })  

    it('Некорректный пароль', async () => {

      const user = { 
          userName: 'fakeUser2',
          password: 'fakeUser2'
      };

      const response = await fetch('https://bookstore.demoqa.com/Account/v1/User', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(user)
      })
    
      expect(response.status).toEqual(400)
   })  

//  it('Создание пользователя', async () => {

//    const user = { 
//       userName: 'fakeUser3',
//       password: 'fakeUser2!'
//   };

//    const response = await fetch('https://bookstore.demoqa.com/Account/v1/User', {
  //   method: 'POST',
  //    headers: { 'Content-Type': 'application/json' },
  //    body: JSON.stringify(user)
//    })
  
 //   expect(response.status).toEqual(201)
// }) 
})
  

 describe('Токен', () => {
  it('Токен с ошибкой', async () => {

    const user = { 
        userName: 'fakeUser',
        password: '1'
    };

    const response = await fetch('https://bookstore.demoqa.com/Account/v1/GenerateToken', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(user)
    })
  
   const data = await response.json() 
   expect(data.status).toBe('Failed')
   expect(response.status).toEqual(200)
 }) 

 it('Токен сгенерирован', async () => {

  const user = { 
      userName: 'fakeUser',
      password: 'fakeUser1!'
  };

  const response = await fetch('https://bookstore.demoqa.com/Account/v1/GenerateToken', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(user)
  })

  const data = await  response.json() 
  expect(data.status).toBe('Success')
  expect(response.status).toEqual(200)
}) 
 })