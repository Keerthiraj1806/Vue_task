<script>
//options
import TheTable from '../components/TheTable.vue'
export default{
    //import { ref } from 'vue';
    //const employees = ref([{ Name:'Praveen',Age:25,Company: 'Wipro'}, { Name:'Kavin',Age:24,Company: 'Afcon'},{ Name:'vino',Age:26,Company: 'Kgr'}])
    components:{
        TheTable
    },
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
    <TheTable :employees="employees"></TheTable>
</template>
