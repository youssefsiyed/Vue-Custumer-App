<template>
  <div class="custumers container">
    <Alert v-if="alert" v-bind:message="alert"></Alert>
    <h1 class="display-4 text-center">Custumers</h1>
        <div class="form-group">
      <label for="">Search</label>
      <input type="text" class="form-control" placeholder="Enter The Search Key" v-model="search">
    </div>
    <br>
    <table class="table table-striped">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Title</th>
      <th scope="col">Body</th>
      <th scope="col"></th>
    </tr>
  </thead>
  <tbody>
    <tr v-for="c in filterBy(custumers,search)" v-bind:key="c.id">
      <th scope="row">{{c.id}}</th>
      <td>{{c.title}}</td>
      <td>{{c.body}}</td>
      <td><router-link class="btn btn-info" v-bind:to="'/custumers/'+c.id">View</router-link></td>
    </tr>
  </tbody>
</table>
  </div>
</template>

<script>
import Alert from './Alert.vue'

export default {

  name: 'Custumers',
  data () {
    return {
      custumers :[],
      search : '',
      alert : ''
    }
  },
  methods : {
    fetchCustumers(){
      this.$http.get('https://jsonplaceholder.typicode.com/posts')
      .then(function(response){
         this.custumers=response.data;
      });
    },
    filterBy(list,value){
      return list.filter(function(custumer){
          return custumer.title.indexOf(value) > -1;
      })
    }
    },
      created : function(){
        //  if(this.$route.query.alert)
          this.alert =this.$route.query.alert;
           this.fetchCustumers();
    },
      updated : function(){
      //this.fetchCustumers();
    },
    components : {
      Alert
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
