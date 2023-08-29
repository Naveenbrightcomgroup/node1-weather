console.log('Client side javascript is running!')
// fetch('http://localhost:3000/weather?address=100')
//   .then((response) => {
//     console.log(response.latidude);
//     console.log(response.longitude);
//   }, (error) => {
//     console.log(error);
//   });
// axios.get('http://localhost:3000/weather?address=100')
//   .then((response) => {
//     if(response.data.error){
//         console.log(response.data.error)
//     }else{
//  console.log('data1',response.data.latitude)
//  console.log('data2',response.data.longitude)
//     }
//     // Code for handling the response
//   })
const weatherform = document.querySelector('form')
const search = document.querySelector('input')
const messageOne = document.querySelector('#message-1')
const messageTwo = document.querySelector('#message-2')
weatherform.addEventListener('submit', (e) => {
  e.preventDefault()
  const address = search.value
  messageOne.textContent = 'Loading...'
  messageTwo.textContent = ''
  axios.get('http://localhost:3000/weather?address=' + address)
    .then((response) => {
      if (response.data.error) {
        messageOne.textContent = response.data.error
      } else {
        messageOne.textContent = response.data.latitude
        messageTwo.textContent =  response.data.longitude
      }
    })

})
