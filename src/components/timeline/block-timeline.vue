<template>
    <section v-reveal="{animation:'from-bottom'}">
        <div class="contain-bg">
            <div class="background">
                <div class="bg-img preload-background" v-bgimage="require('@/assets/bg-b.jpg')"></div>
            </div>
            <div class="container py-4">
                <div class="timeline-wrapper pb-3">
                    <h2 class="h1 mb-4 text-center bg-primary px-1 py-2 rounded elevate-1">THE ELLANSÉ JOURNEY</h2>
                    <div class="timeline-item-list">
                        <timeline-item>
                            <template slot="timeline-year">2006</template>
                            <template slot="timeline-detail-a">
                                <p>
                                    <span class="text-grey ft-bold">AQTIS Medical</span> <br> is founded.
                                </p>
                            </template>
                        </timeline-item>
                        <timeline-item data-reversed="true">
                            <template slot="timeline-year">2007</template>
                            <template slot="timeline-detail-a">
                                <p>
                                    <span class="text-grey ft-bold">ELLANSÉ research and development product testing, production, intellectual property,</span> QA/REG set-up, literature search, and pre-clinical testing conducted.
                                </p>
                            </template>
                            <!-- <template slot="timeline-detail-b">
                                <p class="mt-1">
                                    <span class="text-grey ft-bold">First Silhouette Lift event in Barcelona.</span>
                                </p>
                                <p class="small">30 people in attendance.</p>
                            </template> -->
                        </timeline-item>
                        <timeline-item>
                            <template slot="timeline-year">2008</template>
                            <template slot="timeline-detail-a">
                                <p>
                                    <span class="text-grey ft-bold">ELLANSÉ receives QMS ISO 13485 certification, </span> 
                                    demonstrating AQTIS’ commitment to safety and quality of medical devices.
                                </p>
                            </template>
                        </timeline-item>
                        <timeline-item data-reversed="true">
                            <template slot="timeline-year">2009</template>
                            <template slot="timeline-detail-a">
                                <p>
                                    <span class="text-grey ft-bold">ELLANSÉ receives CE mark (CE 0344)</span> and launches in <span class="text-grey ft-bold">Europe</span>
                                </p>
                            </template>
                        </timeline-item>
                        <timeline-item>
                            <template slot="timeline-year">2013</template>
                            <template slot="timeline-detail-a">
                                <p>
                                    ELLANSÉ launches in <span class="text-grey ft-bold"> Korea.</span>
                                </p>
                            </template>
                        </timeline-item>
                        <timeline-item data-reversed="true">
                            <template slot="timeline-year">2014</template>
                            <template slot="timeline-detail-a">
                                <p>
                                    Sinclair Pharma acquires <span class="text-grey ft-bold"> AQTIS Medical</span>
                                </p>
                            </template>
                            <template slot="timeline-detail-b">
                                <p class="mt-1">
                                    <span class="text-grey ft-bold">First World Expert Meeting</span>
                                </p>
                                <p>
                                    (WEM) hosted by Sinclair in Barcelona. 900 people in attendance.
                                </p>
                            </template>
                        </timeline-item>
                        <timeline-item>
                            <template slot="timeline-year">2018</template>
                            <template slot="timeline-detail-a">
                                <p>
                                    <span>ELLANSÉ launches in</span> <span class="text-grey ft-bold"> Brazil</span>
                                </p>
                            </template>
                            <template slot="timeline-detail-b">
                                <p class="mt-1">5th WEM event grows to 1200 attendees.</p>
                            </template>
                        </timeline-item>
                        <timeline-item data-reversed="true">
                            <template slot="timeline-year">2019</template>
                            <template slot="timeline-detail-a">
                                <p>
                                    <span class="text-grey ft-bold">10th anniversary </span> of ELLANSÉ.
                                </p>
                            </template>
                            <template slot="timeline-detail-b">
                                <p class="mt-1">
                                    <span class="text-grey ft-bold">ELLANSÉ now registered in over 70 countries</span>, including key markets Taiwan, Brazil, South Korea, and Spain.
                                </p>
                                <p>
                                    <ul class="list-unstyled flag-list mt-1 mb-2">
                                        <li><img src="@/assets/taipei-flag.png" alt="" class="img-fluid"></li>
                                        <li><img src="@/assets/bra-flag.png" alt="" class="img-fluid"></li>
                                        <li><img src="@/assets/kor-flag.png" alt="" class="img-fluid"></li>
                                        <li><img src="@/assets/spa-flag.png" alt="" class="img-fluid"></li>
                                    </ul>
                                </p>
                                <p>
                                    <span class="text-grey ft-bold">1million syringes sold</span> <br>worldwide since its launch.
                                </p>
                            </template>
                        </timeline-item>
                        <timeline-item>
                            <template slot="timeline-year">2020+</template>
                            <template slot="timeline-detail-a">
                                <p>
                                    <span class="text-grey ft-bold">ELLANSÉ plans to launch in China, US </span> among other regions, 
                                    extending its reach to some of the biggest aesthetic markets in the world.
                                </p>
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