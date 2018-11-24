<template >
  <div id="home">
    <div class="g-main-header"  style="width:90%;max-width:950px;max-height:600px;margin:auto">
      <!-- Slider main container -->
      <swiper :options="swiperOption" >
        <swiper-slide >
          <div class="g-slider-wrapper" style="position: relative">
            <div class="transparentDiv1">

            </div>
            <div class="transparentDivText">
              <h1 class="g-bold">{{ $t('web_dev_and_des_h') }}</h1>
              <p class="transparentDivParagraph">{{$t('web_dev_and_des_p_s')}}</p></div>
            <img src="../../assets/images/mobDev.jpg" alt="">
          </div>
        </swiper-slide>
        <swiper-slide >
          <div class="g-slider-wrapper" style="position: relative">
            <div class="transparentDiv2">
            </div>
            <div class="transparentDivText">
              <h1 class="g-bold">{{ $t('ui_ux_h') }} </h1>
              <p class="transparentDivParagraph">{{ $t('ui_ux_p_s') }}</p></div>
            <img src="../../assets/images/webUxui.jpg" alt="">
          </div>
        </swiper-slide>
        <swiper-slide >
          <div class="g-slider-wrapper" style="position: relative">
            <div class="transparentDiv3">
            </div>
            <div class="transparentDivText">
              <h1 class="g-bold">{{ $t('mob_app_h') }}</h1>
              <p class="transparentDivParagraph">{{ $t('mob_app_p_s') }}</p></div>
            <img src="../../assets/images/webDev.jpg" alt="">

          </div>
        </swiper-slide>
        <swiper-slide >
          <div class="g-slider-wrapper" style="position: relative">
            <div class="transparentDiv4">
            </div>
            <div class="transparentDivText">
              <h1 class="g-bold">{{ $t('it_management_h') }}</h1>
              <p class="transparentDivParagraph">{{ $t('it_management_p_s') }}</p></div>
            <img src="../../assets/images/management.jpg" alt="">
          </div>
        </swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
      </swiper>
    </div>
    <about
    >
    </about>

    <GetInTouch></GetInTouch>

  </div>
</template>
<script>
import About from '../welcomePage/About.vue'
import GetInTouch from '../welcomePage/GetInTouch.vue'
export default {
  name: 'mainPage',
  components: {
    About,
    GetInTouch
  },
  data () {
    return {
      swiperOption: {
        direction: 'vertical',
        autoplay: true,
        width: '40px',
        delay: 10000,
        speed: 1500,
        effect: 'fade',
        pagination: {
          el: '.swiper-pagination',
          clickable: true
        }
      }
    }
  }
}
</script>
<style lang="scss" scoped>
  @import "../../assets/sass/desktop/mainPage.scss";
  @import "../../assets/sass/desktop/customSlider.scss";
  .transparentDiv1, .transparentDiv2, .transparentDiv3 , .transparentDiv4 {
    position: absolute;
    width: 100%;
    height: 100%;
    z-index: 500;
  }
  .transparentDiv1{
    background-color: rgba(0, 0, 0, 0.56);
  }
  .transparentDiv2{
    background-color:  rgba(0, 0, 0, 0.56);
  }
  .transparentDiv3{
    background-color:  rgba(0, 0, 0, 0.56);
  }
  .transparentDiv4{
    background-color:  rgba(0, 0, 0, 0.56);
  }
  .g-slider-wrapper{
    position: relative;
    z-index: 1000;
  }
.transparentDivText {
    position: absolute;
    z-index: 600;
    top: 30%;
    left: 10%;
    max-width: 65%;

  }
  .transparentDivParagraph{
    color: white;
    font-size: 18px;
    font-weight: 600;
  }
  @media screen and (max-width:900px) {
    .g-bold{
      font-size:40px !important;
      line-height: 1 !important;
    }
    .transparentDivText{
      top: 40%;
    }
    @media screen and (max-width:500px) {
      .g-bold {
        font-size: 30px !important;
        font-weight: 900;
      }
      .transparentDivText{
         top: 25%;
       }
      .transparentDivText {
        max-width: 100%;
        text-align: center;
        left:0;
        margin: 0;
        padding: 10px;
      }
    }
  }
</style>
