<template>
  <div id="app">
    <router-view/>
  </div>
</template>
<script lang="ts">
  import {State, Getter, Mutation, Action} from 'vuex-class'
  import { Component, Vue } from "vue-property-decorator"
  @Component({
    components:{}
  })
  export default class App extends Vue {
    @Action("setUser") setUser:any;
    created(){
      this.setUser(localStorage.tsToken);
    }
  }
</script>
<style lang="scss">
#app {
  width: 100%;
  height: 100%;
}
</style>
