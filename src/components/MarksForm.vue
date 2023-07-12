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
        this.total=this.english+this.tamil+this.maths+this.physics+this.chemistry
        this.emitter.emit("total", this.total)
        console.log(this.result,'total check')
        this.emitter.emit('result',this.result)
        }
    },
    watch:{
        total:{
            handler(value){
                console.log(value)
                if(this.total>250){
                    this.result='pass'
                }else{
                    this.result='fail'
            }
            },
            immediate:true
        }
    }
}
</script>

<template>
  <div class="form">
    <form @submit.prevent="calculateSum">
      <label for="subject1">English:</label>
      <input type="number" min="0" max="100" v-model="english"><br><br>
      <label for="subject2">Tamil:</label>
      <input type="number" min="0" max="100" v-model="tamil"><br><br>
      <label for="subject3">Maths:</label>
      <input type="number" min="0" max="100" v-model="maths"><br><br>
      <label for="subject4">Physics:</label>
      <input type="number" min="0" max="100" v-model="physics"><br><br>
      <label for="subject5">chemistry:</label>
      <input type="number" min="0" max="100" v-model="chemistry"><br><br>
      <button type="submit">Submit</button>
    </form>
  </div>
</template>