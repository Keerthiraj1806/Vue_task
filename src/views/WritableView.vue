<script>
export default {
  data() {
    return {
        a:9
    }
  },
  watch:{
    a(val){
        if(val>=10){
            alert('warning')
        }
    }
  }
}
</script>

<template>
    
    <div class="container">
        <div class="centered-div">
            <h1>Student Details</h1>
            <form>
                <label for="name">Name:</label>
                <input type="text" id="name" name="name" required><br>

                <label for="rollno">Roll Number:</label>
                <input type="text" id="rollno" name="rollno" required><br>

                <label for="email">Email:</label>
                <input type="email" id="email" name="email" required><br>

                <label for="gender">Gender:</label>
                <select id="gender" name="gender" required>
                    <option value="">Select</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="other">Other</option>
                </select><br>

                <label for="hobbies">Hobbies:</label>
                <input type="checkbox" id="hobby1" name="hobbies" value="reading">
                <label for="hobby1">Reading</label>
                <input type="checkbox" id="hobby2" name="hobbies" value="sports">
                <label for="hobby2">Sports</label>
                <input type="checkbox" id="hobby3" name="hobbies" value="music">
                <label for="hobby3">Music</label><br>

                <label for="phone">Phone Number:</label>
                <input type="tel" id="phone" name="phone" required><br>

                <label for="marks">Marks:</label>
                <input type="number" id="marks" name="marks" required><br>

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
            height: 100vh;
        }

        /* Style for the centered div */
        .centered-div {
            background-color: #f1f1f1;
            padding: 20px;
            width: 400px;
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