<script>
//options
export default{
data(){
    return {
        employees:[{Name:'Praveen',Age: 25,Company: 'Wipro'},
            {Name:'Vino',Age:21,Company: 'Afcon'},
            {Name:'Kavin',Age:28,Company:'TCS'},
            {Name:'Nirmal',Age:20,Company:'CTS'}]
    }
}
}
</script>
<template>
    <table class="table">
        <tr>
            <th class="table">Name</th>
            <th class="table">Age</th>
            <th class="table">Company</th>
        </tr>
        <tr v-for="person in employees">
            <td class="table">{{ person.Name }}</td>
            <td class="table">{{ person.Age }}</td>
            <td class="table">{{ person.Company }}</td>
        </tr>
    </table>
</template>

<style scoped>
    .table{
        border: 2px black dotted;
        text-align: center;
        border-collapse: collapse;
    }
</style>
