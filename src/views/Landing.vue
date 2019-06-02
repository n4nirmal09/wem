<template>
	<div class="landing-page-wrapper">
		<block-banner></block-banner>
		<block-celebrates></block-celebrates>
		<block-article-a></block-article-a>
		<block-products></block-products>
		<block-results></block-results>
		<block-form></block-form>
		<block-experts></block-experts>
		<block-footer></block-footer>
	</div>
</template>

<script>
	import blockBanner from '@/components/block-banner.vue'
	import blockCelebrates from '@/components/block-celebrates.vue'
	import blockArticleA from '@/components/block-article-a.vue'
	import blockProducts from '@/components/block-products.vue'
	import blockResults from '@/components/block-results.vue'
	import blockForm from '@/components/block-form.vue'
	import blockExperts from '@/components/block-experts.vue'
	import blockFooter from '@/components/block-footer.vue'
	export default {
		components:{
			'block-banner': blockBanner,
			'block-celebrates': blockCelebrates,
			'block-article-a': blockArticleA,
			'block-products': blockProducts,
			'block-results': blockResults,
			'block-form': blockForm,
			'block-experts': blockExperts,
			'block-footer': blockFooter
		}
	}
</script>