<script>
export default{
    props:['employees']
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
        border: 2px black solid;
        text-align: center;
        border-collapse: collapse;
    }
    table{
        align-self: center;
        height: fit-content;
        width: 400px;
    }
</style>