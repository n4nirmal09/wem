<template>
    <section v-reveal="{animation:'fade-in'}">
        <div>
            <!-- <div class="text-center"><span @click="showReferals = !showReferals" class="btn btn-dark text-primary">
                    {{
                    langSwitcher({
                    en: "References",
                    kor: "참고 문헌"
                    })
                    }}</span></div> -->
            <transition name="fade">
                <div class="references-wrapper" v-if="showReferals">
                    <ul class="list-unstyled mb-0">
                        <li>
                            <p class="small mb-2">
                                {{
                                langSwitcher({
                                en: "+ Ellansé (S, M, L and E) is intended to be used for subdermal implantation in the face.",
                                kor: "+ Ellansé(S, M, L 및 E)는 얼굴의 피하 이식에 사용하기 위한 것입니다. "
                                })
                                }}
                            </p>
                        </li>
                        <li>
                            <p class="small mb-2">
                                {{
                                langSwitcher({
                                en: "* Expected longevity in-vivo based on extrapolation of clinical data from –S and –M accepted PCL degradation behaviour.",
                                kor: "* –S 및 –M 임상 데이터의 외삽을 기반으로 한 예상 생체내 지속성에는 PCL 분해 거동이 포함됩니다. "
                                })
                                }}
                            </p>
                        </li>
                        <li>
                            <p class="small mb-2">
                                
                                {{
                                langSwitcher({
                                en: "** Sinclair, data on file, Nov. 2018.",
                                kor: "** Sinclair, 보관 자료, 2018 년 11 월 "
                                })
                                }}
                            </p>
                        </li>
                    </ul>
                </div>
            </transition>
        </div>
    </section>
</template>
<script>
export default {
    data() {
        return {
            showReferals: true
        }
    }
}
</script>