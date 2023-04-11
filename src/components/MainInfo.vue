<template>
  <div id="main-info" class="main-info">
    <img src="../assets/imgs/profile-pic.jpg" alt="profile-picture" class="main-info_image">
    <div>
      <h1>Name here</h1>
      <h3>Software Engineer</h3>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "@/assets/global-styles.scss";

.main-info {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding-top: 40px;
  column-gap: 100px;
  width: 100%;
}

.main-info_image {
  width: 300px;
  height: 400px;
  object-fit: cover;
  border: solid 2px black;
  padding: 8px;
}

</style>
