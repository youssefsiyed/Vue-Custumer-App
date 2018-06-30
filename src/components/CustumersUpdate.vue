<template>
  <div class="custumersupdate container-fluid">
        <h1 class="display-4 text-center">Update Custumers</h1>
        <form v-on:submit="updateCustumer($event)">
    <div class="form-group">
      <label for="">Title</label>
      <input type="text" class="form-control" placeholder="Enter The Title" v-model="custumer.title">
    </div>
    <div class="form-group">
      <label for="">Body</label>
      <input type="text" class="form-control" placeholder="Enter The Body" v-model="custumer.body">
    </div>
    <br>
    <button type="submit" class="btn btn-primary btn-block">Update</button>
</form>
  </div>
</template>

<script>
export default {
  name: 'CustumersUpdate',
  data () {
    return {
      custumer :''
    }
  },
  methods : {
    fetchOneCustumers(id){
      this.$http.get('https://jsonplaceholder.typicode.com/posts/'+id)
      .then(function(response){
        console.log(response.data);
         this.custumer=response.data;
      });
    },
   updateCustumer(e){
     if(!this.custumer.title || !this.custumer.body){
        alert('Plz Enter the All Field');
      }else {
      let updateCustumer ={
        title : this.custumers.title,
        body : this.custumers.body
      }
       this.$http.put('https://jsonplaceholder.typicode.com/posts/'+this.$route.params.id,updateCustumer)
      .then(function (response){
          alert('Update succesfull!!!');
          this.$router.push({path:'/',query:{alert : 'Update Successfully'}});
      });
      }
   } 
  },
  created : function(){
  this.fetchOneCustumers(this.$route.params.id);
}

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
