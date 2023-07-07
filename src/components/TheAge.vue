<script>
export default{
    data(){
        return{
            dob : null,
            today: null
        }
    },
    methods:{
        calculate_age() { 
                if(this.dob){
                    console.log(`Methods...`)
                    var present = new Date(this.today)
                    var birthday =new Date(this.dob)
                    var age = present.getTime()-birthday.getTime()
                    if(age<0){
                        return `Invalid date`
                    }
                    var age_dt = new Date(age)
                    return Math.abs(age_dt.getFullYear()-1970)
                }
            }
    },
    computed:{
        Calculate_age() { 
                if(this.dob){
                    console.log(`Computed...`)
                    var present = new Date(this.today)
                    var birthday =new Date(this.dob)
                    var age = present.getTime()-birthday.getTime()
                    if(age<0){
                        return `Invalid date`
                    }
                    var age_dt = new Date(age)
                    return Math.abs(age_dt.getFullYear()-1970)
                }
            }
    },
}
</script>

<template>
    <div class="main">
        <h1 style="text-align: center; color: rgb(137, 245, 251)">Age calculator</h1>
        <div class="birth">
            <h2>Enter your birthday:</h2>
            <input type="date" v-model="dob"><br>
        </div>
        <br><br>
        <div class="today">
            <h2>Enter present day:</h2>
            <input type="date" v-model="today"><br>
        </div>
        <br><br>
        <div class="method">
            <h4>Method output:</h4>
            <h4>{{ calculate_age() }}</h4><br>
        </div>
        <div class="computed">
            <p >Computed output:</p>
            <h4>{{ Calculate_age }}</h4><br>
        </div>
    </div>
</template>

<style scoped>
.main{
    border: 5px black solid;
    height: 750px;
    width: 600px;
}
.method{
    border: 2px gray solid;
    height: 75px;
    width: 50%;
    margin: 20px;
}
.computed{
    border: 2px gray solid;
    height: 75px;
    width: 50%;
    margin: 20px;
}
</style>