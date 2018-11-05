<template>
    <div>
        <nav class="navbar navbar-default navbar-fixed-top">
            <div class="container-fluid">
                <div class="navbar-header">
                    <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                    </button>
                    <div  class ="divLogo">
                        <a @click = "$router.push('/')">
                            <i class="g-brand"></i>
                        </a>
                    </div>
                </div>
                <div class="collapse navbar-collapse" id="myNavbar">

                    <ul class="nav navbar-nav navbar-right">
                        <li><a href="#home" style="color: rgb(72,204,253);"> {{ $t('home') }}</a></li>
                        <li><a href="#services" style="color: rgb(1,146,211);" > {{ $t('services') }}</a></li>
                        <li><a href="#about" style="color: rgb(252,130,45);" > {{ $t('about_us') }}</a></li>
                        <li><a href="#contact" style="color: rgb(220,37,0);"> {{ $t('contact') }}</a></li>
                        <li>
                            <v-menu class="g-language-select" right style="margin-top:12px;z-index: 20000;">
                                <v-btn
                                        slot="activator"
                                >
                                    <i :class="langIcon"></i>
                                    <i class="g-grey-icon ml-2"></i>
                                </v-btn>
                                <v-list>
                                    <v-list-tile
                                            v-for="(language, index) in languages"
                                            :key="index"
                                            @click="setLang(language.code)">
                                        <v-list-tile-title>{{ language.name }}</v-list-tile-title>
                                    </v-list-tile>
                                </v-list>
                            </v-menu>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </div>
</template>
<script>
import {mapState} from 'vuex'

export default {
  name: 'Header',
  props: ['showRegistrationModal', 'showLoginModal'],
  data: () => ({
    apiUrl: process.env.ROOT_API,

    langIcon: 'g-language-' + localStorage.getItem('lang')
  }),
  computed: {
    ...mapState({
      languages: state => state.common.languages
    })
  },
  methods: {
    setLang (lang) {
      this.$store.dispatch('common/setLang', lang).then(() => {
        this.langIcon = 'g-language-' + lang
      }).catch(console.error)
    }
  }
}
</script>
<style lang="scss" scoped>
  @import "../../assets/sass/desktop/header.scss";
  .g-registration {
    color: #5A65DB;
    font-size: 30px;
  }
  .divLogo{
      margin-left: 35px;
  }
  .g-social-icons {
      i {
        color: #5A65DB;
        cursor: pointer;
        font-size: 20px;
      }

  }
  .toolbar__items{
      margin: 10px !important;
  }
    .notificationButton{
        box-shadow: none !important;
        background-color: #ffffff !important;
    }
  .navbar-nav>li>a {
      padding-top: 30px;
      padding-bottom: 32px;
      font-size: 19px;
      height: auto;
      display: block;
  }
  .navbar-default {
      background-color: #ffffff;
      border-color: #e7e7e7;
  }
    button{
        height: 100%;
    }
  .navbar-right {
      padding-top: 10px;
  }
  .application .theme--light.btn:not(.btn--icon):not(.btn--flat), .theme--light .btn:not(.btn--icon):not(.btn--flat) {
      background-color: white !important;
      box-shadow: none !important;
  }
  @media screen and (max-width:765px) {
      .nav>li {
          position: relative;
          display: block;
          text-align: center;
      }
      .navbar-nav > li > a{
          padding-bottom: 0;
      }
      .divLogo{
          margin-left: 0px;
      }
      .g-brand{
          display: block;
          margin: auto;
          text-align: center;
      }
  }
</style>
