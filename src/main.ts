import './assets/main.css'
import { createApp } from 'vue'
import mitt from 'mitt'
import App from './App.vue'
import router from './router'

const emitter = mitt()
const app = createApp(App)
app.config.globalProperties.emitter = emitter
app.use(router)

app.config.globalProperties.$filters={
    toGrade(mark){
        if(mark > 90 && mark <=100){
            return 'O'
          }
          else if(mark >80 && mark <=90){
            return 'A+'
          }
          else if(mark >70 && mark <=80){
            return 'A'
          }
          else if(mark >60 && mark <=70){
            return 'B+'
          }
          else if(mark >=50 && mark <=60){
            return 'B'
          }
          else
            return 'RA'
          },
    // finalResult(total){
    //   if(total>250 && total<500){
    //     return 'pass'
    //   }
    //   else if(total>500){
    //     return 'Invalid mark'
    //   }
    //   else{
    //     return 'fail'
    //   }
    // }
    }
app.mount('#app')
