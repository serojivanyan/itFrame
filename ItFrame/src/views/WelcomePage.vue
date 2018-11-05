<template>
  <div>
    <Header
    >
    </Header>
    <main-page
    >
    </main-page>
    <Footer>
    </Footer>
  </div>
</template>
<script>
import Header from '../components/global/Header.vue'
import Footer from '../components/global/Footer.vue'
import mainPage from '../components/welcomePage/mainPage.vue'
export default {
  name: 'WelcomePage',
  components: {
    Header,
    mainPage,
    Footer
  }
}
</script>
<style lang="scss">
</style>
