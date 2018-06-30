<template>
  <div class="custumersDetails container">
   <h1 class="display-4 text-center">Custumers Details</h1>
  <br>
  <div class="row">
    <div class="col-10">
    </div>
    <div class="col-2">
      <button class="btn btn-danger bt-md" v-on:click="deleteMethod(custumers.id)">Delete</button>
      <router-link class="btn btn-warning btn-md" v-bind:to="'/update/'+custumers.id">Edit</router-link>
    </div>
  </div>
  <br>
  <div class="row">
  <div class="card text-white bg-primary mb-3 text-center">
  <div class="card-header">Custumer Details</div>
  <div class="card-body">
    <h4 class="card-title">{{custumers.title}}</h4>
    <p class="card-text">{{custumers.body}}</p>
  </div>
    <div class="card-footer text-muted">
    <router-link class="btn btn-secondary btn-block" to='/'>Go Back</router-link>
  </div>
</div>
</div>
</div>
</template>

<script>
export default {
  name: 'CustumersDetails',
  data () {
    return {
      custumers : ''
    }
  },
  methods : {
        fetchOneCustumers(id){
      this.$http.get('https://jsonplaceholder.typicode.com/posts/'+id)
      .then(function(response){
        console.log(response.data);
         this.custumers=response.data;
      });
  },
  deleteMethod(id){
  this.$http.delete('https://jsonplaceholder.typicode.com/posts/'+id)    
    .then(function(response){
      this.$router.push({path:'/',query:{alert : 'Detele Successfully'}});
    });
  }
},
created : function(){
  this.fetchOneCustumers(this.$route.params.id);
 // console.log(response.data);
}
}
</script>

<style scoped>
</style>
