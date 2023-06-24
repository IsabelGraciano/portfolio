<template>
  <div class="home">
    <Navbar :home="Home" :experience="Experience"/>
    <MainInfo/>
    <Projects/>
    <Experience/>
    <Contact class="contact" />
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component'
import Navbar from '../components/Navbar.vue'
import MainInfo from '../components/MainInfo.vue'
import Experience from '../components/Experience.vue'
import Projects from '../components/Projects.vue'
import Contact from '../components/Contact.vue'

@Options({
  components: {
    Navbar, MainInfo, Experience, Projects, Contact
  }
})
export default class Home extends Vue {}
</script>

<style lang="scss" scoped>
@import "@/assets/global-styles.scss";

.home {
  background-color: $bg-color;
}

.contact {
  margin-top: 80px;
  margin-bottom: 80px;
}

</style>
