<script>
import '@fortawesome/fontawesome-free/css/all.css'
import MarksForm from '../components/MarksForm.vue'
export default {
    components:{
        MarksForm
    },
    props:{
        dataToUpdate:{
            type: Object,
            default : null
        }
    },
  data(){
    return{
        Name:"",
        RollNumber:"",
        Email:"",
        Gender:"",
        Hobbies:[],
        PhoneNumber:"",
        Marks:"",
        Result:"",
        student: {},
        searchQuery:''
    }
  },
  methods:{
    show(){
        this.student={
            Name:this.Name,
            RollNumber:this.RollNumber,
            Email:this.Email,
            Gender:this.Gender,
            Hobbies:this.Hobbies,
            PhoneNumber:this.PhoneNumber,
            Marks:this.Marks,
            Result:this.Result
        }
        this.$emit('show',this.student)
        this.resetForm()
    },
    resetForm() {
      this.Name = "";
      this.RollNumber = "";
      this.Email = "";
      this.Gender = "";
      this.Hobbies = [];
      this.PhoneNumber = "";
      this.Marks = "",
      this.Result=''
    }
    },
    watch :{
        dataToUpdate:{
            handler(value){
                console.log(value)
                if(value!=null){
                    this.Name=value.Name,
                    this.RollNumber=value.RollNumber,
                    this.Email=value.Email,
                    this.Gender=value.Gender,
                    this.Hobbies=value.Hobbies,
                    this.PhoneNumber=value.PhoneNumber,
                    this.Marks=value.Marks
                }
            },
            immediate: true         
        }
    },
    mounted(){
        this.emitter.on('total',marks=>{
            this.Marks=marks
        })
        this.emitter.on('result',result=>{
            this.Result=result
        })
    }
    }
</script>

<template>
    
    <div class="container">
        <div class="centered-div">
            <h1>Student Details</h1>
            <form @submit.prevent="show">
                <label for="name">Name:</label>
                <input type="text" id="name" name="name" pattern="[A-Za-z\s]+" v-model="Name" required><br>

                <label for="rollno">Roll Number:</label>
                <input type="text" id="rollno" name="rollno"  pattern="[A-Za-z0-9]+" v-model="RollNumber"><br>

                <label for="email">Email:</label>
                <input type="email" id="email" name="email" v-model="Email" required><br>

                <label for="gender">Gender:</label>
                    <div class="gender-icons">
                    <label>
                        <input type="radio" name="gender" value="male" v-model="Gender" required>
                        <img src="./icons/male-gender.png" alt="Male" class="gender-icon">
                    </label>
                    <label>
                        <input type="radio" name="gender" value="female" v-model="Gender" required>
                        <img src="./icons/femenine.png" alt="Female" class="gender-icon">
                    </label>
                    <label>
                        <input type="radio" name="gender" value="other" v-model="Gender" required>
                        <img src="./icons/gender.png" alt="Others" class="gender-icon">
                    </label>
                    </div><br>
                <div class="hobbies">
                    <label for="hobbies">Hobbies:</label>
                    <input type="checkbox" id="hobby1" name="hobbies" value="reading" v-model="Hobbies">
                    <label for="hobby1">Reading</label>
                    <input type="checkbox" id="hobby2" name="hobbies" value="sports" v-model="Hobbies">
                    <label for="hobby2">Sports</label>
                    <input type="checkbox" id="hobby3" name="hobbies" value="music" v-model="Hobbies">
                    <label for="hobby3">Music</label><br>
                </div>

                <label for="phone">Phone Number:</label>
                <input type="tel" id="phone" name="phone" pattern="[0-9]{10}"  v-model="PhoneNumber" required><br>
                <MarksForm></MarksForm>
                <!-- <label for="marks">Marks:</label>
                <input type="number" id="marks" name="marks" placeholder="0-100" min="0" max="100" v-model="Marks" required><br> -->

                <input type="submit" value="Submit">
            </form>
        </div>
    </div>
</template>
<style scoped>
    .container {
            display: flex;
            justify-content: center;
            align-items: center;
            height: fit-content;
        }
    .hobbies{
        border: 2px white solid;
    }

        /* Style for the centered div */
        .centered-div {
            background-color: #f1f1f1;
            padding: 20px;
            width: 700px;
            text-align: center;
        }

        /* Style for form labels */
        .centered-div label {
            display: block;
            text-align: left;
            margin-bottom: 5px;
        }

        /* Style for form inputs */
        .centered-div input,
        .centered-div select {
            width: 100%;
            padding: 8px;
            margin-bottom: 10px;
            border: 1px solid #ccc;
            border-radius: 4px;
        }

        /* Style for checkboxes */
        .centered-div input[type="checkbox"] {
            display: inline-block;
            width: auto;
            margin-right: 5px;
        }
        .gender-icon {
            width: 24px;
            height: 24px;
            }

        /* Style for submit button */
        .centered-div input[type="submit"] {
            background-color: #4CAF50;
            color: white;
            border: none;
            padding: 10px 16px;
            text-align: center;
            text-decoration: none;
            display: inline-block;
            font-size: 14px;
            border-radius: 4px;
            cursor: pointer;
        }

</style>