export class EllTimeline {
    constructor(container, options) {
        this.options = Object.assign({}, EllTimeline.defaults, options)
        this.container = container
        this.timelineItems = this.container.querySelectorAll('.timeline-item')
        this.scrollController = new ScrollMagic.Controller()
        this.lineTween = new TimelineMax()
        this.init()
    }

    init() {
        TweenLite.to(this.container, 0.2, { autoAlpha: 1 })

        for (let i = 0; i <= this.timelineItems.length - 1; i++) {
            this.setContentScene(this.timelineItems[i])
            this.buildingLineAnim(this.timelineItems[i].querySelector('.ver-line'))
        }
        this.lineScene()


    }

    setContentScene(item) {
        let yearHorLineOrigin = item.dataset.reversed ? '0% 50%' : '100% 50%',
            detailLineOrigin = item.dataset.reversed ? '100% 50%' : '0% 50%',
            tween = new TimelineMax()

        tween.add(this.buildingCircleAnim(item.querySelector('.circle')))
        .from(item.querySelector('.year-holder .hor-line'), 0.8, {
        	scaleX:0, 
        	transformOrigin: yearHorLineOrigin,
        	ease: Power0.easeNone
        },0.5)
        .from(item.querySelector('.year-bottom-line'), 0.8, {
        	scaleX:0, 
        	transformOrigin: yearHorLineOrigin,
        	ease: Power0.easeNone
        },0.8)
        .from(item.querySelector('.timeline-details .hor-line'), 0.8, {
        	scaleX:0, 
        	transformOrigin: detailLineOrigin,
        	ease: Power0.easeNone
        },0.5)
        .from(item.querySelector('.year-holder>span'), 0.8, { autoAlpha: 0, y: 200, ease: Power2.easeOut },1)
        .staggerFrom(item.querySelectorAll('.timeline-details p,ul'), 0.8, { autoAlpha: 0, y: 200, ease: Power2.easeOut },0.1,1.2)
        
        let scene = new ScrollMagic.Scene({
                triggerElement: item,
                triggerHook: this.options.hook,
                reverse: this.options.reverse
            })
            .setTween(tween)
            .addTo(this.scrollController)

    }

    buildingLineAnim(line) {
        this.lineTween.fromTo(line, 0.2, {
            height: 0,
            transformOrigin: "50% 0%"
        }, {
            height: '100%',
            transformOrigin: "50% 0%",
            ease: Power0.easeNone
        })
    }

    buildingCircleAnim(circle) {
    	let tween = new TimelineMax()
    	tween.staggerFrom([circle,circle.querySelector('.inner-circle')],1,{
    		scale: 0,
    		ease: Back.easeOut.config(3)
    	},0.1)
    	.from(circle.querySelector('path'),0.8,{
    		rotation: -80,
    		scale: 0,
    		transformOrigin: "100% 50%",
    		ease: Back.easeOut.config(2)
    	},0.8)
    	return tween
    }

    lineScene() {

        let scene = new ScrollMagic.Scene({
                triggerElement: this.container,
                triggerHook: this.options.hook,
                reverse: this.options.reverse
            })
            .setTween(this.lineTween)
            .addTo(this.scrollController)
    }
}

EllTimeline.defaults = {
    reverse: true,
    hook: "onEnter"
}