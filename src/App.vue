<template>
  <router-view/>
  <Home/>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Home from './views/Home.vue'

export default defineComponent({
  setup () {
    return Home
  }
})
</script>
