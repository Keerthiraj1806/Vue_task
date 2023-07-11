<script>
import TheForm from '../components/TheForm.vue'
export default{
    components:{
        TheForm
    },

    data(){
        return {
            students:[],
            editIndex:null
    }
    },
    methods:{
        addstudent(value){
            if(this.students.length>0){
              this.students.forEach((student)=>{
                if(value.RollNumber==student.RollNumber){
                  student.Name=value.Name,
                  student.Email=value.Email,
                  student.Gender=value.Gender,
                  student.Hobbies=value.Hobbies,
                  student.PhoneNumber=value.PhoneNumber,
                  student.Marks=value.Marks,
                  this.editIndex=null
                }
                else{
                  this.students.push(value)
                  
                }
              });
               
            }
            else{
              this.students.push(value)
            }
            },
        deleteStudent(a){
          this.students= this.students.filter(std => std.RollNumber!=a)
          },
        updateStudent(index){
          this.editIndex=this.students[index]
        }
        }
    }
</script>

<template>
    <div>
      <TheForm @show="addstudent" :dataToUpdate="editIndex"></TheForm><br>
  
      <table class="student-table">
        <tr>
          <th>Name</th>
          <th>Roll Number</th>
          <th>Email</th>
          <th>Gender</th>
          <th>Hobbies</th>
          <th>Phone Number</th>
          <th>Marks</th>
          <th>Grade</th>
          <th>Edit</th>
          <th>Delete</th>
        </tr>
        <tr v-for="(person,index) in this.students" :key="index">
          <td>{{ person.Name }}</td>
          <td>{{ person.RollNumber }}</td>
          <td>{{ person.Email }}</td>
          <td>{{ person.Gender }}</td>
          <td>{{ person.Hobbies.join(', ') }}</td>
          <td>{{ person.PhoneNumber }}</td>
          <td>{{ person.Marks }}</td>
          <td>{{$filters.toGrade(person.Marks)}}</td>
          <td>
          <button class="edit-button" v-on:click="updateStudent(index)">Edit</button>
          </td>
          <td>
            <button class="delete-button" @click="deleteStudent(person.RollNumber)">Delete</button>
          </td>
        </tr>
      </table>
    </div>
  </template>
  
  <style scoped>
  .student-table {
  width: 100%;
  border-collapse: collapse;
}

.student-table th,
.student-table td {
  padding: 10px;
  text-align: left;
}
  
  .student-table th {
    background-color: #f2f2f2;
    color: #333;
    font-weight: bold;
  }
  
  .student-table td {
    border-bottom: 1px solid #ccc;
  }
  
  .student-table tr:last-child td {
    border-bottom: none;
  }
  
  .student-table tr:nth-child(even) {
    background-color: #f9f9f9;
  }
  
  .student-table tr:hover {
    background-color: #eaf6ff;
  }
  .edit-button {
  background-color: #4caf50;
  color: white;
  border: none;
  padding: 5px 10px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 12px;
  border-radius: 4px;
  cursor: pointer;
}

.delete-button {
  background-color: #f44336;
  color: white;
  border: none;
  padding: 5px 10px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 12px;
  border-radius: 4px;
  cursor: pointer;
}
  </style>