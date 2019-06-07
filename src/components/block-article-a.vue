<template>
    <section v-reveal="{animation:'from-bottom'}">
        <div class="container py-4">
            <article>
                <h3 class="mb-2">
                    {{
                    langSwitcher({
                    en: "A NEW VISION OF BEAUTY",
                    kor: "뷰티 업계의 혁신적인 비전"
                    })
                    }}
                </h3>
                <hr class="dark mini mt-0 mb-3">
                <div class="row" v-reveal="{animation:'from-bottom-elems-stagger'}">
                    <div class="col-md-5">
                        <p v-html="
							langSwitcher({
									en: para1.en,
									kor: para1.kor
								})
						">
                        </p>
                    </div>
                    <div class="col-md-5">
                        <p v-html="
							langSwitcher({
									en: para2.en,
									kor: para2.kor
								})
						"></p>
                    </div>
                    <div class="col-md-2">
                        <div class="person-card">
                            <figure class="person-img">
                                <img src="@/assets/ch-b.jpg" alt="">
                            </figure>
                            <figcaption class="person-details bg-dark text-primary">
                                <span class="person-name">
                                    {{
                                    langSwitcher({
                                    en: "Chris spooner",
                                    kor: "크리스 스푸너"
                                    })
                                    }}
                                </span>
                                <span class="person-role">CEO sinclair pharma</span>
                            </figcaption>
                        </div>
                    </div>
                </div>
            </article>
        </div>
    </section>
</template>
<script>
export default {
    data() {
        return {
            para1: {
                en: 'In celebration of the 10 year anniversary of ELLANSÉ, we reflect on everything we’ve achieved, and look forward to what the future holds. ELLANSÉ is a new class of rejuvenating filler that produces longer-lasting and natural-looking results. And with more than 1 million syringes sold since its launch, ELLANSÉ will soon become one of the best-selling volumising and rejuvenating products available worldwide.',
                kor: 'ELLANSÉ 10주년을 축하하면서 지금까지 이루어 낸 성과를 돌아보고, 또 미래에 이룰 성취를 기대해 봅니다. ELLANSÉ는 오래 지속되고 자연스럽게 보이는 결과를 선사하는 새로운 스타일의 재생용 필러입니다. ELLANSÉ는 출시 후 100만 개 이상 판매되어, 머지않아 전 세계에서 가장 많이 사용되는 볼륨 및 윤곽 개선 제품으로 자리잡을 것입니다.'
            },
            para2: {
                en: 'ELLANSÉ has helped re-define how people think about beauty. By developing the <a target="_blank" href="https://ellanse.com/">collagen-stimulation</a> segment of the dermal filler market, ELLANSÉ has enabled physicians across the world to become experts in <a target="_blank" href="https://ellanse.com/physician-landing/">collagen stimulation</a> and achieve outstanding results for their patients. Natural-looking results are immediate, longer-lasting and supported by a high safety profile.',
                kor: 'ELLANSÉ는 아름다움에 대한 인식을 바꾸는 데 기여했습니다. 피부 필러 시장에서 <a target="_blank" href="https://ellanse.com/ko/">콜라겐 자극</a> 분야를 개척한 ELLANSÉ는 전 세계 의사들이 <a target="_blank" href="https://ellanse.com/ko/physician-landing/">콜라겐 자극 </a> 분야의 전문가가 되고 환자에게서 탁월한 결과를 내도록 도왔습니다. 자연스럽게 보이는 결과가 즉시 나타나고 오래 지속되며 안전성 프로파일도 우수합니다.'
            }
        }

    }
}
</script>