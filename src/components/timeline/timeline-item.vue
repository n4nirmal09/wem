<template>
    <div class="timeline-item">
        <span class="circle">
            <span class="inner-circle">
                <svg class="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16.9 18.6">
                    <path d="M.6.7c1.6 7.6 6.2 9.8 10 10.2-5 1.5-6 7.3-6 7.3 7.8 1.3 10.5-5 11.1-6.8-1.2.4-3.1 1.4-5.7 3.5 0 0 1.6-2.8 4.2-4.1.1-.1.2-.1.4-.2l.4-.2S10.3 9 6.9 4.6c0 0 5.6 4.8 9.4 4.9C12.7-2.4.6.7.6.7" fill="#fcee21" />
                </svg>
            </span>
        </span>
        <div class="ver-line"></div>
        <div class="timeline-col timeline-year">
            <span class="year-holder">
                <span class="text"><slot name="timeline-year"></slot></span>
                <span class="year-bottom-line"></span>
                <span class="hor-line"></span>
            </span>
        </div>
        <div class="timeline-details timeline-col">
            <div class="imp-detail">
                <slot name="timeline-detail-a"></slot>
                <span class="hor-line"></span>
            </div>
            <div class="other-detail">
                <slot name="timeline-detail-b"></slot>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    mounted() {
        let itemOffsetingHeight = this.debounce(() => {
            this.otherDetailsOffseting()
        }, 250);
        itemOffsetingHeight()
        window.addEventListener('resize', itemOffsetingHeight)
    },

    methods: {
        otherDetailsOffseting() {
            let otherDetailHeight = 
            this.$el.querySelector('.other-detail').offsetHeight === 0 ? 50 : this.$el.querySelector('.other-detail').offsetHeight


            this.$el.style.paddingBottom = otherDetailHeight + 'px'
        }
    }
}
</script>