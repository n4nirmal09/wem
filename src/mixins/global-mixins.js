export default {
    created() {
        const resize = this.debounce(() => {
            this.breakpoint.width = window.innerWidth
            this.breakpoint.height = window.innerHeight
        }, 250)

        const scroll = this.debounce(() => {
            this.scrollTopPos = window.scrollY
        }, 250)

        window.addEventListener('resize', resize)
        window.addEventListener('scroll', scroll)
    },
    data() {
        return {
            scrollTopPos: window.scrollY,
            breakpoint: {
                width: window.innerWidth || 0,
                height: window.innerHeight || 0
            }
        }
    },
    computed: {
        getLang() {
            return this.$store.getters.getLang
        }
    },
    methods: {
        select(s, o) {
            if (o) {
                return o.querySelector(s)
            } else {
                return document.querySelector(s)
            }
        },

        selectAll(s, o) {
            if (o) {
                return o.querySelectorAll(s)
            } else {
                return document.querySelectorAll(s)
            }
        },

        langSwitcher(texts){
            if(this.getLang === 'en'){
                return texts.en
            } else {
                return texts.kor
            }
        },

        scrollToTop(scrollDuration, event) {
            if (event) event.preventDefault()
            TweenLite.to(window, 1, {scrollTo: {y:scrollDuration, autoKill:false}})
        },

        debounce(func, wait, immediate) {
            var timeout;
            return function() {
                var context = this,
                    args = arguments;
                var later = function() {
                    timeout = null;
                    if (!immediate) func.apply(context, args);
                };
                var callNow = immediate && !timeout;
                clearTimeout(timeout);
                timeout = setTimeout(later, wait);
                if (callNow) func.apply(context, args);
            }
        }
    }
}