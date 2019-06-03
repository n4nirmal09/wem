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
                                    <span class="text-grey ft-medium">AQTIS Medical</span> <br> is founded.
                                </p>
                            </template>
                        </timeline-item>
                        <timeline-item data-reversed="true">
                            <template slot="timeline-year">2007</template>
                            <template slot="timeline-detail-a">
                                <p>
                                    <span class="text-grey ft-medium">ELLANSÉ research and development</span>
                                </p>
                                <p class="small">product testing, production, intellectual property, QA/REG set-up, literature search, and pre-clinical testing conducted.</p>
                            </template>
                            <template slot="timeline-detail-b">
                                <p class="mt-1">
                                    <span class="text-grey ft-medium">First Silhouette Lift event in Barcelona.</span>
                                </p>
                                <p class="small">30 people in attendance.</p>
                            </template>
                        </timeline-item>
                        <timeline-item>
                            <template slot="timeline-year">2008</template>
                            <template slot="timeline-detail-a">
                                <p>
                                    <span class="text-grey ft-medium">ELLANSÉ receives QMS ISO 13485 certification, </span>
                                </p>
                                <p class="small">
                                    demonstrating AQTIS’ commitment to safety and quality of medical devices.
                                </p>
                            </template>
                        </timeline-item>
                        <timeline-item data-reversed="true">
                            <template slot="timeline-year">2009</template>
                            <template slot="timeline-detail-a">
                                <p>
                                    <span class="text-grey ft-medium">ELLANSÉ launches in Europe.</span>
                                </p>
                            </template>
                        </timeline-item>
                        <timeline-item>
                            <template slot="timeline-year">2013</template>
                            <template slot="timeline-detail-a">
                                <p>
                                    <span class="text-grey ft-medium">ELLANSÉ launches in Korea.</span>
                                </p>
                            </template>
                        </timeline-item>
                        <timeline-item data-reversed="true">
                            <template slot="timeline-year">2014</template>
                            <template slot="timeline-detail-a">
                                <p>
                                    <span class="small">Sinclair Pharma acquires AQTIS Medical</span>
                                    <span class="text-grey ft-medium"> AQTIS Medical.</span>
                                </p>
                            </template>
                            <template slot="timeline-detail-b">
                                <p class="mt-1">
                                    <span class="text-grey ft-medium">First World Expert Meeting</span>
                                </p>
                                <p class="small">
                                    (WEM) hosted by Sinclair in Barcelona. 900 people in attendance.
                                </p>
                            </template>
                        </timeline-item>
                        <timeline-item>
                            <template slot="timeline-year">2018</template>
                            <template slot="timeline-detail-a">
                                <p>
                                    <span class="small">ELLANSÉ launches in</span> <span class="text-grey ft-medium"> Brazil</span>
                                </p>
                            </template>
                            <template slot="timeline-detail-b">
                                <p class="mt-1"><span class="text-grey ft-medium">5th WEM event</span> <span class="small"> grows to 1200 attendees.</span>
                                </p>
                            </template>
                        </timeline-item>
                        <timeline-item data-reversed="true">
                            <template slot="timeline-year">2019</template>
                            <template slot="timeline-detail-a">
                                <p>
                                    <span class="text-grey ft-medium">10th anniversary </span><span class="small"> of ELLANSÉ.</span>
                                </p>
                            </template>
                            <template slot="timeline-detail-b">
                                <p class="mt-1">
                                    <span class="small">ELLANSÉ now registered in</span> <span class="text-grey ft-medium"> over 70 countries</span>, <span class="small">including key markets Taiwan, Brazil, South Korea, and Spain.</span>
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
                                    <span class="ft-medium">More than 1m</span><span class="small"> syringes sold worldwide. </span>
                                </p>
                            </template>
                        </timeline-item>
                        <timeline-item>
                            <template slot="timeline-year">2020+</template>
                            <template slot="timeline-detail-a">
                                <p>
                                    <span class="text-grey ft-medium">New Manufacturing site</span>
                                    <span class="small"> enabling brand expansion.</span>.
                                </p>
                            </template>
                            <template slot="timeline-detail-b">
                                <p class="mt-1"><span class="ft-medium">ELLANSÉ plans to launch in China, US</span><br>
                                    <span class="small"> and more, extending its reach to some of the biggest </span></p>
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