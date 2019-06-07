<template>
    <section v-reveal="{animation:'fade-in'}">
        <div class="contain-bg">
            <div class="background">
                <div class="bg-img preload-background" v-bgimage="require('@/assets/bg-b.jpg')"></div>
            </div>
            <div class="container py-4">
                <h2 class="text-center mb-0 mt-1" v-html="
                 langSwitcher({
                    en: 'ELLANSÉ : LONG-LASTING COLLAGEN STIMULATION+<br> KEY ATTRIBUTES',
                    kor: 'ELLANSÉ: 장기 지속 콜라겐 자극+ 주요 특성'
                    })
                ">
                </h2>
                <hr class="dark mb-4">
                <div class="row align-items-center">
                    <div class="col-lg-6 pr-lg-4">
                        <div class="ell-product-details-features-list">
                            <div class="ell-product-details-feature bg-primary p-3 px-md-4 rounded" v-reveal="{animation:'from-bottom'}">
                                <h6 class="ft-medium mb-1">
                                    {{
                                    langSwitcher({
                                    en: "UNIQUE COMPOSITION",
                                    kor: "독특한 구성"
                                    })
                                    }}
                                </h6>
                                <p class="text-grey mb-2 small ft-bold">
                                    {{
                                    langSwitcher({
                                    en: "100% BIODEGRADABLE",
                                    kor: "고유한 성분: 100% 생분해성"
                                    })
                                    }}
                                </p>
                                <ul class="pl-2">
                                    <li>
                                        {{
                                        langSwitcher({
                                        en: "70% CMC gel carrier",
                                        kor: "70% CMC 젤"
                                        })
                                        }}
                                    </li>
                                    <li>
                                        {{
                                        langSwitcher({
                                        en: "30% PCL microspheres",
                                        kor: "30% PCL 미소 구체"
                                        })
                                        }}
                                    </li>
                                </ul>
                            </div>
                            <div class="ell-product-details-feature bg-primary p-3 px-md-4 rounded" v-reveal="{animation:'from-bottom'}">
                                <h6 class="ft-medium mb-1">
                                    {{
                                    langSwitcher({
                                    en: "SPECIFIC PROPERTIES",
                                    kor: "특정 속성"
                                    })
                                    }}
                                </h6>
                                <p class="text-grey mb-2 small ft-bold">
                                    {{
                                    langSwitcher({
                                    en: "OPTIMAL BIOCOMPATIBILITY",
                                    kor: "구체적 특성: 최고의 생체적합성"
                                    })
                                    }}
                                </p>
                                <ul class="pl-2">
                                    <li>
                                        {{
                                        langSwitcher({
                                        en: "Microspheres size (25-50 m)",
                                        kor: "미소 구체 크기: (25-50𝛍m)"
                                        })
                                        }}
                                    </li>
                                    <li>
                                        {{
                                        langSwitcher({
                                        en: "Microspheres shape: Smooth and spherical",
                                        kor: "미소 구체 형태: 매끄러운 구형"
                                        })
                                        }}
                                    </li>
                                </ul>
                            </div>
                            <div class="ell-product-details-feature bg-primary p-3 px-md-4 rounded" v-reveal="{animation:'from-bottom'}">
                                <h6 class="ft-medium mb-1">{{
                                    langSwitcher({
                                    en: "EXCELLENT SAFETY PROFILE",
                                    kor: "탁월한 안전성 프로필"
                                    })
                                    }}</h6>
                                <p class="text-grey mb-2 small ft-bold">{{
                                    langSwitcher({
                                    en: "SAFE TREATMENT",
                                    kor: "안전한 치료"
                                    })
                                    }}</p>
                                <ul class="pl-2">
                                    <li>{{
                                        langSwitcher({
                                        en: "High safety profile",
                                        kor: "높은 안전성"
                                        })
                                        }}</li>
                                    <li>{{
                                        langSwitcher({
                                        en: "Very low adverse event rate of 0.056% (from its launch in 2009 to December 2018)",
                                        kor: "매우 낮은 이상반응 발생률: 0.056%(2009년 출시~2018년 12월)"
                                        })
                                        }}</li>
                                    <li>
                                        {{
                                        langSwitcher({
                                        en: "30-month safety data demonstrating a good tolerance**",
                                        kor: "30개월 안전성 데이터로 우수한 내약성 입증**"
                                        })
                                        }}
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-6 mt-4 mt-lg-0" v-reveal="{animation:'from-bottom'}">
                        <h3 class="mb-0">
                            {{
                            langSwitcher({
                            en: "FOUR OPTIONS",
                            kor: "4가지 옵션"
                            })
                            }}
                        </h3>
                        <hr class="primary mb-3">
                        <p>
                            {{
                            langSwitcher({
                            en: "There are 4 ELLANSÉ variants that offer results lasting from at least one to over four years*",
                            kor: "최소 1년에서 4년 이상까지 지속되는 결과를 제공하는 4가지 종류의 ELLANSÉ 제품이 있습니다."
                            })
                            }}
                        </p>
                        <div class="ele-product-box-list" v-reveal="{animation:'from-bottom-elems-stagger'}">
                            <div class="ele-product-box py-3">
                                <figure class="img">
                                    <img src="@/assets/ellanse-s-pack.png" alt="">
                                </figure>
                                <figcaption class="rounded border-primary px-2 py-1 bg-secondary text-white text">
                                    <span class="product-name">ELLANSÉ - S</span>
                                    <span class="product-dur">
                                        {{
                                        langSwitcher({
                                        en: "At least 1 year",
                                        kor: "1 년 이상"
                                        })
                                        }}
                                    </span>
                                </figcaption>
                            </div>
                            <div class="ele-product-box py-3">
                                <figure class="img">
                                    <img src="@/assets/ellanse-m-pack.png" alt="">
                                </figure>
                                <figcaption class="rounded border-primary px-2 py-1 bg-secondary text-white text">
                                    <span class="product-name">ELLANSÉ - M</span>
                                    <span class="product-dur">
                                        {{
                                        langSwitcher({
                                        en: "At least 2 years",
                                        kor: "2 년 이상"
                                        })
                                        }}
                                    </span>
                                </figcaption>
                            </div>
                            <div class="ele-product-box py-3">
                                <figure class="img">
                                    <img src="@/assets/ellanse-l-pack.png" alt="">
                                </figure>
                                <figcaption class="rounded border-primary px-2 py-1 bg-secondary text-white text">
                                    <span class="product-name">ELLANSÉ - L</span>
                                    <span class="product-dur">{{
                                        langSwitcher({
                                        en: "At least 3 years*",
                                        kor: "3 년* 이상"
                                        })
                                        }}</span>
                                </figcaption>
                            </div>
                            <div class="ele-product-box py-3">
                                <figure class="img">
                                    <img src="@/assets/ellanse-e-pack.png" alt="">
                                </figure>
                                <figcaption class="rounded border-primary px-2 py-1 bg-secondary text-white text">
                                    <span class="product-name">ELLANSÉ - E</span>
                                    <span class="product-dur">{{
                                        langSwitcher({
                                        en: "At least 4 years*",
                                        kor: "4 년* 이상"
                                        })
                                        }}</span>
                                </figcaption>
                            </div>
                        </div>
                        <div class="small mb-0">
                            <block-references></block-references>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>