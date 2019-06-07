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
                <h1 class="text-center mb-2">
                    {{
                    langSwitcher({
                    en: 'Thank you for your message,',
                    kor: '당신의 메시지를 당신을 감사하십시오,'
                    })
                    }}
                </h1>
                <p class="lead text-center">
                    {{
                        langSwitcher({
                        en: 'we will be in touch.',
                        kor: '우리는 연락 할 것입니다.'
                        })
                    }}
                </p>
                <div class="text-center">
                    <router-link 
                    tag="span" :to="this.getLang === 'en' ? '/landing' : '/ko/landing'" 
                    class="btn btn-primary rounded  px-4"
                    v-html="getLang === 'en' ? '< Go back' : '< 돌아 가기'"
                    ></router-link>
                </div>
            </div>
        </div>
        <block-footer></block-footer>
    </section>
</template>
<script>
export default {
    name: 'message'
}
</script>