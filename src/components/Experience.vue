<template>
  <div class="experience">
    <h1 class="experience_title">Job experience</h1>
    <div class="experience_information">
      <h3>Sofware engineer</h3>
      <h5>Playvox. Manizales, Colombia</h5>
      <h5>2021/06 - present</h5>
      <p class="experience_playvox">
        As an Associate Frontend Developer at Playvox, a leader in quality assurance software for contact centers, I excelled in the following roles and responsibilities:
        <ul>
          <li>
            Created and maintained vital components used by all engineering teams in the company, ensuring seamless and efficient operations.
          </li>
          <li>
            Utilized clean code, BEM methodology, and the best practices in Vue to deliver valuable code that meets the highest standards.
          </li>
          <li>
            Contributed significantly to the design system, documenting components, and providing guidance on their proper usage to ensure consistency and optimal functionality.
          </li>
          <li>
            Conducted extensive research to enhance processes and practices within my assigned team, leading to increased productivity and innovation.
          </li>
          <li>
            Collaborated closely with the UX team, ensuring a user-friendly and seamless experience for all users.
          </li>
        </ul>
        My technical expertise includes proficiency in the following technologies and tools:
        <ul><li>
          HTML/CSS, JavaScript, TypeScript, Vue2, Vue3, Jest, Linux, and Git.
        </li></ul>
        I am confident in my ability to deliver high-quality code, meet strict deadlines, and exceed expectations while maintaining a commitment to ongoing learning and professional development.
      </p>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "@/assets/global-styles.scss";

.experience{
  padding-top: 40px;
}

.experience_title {
  text-align: center;
}

.experience_information {
  text-align: justify;
  border-left: solid 2px $dark-green;
  padding-left: 15px;
  margin-left: 20%;
  margin-right: 20%;
}

</style>
