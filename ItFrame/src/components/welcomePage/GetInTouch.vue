<template>
  <div class="g-get-touch" id="contact">
    <v-container grid-list-xl>
      <v-layout row justify-center>
        <v-flex md7>
          <h2 class="g-title text-xs-center">GET IN TOUCH</h2>
          <p class="g-subtitle text-xs-center">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut blanditiis cupiditate eum expedita facere, laudantium nemo quas quasi reiciendis ullam voluptate voluptatibus.</p>
        </v-flex>
      </v-layout>
      <v-form v-model="valid">
      <v-layout row justify-center>
        <v-flex md5>
            <v-text-field
              v-model="name"
              :rules="nameRules"
              :counter="10"
              label="FULL NAME"
              required
            ></v-text-field>

        </v-flex>
        <v-flex md5>
            <v-text-field
              v-model="email"
              :rules="emailRules"
              label="EMAIL"
              required
            ></v-text-field>
        </v-flex>
      </v-layout>
      <v-layout row justify-center>
        <v-flex xs5>
          <v-text-field
            label="MOBILE"
          ></v-text-field>
        </v-flex>
        <v-flex xs5>
          <v-text-field
            v-model="name"
            label="SUBJECT"
          ></v-text-field>
        </v-flex>
      </v-layout>
      <v-layout row justify-center>
          <v-flex xs10>
            <v-text-field
              label="Enter your message..."
              textarea
              auto-grow
            ></v-text-field>
          </v-flex>
        </v-layout>
      <v-layout row justify-center class="mb-3">
          <v-flex xs5 text-xs-center>
            <v-btn class="g-btn-default btn g-up-letter">Clear</v-btn>
            <v-btn class="g-btn-main-light btn g-up-letter">Send</v-btn>
          </v-flex>
        </v-layout>
      </v-form>
    </v-container>
  </div>
</template>
<script>
export default {
  name: 'GetInTouch',
  data: () => ({
    animals: ['Dog', 'Cat', 'Rabbit', 'Turtle', 'Snake'],
    valid: false,
    name: '',
    nameRules: [
      v => !!v || 'Name is required',
      v => v.length <= 10 || 'Name must be less than 10 characters'
    ],
    email: '',
    emailRules: [
      v => !!v || 'E-mail is required',
      v => /.+@.+/.test(v) || 'E-mail must be valid'
    ]
  })
}
</script>
<style lang="scss" scoped>
  @import "../../assets/sass/desktop/mainPage.scss";

</style>
