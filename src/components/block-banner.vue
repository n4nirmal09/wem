<template>
    <section>
        <div class="main-banner contain-bg">
            <div class="background">
                <div class="bg-img preload-background" v-bgimage="require('@/assets/bg-banner.jpg')"></div>
                <video class="bg-video" autoplay muted loop>
                    <source src="https://ellanse.com/wp-content/uploads/sites/2/2019/02/Ellanse-Homepage-Video-shortened4.mp4" type="video/mp4">
                </video>
            </div>
            <div class="video-controls">
                <transition 
                @before-enter="maskBeforeEnter"
                @enter="maskEnter" 
                @leave="maskLeave" 
                :css="false">
                    <div class="video-mask" v-if="showMask">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1458 836" preserveAspectRatio="xMaxYMin slice">
                            <path fill="#fff" d="M1469.4.5H0V837h345.5z" />
                        </svg>
                    </div>
                </transition>
                <transition name="fade">
                    <div class="play-btn" @click="showMask = false" v-if="showMask">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 302 302">
                            <g fill="#fcee21">
                                <path class="st0" d="M269.1 150.7c0 65.1-52.8 117.9-117.9 117.9-65.1 0-117.9-52.8-117.9-117.9S86.1 32.8 151.2 32.8c65.1 0 117.9 52.7 117.9 117.9m27.7 0C296.8 70.2 231.6 5 151.2 5S5.6 70.2 5.6 150.7s65.2 145.6 145.6 145.6 145.6-65.2 145.6-145.6" />
                                <path class="st0" d="M112 104.3V197l102.9-46.3z" />
                            </g>
                        </svg>
                    </div>
                </transition>
            </div>
            <div class="content">
                <div class="container align-items-end justify-content-between">
                    <div class="timetobeme-logo">
                        <img src="@/assets/timetobeme-logo.png" alt="">
                    </div>
                    <a href="#getintouch-form" class="btn btn-primary rounded px-4" @click="scrollToTop('#getintouch-form',$event)">
                        <span>Find out more</span>
                    </a>
                </div>
            </div>
        </div>
    </section>
</template>
<script>
export default {
    props: [],
    data() {
        return {
            showMask: true
        }
    },
    mounted() {

        let scrollController = new ScrollMagic.Controller(),
            scene = new ScrollMagic.Scene({ triggerElement: this.$el, triggerHook: 'onLeave', duration: this.$el.offsetHeight - 200 })
            .on('leave', () => {
                this.showMask = true
            })
            .addTo(scrollController)
    },
    methods: {
        maskBeforeEnter(el){
            TweenLite.set(el,{
                scaleX: 0,
                transformOrigin: "0% 50%"
            })
        },
        maskEnter(el, done) {
            TweenLite.to(el, 0.8, {
                scaleX: 1,
                transformOrigin: "0% 50%",
                onComplete() {
                    done()
                }
            })
        },

        maskLeave(el, done) {
            TweenLite.to(el, 0.8, {
                scaleX: 0,
                transformOrigin: "0% 50%",
                onComplete() {
                    done()
                }
            })
        }
    }
}
</script>