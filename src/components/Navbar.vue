<template>
  <div class="navbar-container">
    <nav class="navbar">
      <a class="navbar_link" href="`#${Home}`">Home</a>
      <a class="navbar_link" href="`#${About}`">About me</a>
      <a class="navbar_link" href="`#${Projects}`">Projects</a>
      <a class="navbar_link" href="`#${Experience}`">Experience</a>
      <a class="navbar_link" href="`#${Contact}`">Contact me</a>
    </nav>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  props: {
    home: String,
    about: String,
    experience: String,
    projects: String,
    contact: String
  },
  setup (props) {
    return {
      props
    }
  }
})
</script>

<style lang="scss">
@import "@/assets/global-styles.scss";

.navbar-container {
  position: sticky;
}

.navbar {
  display: flex;
  width: 50%;
  justify-content: space-around;
  float: right;
  border-bottom: solid 1px $dark-green;
}

.navbar_link {
  text-decoration: none;
  color: $text-color;
  padding: 5px;

  &:hover {
    background-color: $dark-green;
    border-radius: 10%;
  }
}

</style>
