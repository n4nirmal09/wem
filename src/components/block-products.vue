<template>
	<section v-reveal="{animation:'from-bottom'}">
		<div class="contain-bg">
			<div class="background">
				<div class="bg-img preload-background" v-bgimage="require('@/assets/bg-b.jpg')"></div>
			</div>
			<div class="container py-4">
				<h2 class="text-center mb-0 mt-1">
					ELLANSÉ : LONG-LASTING NATURAL COLLAGEN STIMULATION KEY ATTRIBUTES
				</h2>
				<hr class="dark mb-4">
				<div class="row align-items-center">
					<div class="col-lg-6 pr-lg-4">
						<div class="ell-product-details-features-list">
							<div class="ell-product-details-feature bg-primary p-3 px-md-4 rounded" 
							v-reveal="{animation:'from-bottom'}">
								<h6 class="ft-medium mb-1">UNIQUE COMPOSITION</h6>
								<p class="text-grey mb-2 small ft-bold">100% BIODEGRADABLE</p>
								<ul class="pl-2">
									<li>70% CMC gel carrier</li>
									<li>30% PCL microspheres</li>
								</ul>
							</div>
							<div class="ell-product-details-feature bg-primary p-3 px-md-4 rounded"
							v-reveal="{animation:'from-bottom'}">
								<h6 class="ft-medium mb-1">SPECIFIC PROPERTIES</h6>
								<p class="text-grey mb-2 small ft-bold">OPTIMAL BIOCOMPATIBILITY</p>
								<ul class="pl-2">
									<li>Microspheres size (25-50 m) </li>
									<li>Microspheres shape: Smooth and spherical</li>
								</ul>
							</div>
							<div class="ell-product-details-feature bg-primary p-3 px-md-4 rounded"
							v-reveal="{animation:'from-bottom'}">
								<h6 class="ft-medium mb-1">EXCELLENT SAFETY PROFILE</h6>
								<p class="text-grey mb-2 small ft-bold">SAFE TREATMENT</p>
								<ul class="pl-2">
									<li>High safety profile</li>
									<li>Very low adverse event rate of 0.056% (from its launch in 2009 to December 2018)</li>
									<li>30M safety data demonstrating a good tolerance</li>
								</ul>
							</div>
						</div>
					</div>
					<div class="col-lg-6 mt-4 mt-lg-0" v-reveal="{animation:'fade-in'}">
						<h3 class="mb-0">FOUR OPTIONS</h3>
						<hr class="primary mb-3">

						<p>There are four ELLANSÉ variants that offer results lasting from at least one to over four years*.</p>
						<div class="ele-product-box-list" v-reveal="{animation:'from-bottom-elems-stagger'}">
							<div class="ele-product-box py-3">
								<figure class="img">
									<img src="@/assets/ellanse-s-pack.png" alt="">
								</figure>
								<figcaption class="rounded border-primary px-2 py-1 bg-secondary text-white text">
									<span class="product-name">ELLANSÉ - S</span>
									<span class="product-dur">At least 1 year</span>
								</figcaption>
							</div>
							<div class="ele-product-box py-3">
								<figure class="img">
									<img src="@/assets/ellanse-m-pack.png" alt="">
								</figure>
								<figcaption class="rounded border-primary px-2 py-1 bg-secondary text-white text">
									<span class="product-name">ELLANSÉ - M</span>
									<span class="product-dur">At least 2 years</span>
								</figcaption>
							</div>
							<div class="ele-product-box py-3">
								<figure class="img">
									<img src="@/assets/ellanse-l-pack.png" alt="">
								</figure>
								<figcaption class="rounded border-primary px-2 py-1 bg-secondary text-white text">
									<span class="product-name">ELLANSÉ - L</span>
									<span class="product-dur">At least 3 years*</span>
								</figcaption>
							</div>
							<div class="ele-product-box py-3">
								<figure class="img">
									<img src="@/assets/ellanse-e-pack.png" alt="">
								</figure>
								<figcaption class="rounded border-primary px-2 py-1 bg-secondary text-white text">
									<span class="product-name">ELLANSÉ - E</span>
									<span class="product-dur">At least 4 years*</span>
								</figcaption>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>
</template>