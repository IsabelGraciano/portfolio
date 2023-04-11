<template>
  <div class="home">
    <Navbar/>
    <MainInfo/>
    <About/>
    <Experience/>
    <Projects/>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component'
import Navbar from '../components/Navbar.vue'
import MainInfo from '../components/MainInfo.vue'
import About from '../components/About.vue'
import Experience from '../components/Experience.vue'
import Projects from '../components/Projects.vue'

@Options({
  components: {
    Navbar, MainInfo, About, Experience, Projects
  }
})
export default class Home extends Vue {}
</script>

<style lang="scss" scoped>
@import "@/assets/global-styles.scss";

.home {
  background-color: $bg-color;
}

</style>
