<script>
export default{
    data() {
        return {
        english:'',
        tamil:'',
        maths:'',
        physics:'',
        chemistry:'',
        total:'',
        result:''
        };
    },
    methods: {
        calculateSum() {
        this.total=parseInt(this.english)+parseInt(this.tamil)+parseInt(this.maths)+parseInt(this.physics)+parseInt(this.chemistry)
        console.log(this.result,'total check')
        },
        resetForm(){
            this.english='',
            this.tamil='',
            this.maths='',
            this.physics='',
            this.chemistry=''
        }
    },
    watch:{
        total:{
            handler(value){
                console.log(value,'inside watcher')
                if(value>=250 && value<=500){
                    this.result='pass'
                    this.emitter.emit("total", this.total)
                    this.emitter.emit('result',this.result)
                    alert('Data inserted successfully')
                    this.resetForm()
                }
                else if(value>0 && value<250)
                {
                    this.result='fail'
                    this.emitter.emit("total", this.total)
                    this.emitter.emit('result',this.result)
                    alert('Data inserted successfully')
                    this.resetForm()
                }
            },
            deep:true
        }
    },
    directives:{
        'mark-directive':{
            mounted(el){
                el.addEventListener('input',()=>{
                    const value=Number(el.value)
                    if(isNaN(value)|| value<0 || value>100){
                        el.value=''
                        alert('Enter a valid mark')
                    }
                })
            }
        }
    }
}
</script>

<template>
  <div class="form">
    <form @submit.prevent="calculateSum">
      <label for="subject1">English:</label>
      <input  v-mark-directive v-model="english"><br><br>
      <label for="subject2">Tamil:</label>
      <input  v-mark-directive v-model="tamil"><br><br>
      <label for="subject3">Maths:</label>
      <input  v-mark-directive v-model="maths"><br><br>
      <label for="subject4">Physics:</label>
      <input  v-mark-directive v-model="physics"><br><br>
      <label for="subject5">chemistry:</label>
      <input  v-mark-directive v-model="chemistry"><br><br>
      <button type="submit">Submit</button>
    </form>
  </div>
</template>