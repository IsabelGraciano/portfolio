<template>
  <div id="main-info" class="main-info">
    <img src="../assets/imgs/isabel.jpg" alt="profile-picture" class="main-info_image">
    <div>
      <h1>Isabel Graciano</h1>
      <h3>Software Engineer</h3>
      <p class="about-me_description">Software engineer with a focus on front-end development, delivering high-quality code with a detail-oriented approach. I have excelent communication, organizational skills, and awillingness to learn and collaborate on every project.</p>
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
  border: solid 2px $dark-green;
  padding: 8px;
}

.about-me_description {
  width: 30rem;
}

</style>
