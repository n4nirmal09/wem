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
				<hr class="dark mb-3">
                <div class="expert-listing row justify-content-between">
                    <div class="col-sm-6  expert-item py-2" v-reveal="{animation:'from-bottom'}">
                        <div class="expert-card bg-primary ">
                            <figure class="expert-img">
                                <img src="@/assets/exp-a.jpg" alt="">
                            </figure>
                            <figcaption class="expert-details px-3 py-3 small">
                                <span class="name">DR FRANCO VERCESI</span>
                                <span class="role">MD PLASTIC SURGEON</span>
                                <span class="place-of-work">Working in: Italy</span>
                                <span class="since">Using ELLANSÉ since 2014</span>
                                <hr class="my-2 dark">
                                <blockquote class="quote">
                                    “ELLANSÉ results are longer-lasting compared to Hyaluronic Acid fi llers and offers the benefi ts of neo-collagenesis.“
                                </blockquote>
                            </figcaption>
                        </div>
                    </div>
                    <div class="col-sm-6  expert-item py-2" v-reveal="{animation:'from-bottom'}">
                        <div class="expert-card bg-primary">
                            <figure class="expert-img">
                                <img src="@/assets/exp-b.jpg" alt="">
                            </figure>
                            <figcaption class="expert-details bg-primary px-3 py-3 small">
                                <span class="name">DR KYUNGKOOK HONG</span>
                                <span class="role">MD PLASTIC SURGEON</span>
                                <span class="place-of-work">Working in: South Korea</span>
                                <span class="since">Using ELLANSÉ since 2013</span>
                                <hr class="my-2 dark">
                                <blockquote class="quote">
                                    “The patients I treat are all satisfi ed with the results, although they tend to be even more so after 4 months, when the neocollagenesis has started taking effect.”
                                </blockquote>
                            </figcaption>
                        </div>
                    </div>
                    <div class="col-sm-6  expert-item py-2" v-reveal="{animation:'from-bottom'}">
                        <div class="expert-card bg-primary">
                            <figure class="expert-img">
                                <img src="@/assets/exp-c.jpg" alt="">
                            </figure>
                            <figcaption class="expert-details bg-primary px-3 py-3 small">
                                <span class="name">DR JONGSEO KIM</span>
                                <span class="role">MD PLASTIC SURGEON</span>
                                <span class="place-of-work">Working in: South Korea</span>
                                <span class="since">Using ELLANSÉ since 2012</span>
                                <hr class="my-2 dark">
                                <blockquote class="quote">
                                    “My patients most value the effect of the neocoll-genesis, improved skin texture and the long-lasting results.”
                                </blockquote>
                            </figcaption>
                        </div>
                    </div>
                    <div class="col-sm-6  expert-item py-2" v-reveal="{animation:'from-bottom'}">
                        <div class="expert-card bg-primary">
                            <figure class="expert-img">
                                <img src="@/assets/exp-d.jpg" alt="">
                            </figure>
                            <figcaption class="expert-details bg-primary px-3 py-3 small">
                                <span class="name">DR PIERRE NICOLAU</span>
                                <span class="role">MD PLASTIC SURGEON</span>
                                <span class="place-of-work">Working in: Spain</span>
                                <span class="since">Using ELLANSÉ since 2009</span>
                                <hr class="my-2 dark">
                                <blockquote class="quote">
                                    “After a treatment with ELLANSÉ, the most common response from my patients is a great satisfaction at having found something that lasts.”
                                </blockquote>
                            </figcaption>
                        </div>
                    </div>
                    <div class="col-sm-6  expert-item py-2" v-reveal="{animation:'from-bottom'}">
                        <div class="expert-card bg-primary">
                            <figure class="expert-img">
                                <img src="@/assets/exp-e.jpg" alt="">
                            </figure>
                            <figcaption class="expert-details bg-primary px-3 py-3 small">
                                <span class="name">DR FRANCISCO DE MELO</span>
                                <span class="role">MD PLASTIC SURGEON</span>
                                <span class="place-of-work">Working in: Dubai</span>
                                <span class="since">Using ELLANSÉ since 2011</span>
                                <hr class="my-2 dark">
                                <blockquote class="quote">
                                    “ELLANSÉ allows us to change the proportion and shape of certain facial features, avoiding the use of more invasive procedures.“ 
                                </blockquote>
                            </figcaption>
                        </div>
                    </div>
                    <div class="col-sm-6  expert-item py-2" v-reveal="{animation:'from-bottom'}">
                        <div class="expert-card bg-primary">
                            <figure class="expert-img">
                                <img src="@/assets/exp-f.jpg" alt="">
                            </figure>
                            <figcaption class="expert-details bg-primary px-3 py-3 small">
                                <span class="name">DR SHANG LI LIN</span>
                                <span class="role">MD PLASTIC SURGEON</span>
                                <span class="place-of-work">Working in: Taiwan</span>
                                <span class="since">Using ELLANSÉ since 2015</span>
                                <hr class="my-2 dark">
                                <blockquote class="quote" >
                                    “ELLANSÉ offers better volumisation compared to other Hyaluronic Acid fi llers on the market. I can correct a variety of signs of ageing with only one product.“ 
                                </blockquote>
                            </figcaption>
                        </div>
                    </div>
                </div>
			</div>
         </div>
    </section>
</template>