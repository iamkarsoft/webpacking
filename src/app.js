import './assets/styles/app.scss'
if(process.env.NODE_ENV==='prod'){
  console.log('we are in production')
}

console.log(process.env.API_URL)