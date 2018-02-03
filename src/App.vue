<template>
  <div id="app">
    <p>hello word</p>
  </div>
</template>

<script>
  import Vue from 'vue';
  let encodeParams = Vue.url.params;
export default {
  data(){
    return {
      params: {
        a: 123,
      }
    };
  },
  created(){
    console.log(encodeParams(this.params));
  },
}
</script>
