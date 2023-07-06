<script setup lang="ts">
//composition
import { ref } from 'vue';
const employees = ref([{ Name:'Praveen',Age:25,Company: 'Wipro'}, { Name:'Kavin',Age:24,Company: 'Afcon'},{ Name:'vino',Age:26,Company: 'Kgr'}])
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
        border: 2px;
        border-color: black;
        border-style: solid;
        text-align: center;
    }
</style>