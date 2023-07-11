<script>
import axios from 'axios'
import ProductForm from '../components/ProductForm.vue'
export default{
    components:{
        ProductForm
    },
    data(){
        return{
            products:[],
            editIndex:null
        }
    },
    mounted(){
        axios.get('http://127.0.0.1:3333/products')
            .then((response)=>{
                    this.products=response.data
                })
    },
    updated(){
        axios.get('http://127.0.0.1:3333/products')
            .then((response)=>{
                    this.products=response.data
                })
    },
    methods:{
        addproduct(value){
            console.log(value)
            var product={
                productId:value.productId,
                productName:value.productName,
                productPrice:value.productPrice
            }
            console.log(product,'product object')
            console.log(this.products.length,this.products,value,'value from prop')
            if(this.products.length>0){
              this.products.forEach((prod)=>{
                console.log(product.productId,prod.product_id)
                if(product.productId==prod.product_id){
                  console.log(product)
                  axios.put('http://127.0.0.1:3333/products/update',product)
                  this.editIndex=null
                }
                else{
                    axios.post('http://127.0.0.1:3333/products',product)
                }
              })
               
            }
            else{
                axios.post('http://127.0.0.1:3333/products',product)
            }
            },
        updateproduct(index){
            this.editIndex=this.products[index]
            console.log(this.editIndex,'button check')
        },
        deleteproduct(index){

        }
    }
}
</script>

<template>
    <ProductForm @show="addproduct" :dataToUpdate="editIndex"></ProductForm><br>
    <div class="table">
        <table>
            <thead>
                <tr>
                <th>Product ID</th>
                <th>Product Name</th>
                <th>Product Price</th>
                <th>update</th>
                <th>delete</th>
                </tr>
            </thead>
            <tbody>
                <!-- Loop through the data and create a table row for each item -->
                <tr v-for="item,index in this.products" :key="index">
                <td>{{ item.product_id }}</td>
                <td>{{ item.product_name }}</td>
                <td>{{ item.product_price }}</td>
                <td>
                    <button @click="updateproduct(index)">Update</button>
                </td>
                <td>
                    <button @click="deleteproduct(item.product_id)">Delete</button>
                </td>
                </tr>
            </tbody>
            </table>
    </div>
</template>
<style>
  table {
    width: 100%;
    border-collapse: collapse;
    margin-bottom: 20px;
  }

  th, td {
    padding: 8px;
    text-align: left;
    border-bottom: 1px solid #ddd;
  }

  th {
    background-color: #f5f5f5;
    font-weight: bold;
  }


  td button {
    padding: 6px 12px;
    font-size: 14px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
  }

  /* Style for the update button */
  td button.update {
    background-color: #4caf50;
    color: #fff;
  }

  /* Style for the delete button */
  td button.delete {
    background-color: #f44336;
    color: #fff;
  }
    
</style>