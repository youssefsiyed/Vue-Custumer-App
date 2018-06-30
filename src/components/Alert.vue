<template>
  <div class="alert">
    <div class="alert alert-success alert-dismissible fade show" role="alert">
  <strong>{{message}}</strong> You should check in on some of those fields below.
  <button type="button" class="close" data-dismiss="alert" aria-label="Close">
    <span aria-hidden="true">&times;</span>
  </button>
</div>
  </div>
</template>

<script>
export default {
  name: 'Alert',
  props : ['message'],
  data () {
    return {

    }
  }
}
</script>

<style scoped>
</style>
