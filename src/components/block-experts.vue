<template>
    <section v-reveal="{animation:'from-bottom'}">
        <div class="contain-bg">
            <div class="background">
                <div class="bg-img preload-background" v-bgimage="require('@/assets/bg-b.jpg')"></div>
            </div>
            <div class="container py-4">
				<h2 class="text-center mb-0 mt-1">
						EXPERT REFERALS
				</h2>
				<hr class="dark mb-4">
                <div class="experts-listing row justify-content-between">
                    <div class="col-6 col-lg-5 expert-item">
                        <div class="expert-card">
                            <figure class="expert-img"></figure>
                            <figcaption class="expert-details bg-primary px-3 py-4">
                                <span class="name">DR FRANCO VERCESI</span>
                                <span class="role">MD PLASTIC SURGEON</span>
                                <span class="since">User since 2014</span>
                                <hr class="my-2 dark">
                                <blockquote class="quote">
                                    “ELLANSÉ results are longer-lasting compared to Hyaluronic Acid fi llers and offers the benefi ts of neo-collagenesis.“
                                </blockquote>
                            </figcaption>
                        </div>
                    </div>
                    <div class="col-6 col-lg-5">
                        <div class="expert-card">
                            <figure class="expert-img"></figure>
                            <figcaption class="expert-details bg-primary px-3 py-4">
                                <span class="name">DR KYUNGKOOK HONG</span>
                                <span class="role">MD PLASTIC SURGEON</span>
                                <span class="since">User since 2013</span>
                                <hr class="my-2 dark">
                                <blockquote class="quote">
                                    “The patients I treat are all satisfi ed with the results immediately, although they tend to be even more so after 4 months, when the neocollagenesis has started and started taking effect.”
                                </blockquote>
                            </figcaption>
                        </div>
                    </div>
                </div>
			</div>
         </div>
    </section>
</template>