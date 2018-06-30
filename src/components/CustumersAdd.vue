<template>
  <div class="custumersAdd container-fluid">
        <h1 class="display-4 text-center">Add Custumers</h1>
<form v-on:submit="addCustumer($event)">
    <div class="form-group">
      <label for="">Title</label>
      <input type="text" class="form-control" placeholder="Enter The Title" v-model="custumer.title">
    </div>
    <div class="form-group">
      <label for="">Body</label>
      <input type="text" class="form-control" placeholder="Enter The Body" v-model="custumer.body">
    </div>
    <br>
    <button type="submit" class="btn btn-primary btn-block">Submit</button>
</form>
  </div>
</template>

<script>
export default {
  name: 'CustumersAdd',
  data () {
    return {
      custumer : {}
    }
  },
  methods : {
    addCustumer(e){
      if(!this.custumer.title || !this.custumer.body){
        alert('Plz Enter the All Field');
      }else {
          let NewCustumer ={
            id : 101,
            title : this.custumer.title,
            body : this.custumer.body
          }
      this.$http.post('https://jsonplaceholder.typicode.com/posts',NewCustumer)
      .then(function (response){
          alert('Add succesfull!!!');
          this.$router.push({path:'/',query:{alert : 'Add Successfully'}});
      });   
      e.preventDefault();
          
      }
    }
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
