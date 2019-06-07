<template>
    <transition name="fade">
        <div class="btn btn-primary btn-scroll-up fab" v-if="scrollTopPos > breakpoint.height" @click="scrollToTop(0,$event)">
        	<svg class="up-arrow-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 195.52 195.52"><path d="M59.21,91.47,71.7,79l41.19,41.19L100.4,132.66Z" transform="translate(-2.48 -2.02)"></path><path d="M87.92,120.18,129.11,79,141.6,91.47,100.4,132.66Z" transform="translate(-2.48 -2.02)"></path></svg>
        </div>
    </transition>
</template>