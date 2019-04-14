<template>
  <div class="Top">
  <ul>
    <li><router-link to="/">Top</router-link></li>    
    <li><router-link to="/App">App</router-link></li>
  </ul>
  <router-view />
  </div>
</template>

<script lang="ts">
  import { Vue, Component } from 'vue-property-decorator';

  @Component({
    components: {

    }
  })
  export default class Index extends Vue {
  
  }
</script>
