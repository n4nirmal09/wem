<template>
    <section v-reveal="{animation:'fade-in'}">
        <div class="contain-bg">
            <div class="background">
                <div class="bg-img preload-background" v-bgimage="require('@/assets/bg-b.jpg')"></div>
            </div>
            <div class="container py-4">
                <h2 class="text-center mb-0 mt-1">
                    {{
                    langSwitcher({
                    en:"OUTSTANDING RESULTS",
                    kor:"탁월한 결과"
                    })
                    }}
                </h2>
                <hr class="dark mb-4">
                <div class="swap-container">
                    <h3 class="text-primary bg-dark text-center rounded px-3 py-1">
                        {{
                        langSwitcher({
                        en:"Discover Wu’s experience with ELLANSÉ",
                        kor:"우(Wu) 씨의 ELLANSÉ 사용 경험 알아보기"
                        })
                        }}
                    </h3>
                    <div class="swap-box">
                        <div class="swap-before-after cocoen">
                            <img src="@/assets/ch-after.png" alt="">
                            <img src="@/assets/ch-before.png" alt="">
                        </div>
                        <div class="swap-text bg-secondary text-white text-center px-2 py-1">
                            <transition name="fade" mode="out-in">
                                <div class="after" v-if="showingNow === 'after'">
                                    {{
                                    langSwitcher({
                                    en:"20 months after ELLANSÉ",
                                    kor:"ELLANSÉ 후 20 개월"
                                    })
                                    }}
                                </div>
                                <div v-else class="before">
                                    {{
                                    langSwitcher({
                                    en:"Wu, age 44 before ELLANSÉ",
                                    kor:"우, ELLANSÉ 이전 44 세"
                                    })
                                    }}
                                </div>
                            </transition>
                        </div>
                    </div>
                </div>
                <h3 class="text-center mb-0 mt-4">
                    {{
                    langSwitcher({
                    en:"VOLUMISING LIFTING AND LONG-LASTING EFFECTS",
                    kor:"풍성한 리프팅과 오래 지속되는 효과"
                    })
                    }}
                </h3>
                <hr class="dark mb-0">
                <div class="text-center">
                    <a href="https://ellanse.com/your-treatment/" target="_blank" class="btn btn-dark text-primary" v-if="getLang ==='en'">Discover more patient experiences</a>
                    <a href="https://ellanse.com/ko/your-treatment/" target="_blank" class="btn btn-dark text-primary" v-else>더 많은 환자 경험 발견</a>
                </div>
            </div>
        </div>
    </section>
</template>
<script>
import { Cocoen } from "@/utilities/cocoen.js"
export default {
    data() {
        return {
            showingNow: "before"
        }
    },
    mounted() {
        new Cocoen(document.querySelector('.swap-before-after'), {
            dragCallback: (e) => {
                if (e * 100 > 50) {
                    this.showingNow = "after"
                } else {
                    this.showingNow = "before"
                }
            }
        })
    }
}
</script>