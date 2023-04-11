<template>
  <div class="about-me">
    <h1 class="about-me_title">About me</h1>
    <div class="about-me_information">
      <img src="../assets/imgs/post2.jpg" alt="profile-picture" class="about-me_image">
      <p class="about-me_description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet, eum molestias. Odio velit temporibus earum repudiandae odit beatae fuga exercitationem culpa minus voluptatem quo est, provident dolorum maiores deleniti officiis?</p>
    </div>
  </div>
</template>

<style lang="scss" scoped>

.about-me {
  padding-top: 40px;
}

.about-me_image {
  width: 200px;
  height: 300px;
  object-fit: cover;
  border: solid 2px black;
  padding: 8px;
}

.about-me_title {
  text-align: center;
}

.about-me_description {
  width: 40%;
}

.about-me_information {
  display: flex;
  flex-direction: row;
  gap: 30px;
  justify-content: center;
  align-items: center;
  width: 100%;
}

</style>
