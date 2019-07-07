import 'styles/app.scss'
import * as api from '@/app/api'


api.getPosts().then((response)=>{
  console.log(response)
})
 