let scrollController = new ScrollMagic.Controller()

export default {
	inserted (el, binding) {
		
		let revealValue = binding.value.animation,
			revealEaseTiming = binding.value.timing || 0.8,
			revealEase = Power2.easeOut,
			revealHook = 'onEnter',
			revealDuration = binding.value.duration || 0,
			revealStaggerRatio = 0.2,
			revealReverse = false,
			revealOffset = 50,
			tween = null
		
		switch(revealValue){
			case 'fade-in':
			tween = TweenLite.from(el,revealEaseTiming,{autoAlpha: 0,ease: revealEase})
			break
			case 'from-bottom':
			tween = TweenMax.from(el,revealEaseTiming,{
				autoAlpha: 0,
				y: 200,
				ease: revealEase})
			break
			case 'from-bottom-elems-stagger':
			tween = TweenMax.staggerFrom(el.children,revealEaseTiming,{
				autoAlpha: 0,
				y: 200,
				ease: revealEase},revealStaggerRatio)
			break
			case 'celebrate':
			tween = new TimelineMax()
			.staggerFrom(el.querySelectorAll('.logo-holder .path-grp>path'),1,{
				y: 100,
				autoAlpha: 0,
				ease: Power2.easeOut
			},0.2)
			.staggerFrom(el.querySelectorAll('.logo-holder .years-grp>path'),0.5,{
				y: 50,
				autoAlpha: 0,
				ease: Power2.easeOut
			},0.1,0.5)
			.staggerFrom(el.querySelectorAll('.logo-holder .text-grp>*'),0.5,{
				scaleX: 0,
				autoAlpha: 0,
				ease: Power2.easeOut
			},0.1)
			.from(el.querySelector('.text'),1,{autoAlpha: 0},1.8)
			.from(el.querySelector('.icon-grp>path'),1,{
	    		rotation: -80,
	    		scale: 0,
	    		transformOrigin: "50% 100%",
	    		ease: Back.easeOut.config(2)
	    	},0.8)
			.timeScale(1.5)
			break
			default:
			tween = null
			break
		}

		new ScrollMagic.Scene({ 
			triggerElement: el, 
			triggerHook: revealHook, 
			duration: revealDuration, 
			reverse: revealReverse,
			offset: revealOffset
		})
		.setTween(tween)
		.addTo(scrollController)
	}
}