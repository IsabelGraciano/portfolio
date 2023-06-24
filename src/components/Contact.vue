<template>
  <div class="form_container">
    <form class="contact_form" action="https://formspree.io/f/mjvqbvze" method="post" ajax>
      <label class="form_label" for="email">Your Email</label>
      <input class="form_input" name="Email" id="email" type="email">

      <label class="form_label" for="message">Your message</label>
      <textarea class="form_input" name="Message" id="message" rows="8" cols="50" />

      <button class="form_button_submit" type="submit">Submit</button>
    </form>
  </div>
</template>

<style lang="scss" scoped>
@import "@/assets/global-styles.scss";

.form_container {
  display: flex;
  justify-content: center;
  background: $gray;
  width: 600px;
  border-radius: 2%;
  padding-top: 20px;
  padding-bottom: 20px;
  margin-right: auto;
  margin-left: auto;
}

.contact_form {
  width: 500px;
  display: flex;
  justify-content: center;
  flex-direction: column;
}

.form_button_submit {
  width: 100px;
  height: 40px;
  margin-right: auto;
  margin-left: auto;
  margin-top: 20px;
  border: none;
  border-radius: 5%;
  background: transparent;
  &:hover {
    cursor: pointer;
    background: $dark-green;
  }
}

.form_label {
  margin-top: 12px;
}

.form_input {
  text-decoration: none;
  &:focus {
    outline: none;
    border: 2px solid $dark-green;
  }
}

</style>
