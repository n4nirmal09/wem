<template>
    <section class="home-section welcome-banner contain-bg">
        <div class="background">
            <div class="bg-img preload-background" v-bgimage="require('@/assets/bg-b.jpg')"></div>
        </div>
        <div class="model">
            <img src="@/assets/ch-a.png" alt="">
        </div>
        <div class="container">
            <div class="cta-wrapper">
                <p class="text-center lead" v-if="this.getLang === 'en'">Select your language</p>
                <p class="text-center lead" v-if="this.getLang === 'kor'">언어 선택</p>
                <div class="btn-grp-wrapper">
                    <router-link tag="span" to="/" class="btn btn-dark"
                     v-html="this.getLang === 'en' ? 'English' : '영어'"></router-link>
                    <router-link tag="span" to="/ko/" class="btn btn-dark"
                     v-html="this.getLang === 'en' ? 'Korean' : '한국어'"></router-link>
                </div>
                <p class="mb-0 py-3 text-center display-3">
                	{{ getLang === 'en' ? 'This site is intended for healthcare professionals.' : '이 사이트는 의료 전문가를위한 사이트입니다.'}}
                </p>
                <div>
                    <router-link 
                    tag="span" :to="this.getLang === 'en' ? '/landing' : '/ko/landing'" 
                    class="btn btn-dark btn-block"
                    v-html="getLang === 'en' ? 'I am a healthcare professional, <br> Enter Site >' : '저는 의료 전문가입니다.<br> 사이트 입력 >'"
                    ></router-link>
                </div>
                <p class="text-center mt-3 display-4" v-if="this.getLang === 'en'">
                    Please visit the 
                    <a 
                    href="https://ellanse.com/" 
                    target="_blank">consumer site</a> 
                    for more information if you are not a healthcare professional.
                </p>
                <p class="text-center mt-3 display-4" v-else>
                    방문하십시오
                    <a 
                    href="https://ellanse.com/" 
                    target="_blank">소비자 사이트</a> 
                    의료 전문가가 아닌 경우 더 많은 정보를 얻으십시오.
                </p>
            </div>
        </div>
        <block-footer></block-footer>
    </section>
</template>
<script>
export default {
    name: 'home'

}
</script>