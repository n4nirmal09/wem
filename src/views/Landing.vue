<template>
	<div class="landing-page-wrapper">
		<block-banner></block-banner>
		<block-celebrates></block-celebrates>
		<block-article-a></block-article-a>
		<block-timeline></block-timeline>
		<block-products></block-products>
		<block-results></block-results>
		<block-experts></block-experts>
		<block-form></block-form>
		<block-references></block-references>
		<block-footer></block-footer>
	</div>
</template>

<script>
	import blockBanner from '@/components/block-banner.vue'
	import blockCelebrates from '@/components/block-celebrates.vue'
	import blockTimeline from '@/components/timeline/block-timeline.vue'
	import blockArticleA from '@/components/block-article-a.vue'
	import blockProducts from '@/components/block-products.vue'
	import blockResults from '@/components/block-results.vue'
	import blockForm from '@/components/block-form.vue'
	import blockExperts from '@/components/block-experts.vue'
	import blockReferences from '@/components/block-references.vue'
	export default {
		components:{
			'block-banner': blockBanner,
			'block-celebrates': blockCelebrates,
			'block-timeline': blockTimeline,
			'block-article-a': blockArticleA,
			'block-products': blockProducts,
			'block-results': blockResults,
			'block-form': blockForm,
			'block-experts': blockExperts,
			'block-references': blockReferences
		}
	}
</script>