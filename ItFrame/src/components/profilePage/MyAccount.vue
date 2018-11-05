<template>
    <div>
        <template>
            <v-form>
                <v-container>
                    <v-card-title >
                        <h1 class="tabHeader">{{ $t('my_account') }}</h1>
                    </v-card-title>
                    <v-layout row wrap v-if="userData"
                              align-content-space-around
                              align-content-space-between
                              justify-center
                              justify-space-around>
                        <v-flex xs12 sm6 md3>

                                <div class ="avatarImg" v-if="!userData.image" >
                                    <img src="../../assets/images/NoImage.png" alt="Avatar">
                                </div>
                                <div class ="avatarImg" v-else >
                                    <img :src=" apiUrl+userData.image" />
                                </div>
                                <input type="file" ref="file" :multiple="false" v-on:change="onFileChange(userData.image,$event)" data-buttonText="Your label here.">
                                <v-text-field
                                        :label="$t('about_me')"
                                        v-model="userData.about"
                                        outline
                                        textarea
                                        color = 'indigo accent-4'
                                        rows="8"
                                ></v-text-field>
                        </v-flex>
                            <v-flex xs12 sm6 md3>
                                <v-text-field
                                        :label="$t('first_name')"
                                        v-model="userData.firstName"
                                        outline
                                        color = 'indigo accent-4'
                                ></v-text-field>
                                <br/>
                            <v-text-field
                                    :label="$t('last_name')"
                                    v-model="userData.lastName"
                                    color = 'indigo accent-4'
                                    outline
                            ></v-text-field>
                        <br>
                            <v-text-field
                                    :label="$t('email')"
                                    v-model="userData.email"
                                    color = 'indigo accent-4'
                                    outline
                            ></v-text-field>
                            <v-text-field
                                        :label="$t('phone_number')"
                                        v-model="userData.phoneNumber"
                                        color = 'indigo accent-4'
                                        outline
                            ></v-text-field>
                        <br>
                            </v-flex>
                                <v-flex xs12 sm6 md3
                                        align-content-space-around
                                        align-content-space-between = true>
                            <v-text-field
                                    :label="$t('old_password')"
                                    v-model="userData.oldPass"
                                    type="password"
                                    color = 'indigo accent-4'
                                    outline
                            ></v-text-field>
                        <br>
                            <v-text-field
                                    :label="$t('new_password')"
                                    v-model="userData.newPass"
                                    type="password"
                                    color = 'indigo accent-4'
                                    outline
                            ></v-text-field>

                        <br>
                            <v-text-field
                                    :label="$t('confirm_password')"
                                    v-model="userData.newPassConf"
                                    type="password"
                                    color = 'indigo accent-4'
                                    outline
                            ></v-text-field>
                                    <br>
                            <v-text-field
                                    :label="$t('date_of_birth')"
                                    v-model="userData.dateBirthday"
                                    type="date"
                                    outline
                            ></v-text-field>
                        </v-flex>
                        <br>
                    </v-layout>
                    <v-card-actions  row wrap>
                        <v-spacer></v-spacer>
                        <v-btn class="g-btn-default"
                               flat
                               @click.native="loginModal = false"
                               color="red"
                        >{{ $t('close') }}</v-btn>
                        <v-btn class="g-btn-default"
                               flat
                               @click="updateUser()"
                               color = 'indigo accent-4'
                        >{{ $t('save') }}</v-btn>
                    </v-card-actions>
                </v-container>
            </v-form>
        </template>
    </div>
</template>

<script>
import {mapState} from 'vuex'

export default {
  name: 'MyAccount',
  props: [],
  data: () => ({
    userData: {},
    file: '',
    apiUrl: process.env.ROOT_API
  }),
  computed: {
    ...mapState({
      stateUserData: state => state.auth.userData
    })
  },
  methods: {
    updateUser () {
      this.$store.dispatch('profile/updateUser', this.userData).then((res) => {
        this.userData = res.user
        this.$toastr('success', this.$t('data_updated_success'), this.$t('success_action'))
      }).catch(console.error)
    },
    onFileChange (item, e) {
      let files = e.target.files || e.dataTransfer.files
      if (!files.length) {
        return
      }
      this.file = files[0]
      let formData = new FormData()
      formData.append('file', this.file)
      this.$store.dispatch('profile/uploadProfilePicture', formData)
        .then((res) => {
          this.createImage(res.user.image)
        }).catch((err) => {
          console.log(err)
        })
    },
    createImage (imagePath) {
      this.userData.image = imagePath
    }
  },
  beforeMount () {
    this.userData = JSON.parse(JSON.stringify(this.stateUserData))
  },
  created () {
    this.$store.dispatch('auth/userInfo')
      .then((res) => {
        if (res) {
          this.userData = JSON.parse(JSON.stringify(res.user))
        }
      })
      .catch(console.error)
  }
}
</script>

<style scoped>
.tabHeader {
    color: #5964db;
    font-size: 34px;
    font-weight: 600;
}
.avatarImg{
    width: 200px;
    height: 200px;
    border: 2px solid   black;
    padding: 5px;
}
    img {
        width: 100%;
        height: 100%;
    }
input[type='file'] {
    color: transparent;
}
</style>
