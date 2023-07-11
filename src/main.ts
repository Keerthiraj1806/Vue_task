import './assets/main.css'
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

const app = createApp(App)

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
          }
    }

app.mount('#app')
