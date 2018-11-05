<template>
    <div >
        <Header ref="headRef"></Header>
        <v-layout row wrap>
            <v-flex sm12 style="border: 2px solid;min-height: 50vh">
                <v-app id="inspire">
                    <div>
                        <v-tabs v-model="active"
                                class ="flLeft"
                                hide-slider
                               >
                            <v-tab>
                             {{$t('my_account')}}
                            </v-tab>
                            <v-tab
                                    v-for="n in 3"
                                    :key="n"
                                    ripple>
                                {{$t('item')}} - {{ n }}
                            </v-tab>
                            <v-tab-item>
                                <my-account ></my-account>
                            </v-tab-item>
                            <v-tab-item
                            v-for="n in 3"
                            :key="n">
                            <v-card flat>
                            <v-card-text>{{ text }}</v-card-text>
                            </v-card>
                            </v-tab-item>
                        </v-tabs>
                    </div>
                </v-app>
            </v-flex>
        </v-layout>
        <Footer></Footer>
    </div>
</template>

<script>
import Header from '../components/global/Header.vue'
import Footer from '../components/global/Footer.vue'
import MyAccount from '../components/profilePage/MyAccount'

export default {
  name: 'ProfilePage',
  components: {
    Header,
    Footer,
    MyAccount
  },
  data: () => ({
    signUpData: {
    },
    active: null,
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut' +
      ' labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris' +
      ' nisi ut aliquip ex ea commodo consequat.',
    apiUrl: process.env.ROOT_API

  }),
  methods: {
    next () {
      const active = parseInt(this.active)
      this.active = (active < 2 ? active + 1 : 0)
    }
  }
}

</script>

<style>
    #inspire .tabs__bar{
        float: left;
        min-height:800px;
    }
    #inspire .tabs__container {
        flex-direction: column;
    }
    #inspire .flLeft{
        min-height: 800px;
        margin: 30px;

    }
    #inspire .tabs__bar{
        min-height: 800px;
        min-width: 300px;
    }
    #inspire .tabs__slider-wrapper{
        width: 100%;
    }
    #inspire .application .theme--light.tabs__bar, .theme--light .tabs__bar{
        background-color:#5964db;

    }
    #inspire .tabs__div{
        max-width: 100%;
    }
    #inspire .tabs__container {
        min-height: 48px;
        height: 100%;
    }
    #inspire .tabs__item--active{
        background-color: white;
        border: 4px solid #5964db;
        transition: 1s;
        border-radius: 4px;
        color: black !important;
        font-weight: 900;
        font-size: 19px;
        font-family: sans-serif;
    }
    #inspire .tabs__item{
        border: 4px solid #5964db;
        border-radius: 4px;
        color: white;
        font-weight: 900;
        font-size: 19px;
        font-family: sans-serif;

    }
    #inspire .tabs__item:not(.tabs__item--active) {
        opacity: 1;
    }
</style>
