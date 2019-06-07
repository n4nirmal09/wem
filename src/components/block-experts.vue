<template>
    <section v-reveal="{animation:'fade-in'}">
        <div class="contain-bg">
            <div class="background">
                <div class="bg-img preload-background" v-bgimage="require('@/assets/bg-b.jpg')"></div>
            </div>
            <div class="container py-4">
                <h2 class="text-center mb-0 mt-1 text-upper">
                    {{
                    langSwitcher({
                    en:"EXPERTS TESTIMONIAL",
                    kor:"전문가 평가"
                    })
                    }}
                </h2>
                <hr class="dark mb-3">
                <div class="expert-listing row justify-content-between pb-2" v-if="getLang==='en'">
                    <div class="col-sm-6  expert-item py-2" v-reveal="{animation:'from-bottom'}" v-for="(expert,index) in en.experts">
                        <div class="expert-card bg-primary ">
                            <figure class="expert-img">
                                <img :src="expert.pic" alt="">
                            </figure>
                            <figcaption class="expert-details px-3 py-3 small">
                                <span class="name">{{expert.name}}</span>
                                <span class="role">{{expert.role}}</span>
                                <span class="place-of-work">{{expert.placeOfWork}}</span>
                                <span class="since">{{expert.since}}</span>
                                <hr class="my-2 dark">
                                <blockquote class="quote">
                                    {{expert.quote}}
                                </blockquote>
                            </figcaption>
                        </div>
                    </div>
                </div>
                <div class="expert-listing row justify-content-between" v-else>
                    <div class="col-sm-6  expert-item py-2" v-reveal="{animation:'from-bottom'}" v-for="(expert,index) in kor.experts"
                     :key="'experts-' + index">
                        <div class="expert-card bg-primary ">
                            <figure class="expert-img">
                                <img :src="expert.pic" alt="">
                            </figure>
                            <figcaption class="expert-details px-3 py-3 small">
                                <span class="name">{{expert.name}}</span>
                                <span class="role">{{expert.role}}</span>
                                <span class="place-of-work">{{expert.placeOfWork}}</span>
                                <span class="since">{{expert.since}}</span>
                                <hr class="my-2 dark">
                                <blockquote class="quote">
                                    {{expert.quote}}
                                </blockquote>
                            </figcaption>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
<script>
export default {
    data() {
        return {
            en: {
                experts: [{
                    name: "DR FRANCO VERCESI",
                    role: "PLASTIC SURGEON",
                    since: "Using ELLANSÉ since 2014",
                    placeOfWork: "Working in: Italy",
                    quote: "“ELLANSÉ results are longer-lasting compared to Hyaluronic Acid fillers and offers the benefits of neo-collagenesis.“",
                    pic: require('@/assets/exp-a.jpg')
                }, {
                    name: "DR KYUNGKOOK HONG",
                    role: "DERMATOLOGIST, PHD",
                    since: "Using ELLANSÉ since 2013",
                    placeOfWork: "Working in: South Korea",
                    quote: "“The patients I treat are all satisfied with the results, although they tend to be even more so after 4 months, when the neocollagenesis has started taking effect.”",
                    pic: require('@/assets/exp-b.jpg')
                }, {
                    name: "DR JONGSEO KIM",
                    role: "PLASTIC SURGEON",
                    since: "Using ELLANSÉ since 2012",
                    placeOfWork: "Working in: South Korea",
                    quote: "“My patients most value the effect of the neocollagenesis, improved skin texture and the long-lasting results.”",
                    pic: require('@/assets/exp-c.jpg')
                }, {
                    name: "DR PIERRE NICOLAU",
                    role: "PLASTIC SURGEON",
                    since: "Using ELLANSÉ since 2009",
                    placeOfWork: "Working in: Spain",
                    quote: "“After a treatment with ELLANSÉ, the most common response from my patients is a great satisfaction at having found something that lasts.”",
                    pic: require('@/assets/exp-d.jpg')
                }, {
                    name: "DR FRANCISCO DE MELO",
                    role: "PLASTIC SURGEON",
                    since: "Using ELLANSÉ since 2011",
                    placeOfWork: "Working in: Dubai",
                    quote: "“ELLANSÉ allows us to change the proportion and shape of certain facial features, avoiding the use of more invasive procedures.“",
                    pic: require('@/assets/exp-e.jpg')
                }, {
                    name: "DR SHANG LI LIN",
                    role: "DERMATOLOGIST",
                    since: "Using ELLANSÉ since 2015",
                    placeOfWork: "Working in: Taiwan",
                    quote: "“ELLANSÉ offers better volumisation compared to other Hyaluronic Acid fillers on the market. I can correct a variety of signs of ageing with only one product.“",
                    pic: require('@/assets/exp-f.jpg')
                }]
            },
            kor: {
                experts: [{
                    name: "프랑코 베르 시시(Franco Vercesi)",
                    role: "성형외과 전문의",
                    since: "ELLANSÉ 사용 시작: 2014 년 ",
                    placeOfWork: "근무지: 이탈리아",
                    quote: "“ELLANSÉ 는 하일루론산 필러보다 효과가 더 오래 지속되고 신규 콜라겐 생성의 이점을 제공합니다.”",
                    pic: require('@/assets/exp-a.jpg')
                }, {
                    name: "닥터 홍경국",
                    role: "피부과 전문의",
                    since: "ELLANSÉ 사용 시작: 2013 년 ",
                    placeOfWork: "근무지: 한국",
                    quote: "“시술한 환자들은 모두 시술 직후에도 결과에 흡족해하지만 신규 콜라겐 생성 효과가 나타나기 시작하는 4 개월 후에는 더욱 큰 만족감을 나타냅니다.”",
                    pic: require('@/assets/exp-b.jpg')
                }, {
                    name: "닥터 김정서",
                    role: "성형외과 전문의",
                    since: "ELLANSÉ 사용 시작: 2012 년",
                    placeOfWork: "근무지: 한국",
                    quote: "“제 환자들은 신규 콜라겐 생성 효과, 피부결 개선 및 오래 지속되는 결과를 가장 높이 평가합니다.” ",
                    pic: require('@/assets/exp-c.jpg')
                }, {
                    name: "닥터 피에르 니콜라우(Piere nicolau)",
                    role: "성형외과 전문의",
                    since: "ELLANSÉ 사용 시작: 2009 년 ",
                    placeOfWork: "근무지: 스페인",
                    quote: "“ELLANSÉ 시술을 받은 환자는 공통적으로 효과가 오래 지속되는 것에 크게 만족감을 표시합니다.” ",
                    pic: require('@/assets/exp-d.jpg')
                }, {
                    name: "닥터 프란시스코 드 멜로(Francisco De Melo) ",
                    role: "성형외과 전문의",
                    since: "ELLANSÉ 사용 시작: 2011 년 ",
                    placeOfWork: "근무지: 두바이 ",
                    quote: "“ELLANSÉ 를 사용하면 침습적 시술 없이도 얼굴 이목구비의 비율과 형태를 바꿀 수 있습니다.”",
                    pic: require('@/assets/exp-e.jpg')
                }, {
                    name: "닥터 샹리린(Shang-Li Lin) ",
                    role: "성형외과 전문의",
                    since: "ELLANSÉ 사용 시작: 2015 년 ",
                    placeOfWork: "근무지: 대만",
                    quote: "“ELLANSÉ 는 시중의 다른 하일루론산 필러보다 볼륨 보정 효과가 우수해서 하나의 제품만으로 다양한 노화 징후를 치료할 수 있습니다.“",
                    pic: require('@/assets/exp-f.jpg')
                }]
            }
        }
    }
}
</script>