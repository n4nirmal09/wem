<template>
    <section v-reveal="{animation:'fade-in'}">
        <div class="contain-bg">
            <div class="background">
                <div class="bg-img preload-background" v-bgimage="require('@/assets/bg-b.jpg')"></div>
            </div>
            <div class="container py-4">
                <div class="timeline-wrapper pb-3">
                    <h2 class="h1 mb-4 text-center bg-primary px-1 py-2 rounded elevate-1">
                        {{
                        langSwitcher({
                        en:"THE ELLANSÉ JOURNEY",
                        kor:"ELLANSÉ의 여정"
                        })
                        }}
                    </h2>
                    <div class="timeline-item-list" v-if="getLang === 'kor'">
                        <timeline-item v-for="(timelineItem, index) in timleLineTexts.kor.timelineItems" 
                            :data-reversed="index%2 !== 0"
                            :key="'timeline-' + index">
                            <template slot="timeline-year">
                                {{timelineItem.year}}
                            </template>
                            <template slot="timeline-detail-a" v-if="timelineItem.descA">
                                <div v-html="timelineItem.descA"></div>
                            </template>
                            <template slot="timeline-detail-b" v-if="timelineItem.descB">
                                <div v-html="timelineItem.descB"></div>
                            </template>
                        </timeline-item>
                    </div>
                    <div class="timeline-item-list" v-if="getLang === 'en'">
                        <timeline-item v-for="(timelineItem, index) in timleLineTexts.en.timelineItems" 
                            :data-reversed="index%2 !== 0"
                            :key="'timeline-' + index">
                            <template slot="timeline-year">
                                {{timelineItem.year}}
                            </template>
                            <template slot="timeline-detail-a" v-if="timelineItem.descA">
                                <div v-html="timelineItem.descA"></div>
                            </template>
                            <template slot="timeline-detail-b" v-if="timelineItem.descB">
                                <div v-html="timelineItem.descB"></div>
                            </template>
                        </timeline-item>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
<script>
import timelineItem from "./timeline-item.vue"
import { EllTimeline } from "@/utilities/timeline.js"
export default {
    data() {
        return {
            timleLineTexts: {
                en: {
                    timelineItems: [
                       {
                            year: "2006",
                            descA: '<p><span class="text-grey ft-bold">AQTIS Medical</span> founded.</p>',
                            descB: ''
                        },
                        {
                            year: "2007",
                            descA: '<p><span class="text-grey ft-bold">ELLANSÉ research and development product testing, production, intellectual property,</span> QA/REG set-up, literature search, and pre-clinical testing conducted.</p>',
                            descB: ''
                        },
                        {
                            year: "2008",
                            descA: '<p><span class="text-grey ft-bold">ELLANSÉ receives QMS ISO 13485 certification, </span>demonstrating AQTIS’ commitment to safety and quality.</p>',
                            descB: ''
                        },
                        {
                            year: "2009",
                            descA: '<p><span class="text-grey ft-bold">ELLANSÉ receives CE mark (CE 0344)</span> and launches in <span class="text-grey ft-bold">Europe</span></p>',
                            descB: ''
                        },
                        {
                            year: "2013",
                            descA: '<p><span class="text-grey ft-bold">ELLANSÉ</span> launches in <span class="text-grey ft-bold"> Korea.</span></p>',
                            descB: ''
                        },
                        {
                            year: "2014",
                            descA: '<p><span class="text-grey ft-bold">Sinclair Pharma acquires  AQTIS Medical</span></p>',
                            descB: '<p class="mt-1"><span class="text-grey ft-bold">First World Expert Meeting</span></p><p>(WEM) hosted by <span class="text-grey ft-bold">Sinclair</span> in Barcelona. 900 people in attendance.</p>'
                        },
                        {
                            year: "2018",
                            descA: '<p><span class="text-grey ft-bold">ELLANSÉ</span> launches in <span class="text-grey ft-bold"> Brazil</span></p>',
                            descB: '<p class="mt-1">5th WEM event grows to 1200 attendees.</p>'
                        },
                        {
                            year: "2019",
                            descA: '<p><span class="text-grey ft-bold">10th anniversary </span> of <span class="text-grey ft-bold">ELLANSÉ</span>.</p>',
                            descB: '<p class="mt-1"><span class="text-grey ft-bold">ELLANSÉ now registered in over 65 countries</span>, including Taiwan, Brazil, South Korea, and Spain.</p>' + 
                                '<ul class="list-unstyled flag-list mt-1 mb-2"><li><img src="' + require('@/assets/taipei-flag.png') + '" alt="" class="img-fluid"></li><li><img src="'+ require('@/assets/bra-flag.png') + '" alt="" class="img-fluid"></li><li><img src="'+ require('@/assets/kor-flag.png') +'" alt="" class="img-fluid"></li><li><img src="'+ require('@/assets/spa-flag.png') +'" alt="" class="img-fluid"></li></ul>' +
                                '<p><span class="text-grey ft-bold">1 million syringes sold</span> <br>worldwide since its launch.</p>'
                        },
                        {
                            year: "2020+",
                            descA: '<p><span class="text-grey ft-bold">ELLANSÉ</span> plans to launch in <span class="text-grey ft-bold">China, USA</span> and among other regions, extending its reach to some of the biggest aesthetic markets in the world.</p>',
                            descB: '',
                        }
                    ]
                },

                kor: {
                    timelineItems: [
                        {
                            year: "2006",
                            descA: '<p><span class="text-grey ft-bold">AQTIS Medical</span> 설립.</p>',
                            descB: ''
                        },
                        {
                            year: "2007",
                            descA: '<p><span class="text-grey ft-bold">ELLANSÉ 연구 개발, 제품 테스트, 생산, 지적 재산권,</span> 품질 관리/상표 등록 착수, 문헌 조사, 사전 임상 시험 실시.</p>',
                            descB: ''
                        },
                        {
                            year: "2008",
                            descA: '<p><span class="text-grey ft-bold">ELLANSÉ, QMS ISO 13485 인증 </span> 획득으로 안전성과 품질을 향상하기 위한 AQTIS 의 노력 입증.</p>',
                            descB: ''
                        },
                        {
                            year: "2009",
                            descA: '<p><span class="text-grey ft-bold">ELLANSÉ, CE 마크(CE 0344)</span> 획득 및 유럽에서 출시.</p>',
                            descB: ''
                        },
                        {
                            year: "2013",
                            descA: '<p><span class="text-grey ft-bold">ELLANSÉ,</span> 한국 <span class="text-grey ft-bold"> 출시.</span></p>',
                            descB: ''
                        },
                        {
                            year: "2014",
                            descA: '<p><span class="text-grey ft-bold">Sinclair Pharma, AQTIS Medical</span> 인수</p>',
                            descB: '<p class="mt-1"><span class="text-grey ft-bold">Sinclair, 바르셀로나에서 제 1 회 WEM(세계 전문가 모임) 개최. 900 명 참석.</p>'
                        },
                        {
                            year: "2018",
                            descA: '<p><span class="text-grey ft-bold">ELLANSÉ</span>, 브라질 <span class="text-grey ft-bold">출시</span></p>',
                            descB: '<p class="mt-1">제 5 회 WEM 학회, 참석자 1200 명으로 증가 </p>'
                        },
                        {
                            year: "2019",
                            descA: '<p><span class="text-grey ft-bold">10th anniversary </span> of <span class="text-grey ft-bold">ELLANSÉ</span>.</p>',
                            descB: '<p class="mt-1"><span class="text-grey ft-bold">ELLANSÉ</span> 는 현재 대만, 브라질, 한국 및 스페인을 포함하여 65 개 이상의 국가에 등록됨.</p>' +
                                '<ul class="list-unstyled flag-list mt-1 mb-2"><li><img src="' + require('@/assets/taipei-flag.png') + '" alt="" class="img-fluid"></li><li><img src="'+ require('@/assets/bra-flag.png') + '" alt="" class="img-fluid"></li><li><img src="'+ require('@/assets/kor-flag.png') +'" alt="" class="img-fluid"></li><li><img src="'+ require('@/assets/spa-flag.png') +'" alt="" class="img-fluid"></li></ul>' +
                                '<p>출시 이후 전 세계 <span class="text-grey ft-bold">100</span> 만 개 판매</p>'
                        },
                        {
                            year: "2020+",
                            descA: '<p><span class="text-grey ft-bold">ELLANSÉ, 사업을 확장하여 세계 최대의 에스테틱 시장,</span> 특히 중국과 미국에서 출시할 계획임 </p>',
                            descB: '',
                        }
                    ]
                }
            }
        }
    },
    mounted() {
        this.$nextTick(() => {
            new EllTimeline(this.$el.querySelector('.timeline-item-list'))
        })
    },
    components: {
        "timeline-item": timelineItem
    }
}
</script>