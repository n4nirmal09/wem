<template>
    <section v-reveal="{animation:'fade-in'}">
        <div class="celebration-grid contain-bg">
            <div class="background">
                <div class="bg-img preload-background" v-bgimage="require('@/assets/bg-b.jpg')"></div>
            </div>
            <div class="container">
                <div class="logo-holder">
                    <ellanse-ten-logo></ellanse-ten-logo>
                </div>
                <div class="text">
                    <h2 class="h1 mb-0">SINCLAIR CELEBRATES <br>ELLANSE’S 10TH ANNIVERSARY</h2>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
	export default{

	}
</script>