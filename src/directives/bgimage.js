export default {
	bind (el, binding, vnode) {
		var img = new Image();
		var opacityVal = el.style.opacity;
		
		let scrollController = new ScrollMagic.Controller(),
		scene = new ScrollMagic.Scene({ triggerElement: el, triggerHook: 'onEnter' })
		.on('enter', function(){
			img.src = binding.value;
			img.onload = function() {
					el.style.backgroundImage = 'url('+ binding.value +')';
					//TweenLite.set(el,{autoAlpha : 1});
					el.classList.remove('preload-background');
					el.classList.add('image-loaded');
			}
		}).addTo(scrollController)
	}
}