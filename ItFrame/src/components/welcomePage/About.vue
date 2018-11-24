<template>
    <div class="g-about" >
        <v-container grid-list-xl id="services">
            <v-layout row justify-center align-center class="Divlayout DivlayoutBack divLayRed leftRadius">
                <v-flex lg7 right>
                    <h2 class="g-about-title mb-5" style ="text-align:center">{{ $t('web_dev_and_des_h') }}</h2>
                    <p style ="text-align:center">
                        {{ $t('web_dev_and_des_p') }}
                    </p>
                </v-flex>
                <v-flex lg3>
                    <i class="g-about-icon"></i>
                </v-flex>
            </v-layout>
            <v-layout row justify-center  align-center class="Divlayout1 DivlayoutBack divLayRed rightRadius" >
                <v-flex lg3 >
                    <i class="g-about-icon2"></i>
                </v-flex>
                <v-flex lg7>
                    <h2 class="g-about-title  mb-5" style ="text-align:center">{{ $t('ui_ux_h') }}</h2>
                    <p style ="text-align:center">
                        {{ $t('ui_ux_p') }}
                    </p>
                </v-flex>
            </v-layout>
            <v-layout row justify-center align-center class="Divlayout DivlayoutBack divLayRed leftRadius">
                <v-flex lg7>
                    <h2 class="g-about-title mb-5" style ="text-align:center">{{ $t('mob_app_h') }}</h2>
                    <p style ="text-align:center">
                        {{ $t('mob_app_p') }}
                    </p>
                </v-flex>
                <v-flex lg3>
                    <i class="g-about-icon3"></i>
                </v-flex>
            </v-layout>
            <v-layout row justify-center  align-center class="Divlayout1 DivlayoutBack divLayRed rightRadius">
                <v-flex lg3>
                    <i class="g-about-icon4"></i>
                </v-flex>
                <v-flex lg7>
                    <h2 class="g-about-title  mb-5" style ="text-align:center">{{ $t('it_management_h') }}</h2>
                    <p style ="text-align:center">
                        {{ $t('it_management_p') }}
                    </p>
                </v-flex>
            </v-layout>
        </v-container>
        <v-parallax
                dark
                src="https://vilcap.com/wp-content/uploads/2018/07/AI-world-forum-background-cropped-1920x1000-1.jpg">
            <div class="g-get-touch" id="about">
                <v-container grid-list-xl>
                    <v-layout row justify-center align-center>
                        <v-flex md7>
                            <h2 class="g-title text-xs-center">{{ $t('about_us') }}</h2>
                        </v-flex>
                    </v-layout>
                        <v-layout row justify-center wrap align-center>
                            <v-flex md5 xs12 style="text-align: center">
                                <h3>{{ $t('address') }}: Moskovyan 3/2</h3>
                            </v-flex>
                            <v-flex md5 xs12 align-center style="text-align: center">
                                <h3>{{ $t('email') }} : info@itframe.am</h3>

                            </v-flex>
                        </v-layout>
                    <v-layout row justify-center wrap>
                        <v-flex md5 xs12 style="text-align: center">
                        <h3>Skype: it.frame</h3>
                    </v-flex>
                        <v-flex md5 xs12 style="text-align: center">
                            <h3>{{ $t('phone_number') }} : 374765674</h3>
                        </v-flex>
                    </v-layout>
                </v-container>
            </div>
        </v-parallax>
    </div>
</template>
<script>
export default {
  name: 'About',
  data: () => ({})
}
</script>
<style lang="scss" scoped>
    @import "../../assets/sass/desktop/mainPage.scss";

     .divLayRed{
   background: white  !important;
    color: #16788D;
    border-radius:6px;
        border: 2px double  #16788D;
        margin-top: 2px !important;

    }
    .leftRadius {
    border-top-left-radius: 120px;
    border-bottom-left-radius: 120px;
    border-right: none;
}
    .rightRadius {
    border-top-right-radius: 120px;
    border-bottom-right-radius: 120px;
    border-left: none;
}
  

    img {
        height: 100% !important;
    }

    .parralax {
        height: 700px !important;
    }
    .DivlayoutBack {
        background-color: white;

    }
    .container.grid-list-xl {
    padding: 24px;
    padding-bottom: 70px;
}
    @media screen and (max-width: 550px) {
        .Divlayout {
            flex-direction: column-reverse;
        }
    }

    @media screen and (max-width: 550px) {
        .Divlayout1 {
            flex-direction: column;
        }
    }

    @media screen and (max-width: 550px) {
        .Divlayout1 {
            flex-direction: column;
        }
        .g-bold {
            font-size: 30px !important;
        }
    }
</style>
