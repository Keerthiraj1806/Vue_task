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
            editIndex:null,
            searchQuery:'',
            baseUrl:import.meta.env.VITE_BASE_URL
        }
    },
    mounted(){
        // axios.get('http://127.0.0.1:3333/products')
        //     .then((response)=>{
        //             this.products=response.data
        //         })
        this.getProduct()
    },
    // updated(){
    //     axios.get('http://127.0.0.1:3333/products')
    //         .then((response)=>{
    //                 this.products=response.data
    //             })
    // },
    methods:{
      async getProduct(){
        await axios.get(`${this.baseUrl}products`)
            .then((response)=>{
                    this.products=response.data
                })
      },
      async search(){
        await axios.get(`${this.baseUrl}products/search?searchQuery=${this.searchQuery}`)
        .then((response)=>{
          this.products=response.data
        })
      },
        addproduct(value){
            console.log(value)
            var product={
                productId:value.productId,
                productName:value.productName,
                productPrice:value.productPrice
            }
            let push=0
            if(this.products.length>0){
              this.products.forEach((prod)=>{
                if(product.productId==prod.product_id){
                  if(confirm(`This product already exist!!  Do you want to overwrite this product as ${product.productName}! `)){
                    axios.put(`${this.baseUrl}products/update`,product)
                    // .then(response=>{
                    //   this.getProduct()
                    // })
                    
                    alert('Updated successfully')
                    this.editIndex=null
                    this.getProduct()
                  }
                }
                else{
                    push+=1
                    if(push==this.products.length){
                      axios.post(`${this.baseUrl}products`,product)
                      alert('Inserted successfully')
                      this.getProduct()
                    }
                }
              })  
            }
            else{
                axios.post(`${this.baseUrl}products`,product)
                alert('Inserted successfully')
                this.getProduct()
            }
            },
        confirmUpdate(index){
          if(confirm('Do you want to update it..')){
            this.updateproduct(index)
          }
        },
        updateproduct(index){
            this.editProduct=this.products[index]
            this.getProduct()
        },
        deleteproduct(productId){
          axios.delete(`${this.baseUrl}products/${productId}`)
          alert('Deleted successfully')
          this.getProduct()
        },
        confirmDelete(productId){
          if(confirm('Do you want to delete this product?')){
            this.deleteproduct(productId)
          }
        }
    }
}
</script>

<template>
    <ProductForm @show="addproduct" :dataToUpdate="editProduct"></ProductForm><br>
    <div class="search">
                <label for="search">Search:</label>
                <input type="text" id="search" v-model="searchQuery" @input="search">
    </div><br><br>
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
                <tr v-for="(item,index) in this.products" :key="index">
                <td>{{ item.product_id }}</td>
                <td>{{ item.product_name }}</td>
                <td>{{ item.product_price }}</td>
                <td>
                    <button @click="updateproduct(index)">Update</button>
                </td>
                <td>
                    <button @click="confirmDelete(item.product_id)">Delete</button>
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
    margin-left: 50px;
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
  
  /* Style for the search input */
  .search {
    margin-bottom: 20px;
  }

  .search label {
    font-weight: bold;
    margin-right: 5px;
  }

  .search input[type="text"] {
    padding: 6px;
    font-size: 14px;
    border: 1px solid #ddd;
    border-radius: 4px;
  }

  .table {
    overflow-x: auto;
  }
</style>