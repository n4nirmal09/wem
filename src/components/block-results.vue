<template>
	<section v-reveal="{animation:'from-bottom'}">
		<div class="container py-4">
			<h2 class="text-center mb-0 mt-1">
					OUTSTANDING RESULTS
			</h2>
			<hr class="dark mb-4">
			<div class="swap-container" v-reveal="{animation:'from-bottom'}">
				<h3 class="text-primary bg-dark text-center rounded px-3 py-1">Discover Wu’s experience with ELLANSÉ</h3>
				<div class="swap-box">
					<div class="swap-before-after cocoen">
					  <img src="@/assets/ch-after.png" alt="">
					  <img src="@/assets/ch-before.png" alt="">
					</div>
					<div class="swap-text bg-secondary text-white text-center px-2 py-1">
						<transition name="fade" mode="out-in">
							<div class="after" v-if="showingNow === 'after'">
								20 months after ELLANSÉ
							</div>
							<div v-else class="before">
								Wu, age 44 before ELLANSÉ
							</div>
						</transition>
						
					</div>
				</div>
			</div>
			<h3 class="text-center mb-0 mt-4" v-reveal="{animation:'from-bottom'}">
					LIFTING AND LONG-LASTING EFFECTS
			</h3>
			<hr class="dark mb-0" v-reveal="{animation:'from-bottom'}">
			<div class="text-center" v-reveal="{animation:'from-bottom'}">
				<a href="" class="btn btn-dark text-primary">Discover more patient experiences</a>
			</div>
		</div>
	</section>
</template>
<script>
	import {Cocoen} from "@/utilities/cocoen.js"
	export default{
		data() {
			return {
				showingNow: "before"
			}
		},
		mounted() {
			new Cocoen(document.querySelector('.swap-before-after'),{
				dragCallback: (e) =>{
					if(e * 100 > 50) {
						this.showingNow = "after"
					} else {
						this.showingNow = "before"
					}
				}
			})
		}
	}
</script>