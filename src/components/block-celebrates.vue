<template>
    <section v-reveal="{animation:'fade-in'}">
        <div class="celebration-grid contain-bg" v-reveal="{animation:'celebrate'}">
            <div class="background">
                <div class="bg-img preload-background" v-bgimage="require('@/assets/bg-b.jpg')"></div>
            </div>
            <div class="container">
                <div class="logo-holder">
                    <ellanse-ten-logo></ellanse-ten-logo>
                </div>
                <div class="text">
                    <h2 class="h1 mb-0"
                    v-html="
                        langSwitcher({
                                en: 'SINCLAIR CELEBRATES <br>ELLANSÉ’S 10TH ANNIVERSARY',
                                kor: 'SINCLAIR 에서 보내는 <br> ELLANSÉ 10주년 축하 인사'
                            })
                    ">
                    </h2>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
	export default{

	}
</script>