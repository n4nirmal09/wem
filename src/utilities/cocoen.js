export class Cocoen {
    constructor(element, options) {
        this.options = Object.assign({}, Cocoen.defaults, options);
        this.element = element || document.querySelector('.cocoen');

        this.init();
    }

    init() {
        this.createElements();
        this.addEventListeners();
        this.dimensions();
    }

    createElements() {
        // Create drag element
        const span = document.createElement('span');
        span.className = this.options.dragElementSelector.replace('.', '');
        this.element.appendChild(span);
        // Create prompt
        const prompt = document.createElement('div');
        const promptText = document.createElement('div');
        prompt.className = "slider-prompt";
        promptText.className = "text";
        promptText.innerHTML ="Drag to reveal";
        prompt.appendChild(promptText);
        this.element.appendChild(prompt);
        // Wrap first image in div
        const wrapper = document.createElement('div');
        const firstImage = this.element.querySelector('img:first-child');
        wrapper.appendChild(firstImage.cloneNode(true));
        firstImage.parentNode.replaceChild(wrapper, firstImage);
        // Set class elements we need later
        this.dragElement = this.element.querySelector(this.options.dragElementSelector);
        this.promptElement = this.element.querySelector('.slider-prompt');
        this.beforeElement = this.element.querySelector('div:first-child');
        this.beforeImage = this.beforeElement.querySelector('img');
    }

    addEventListeners() {
        this.element.addEventListener('click', this.onTap.bind(this));
        this.element.addEventListener('mousemove', this.onDrag.bind(this));
        this.element.addEventListener('touchmove', this.onDrag.bind(this));
        this.dragElement.addEventListener('mousedown', this.onDragStart.bind(this));
        this.dragElement.addEventListener('touchstart', this.onDragStart.bind(this));

        window.addEventListener('mouseup', this.onDragEnd.bind(this));
        window.addEventListener('resize', this.dimensions.bind(this));
    }

    dimensions() {
        this.elementWidth = parseInt(window.getComputedStyle(this.element).width, 10);
        this.elementOffsetLeft = this.element.getBoundingClientRect().left + document.body.scrollLeft;
        this.beforeImage.style.width = `${this.elementWidth}px`;
        this.dragElementWidth = parseInt(window.getComputedStyle(this.dragElement).width, 10);
        this.minLeftPos = this.elementOffsetLeft + 10;
        this.maxLeftPos = (this.elementOffsetLeft + this.elementWidth) - this.dragElementWidth - 10;
    }

    onTap(e) {
        e.preventDefault();

        this.leftPos = (e.pageX) ? e.pageX : e.touches[0].pageX;
        this.requestDrag();
    }

    onDragStart(e) {
        e.preventDefault();

        const startX = (e.pageX) ? e.pageX : e.touches[0].pageX;
        const offsetLeft = this.dragElement.getBoundingClientRect().left + document.body.scrollLeft;
        this.posX = (offsetLeft + this.dragElementWidth) - startX;
        this.isDragging = true;
    }

    onDragEnd(e) {
        e.preventDefault();
        this.isDragging = false;
    }

    onDrag(e) {
        e.preventDefault();

        if (!this.isDragging) {
            return;
        }

        this.moveX = (e.pageX) ? e.pageX : e.touches[0].pageX;
        this.leftPos = (this.moveX + this.posX) - this.dragElementWidth;
        this.promptElement.style.opacity = 0;
        this.requestDrag();
    }

    drag() {
        if (this.leftPos < this.minLeftPos) {
            this.leftPos = this.minLeftPos;
        } else if (this.leftPos > this.maxLeftPos) {
            this.leftPos = this.maxLeftPos;
        }

        let openRatio = (this.leftPos + (this.dragElementWidth / 2)) - this.elementOffsetLeft;
        openRatio /= this.elementWidth;
        const width = `${openRatio * 100}%`;

        this.dragElement.style.left = width;
        this.promptElement.style.left = width;
        this.beforeElement.style.width = width;

        if (this.options.dragCallback) {
            this.options.dragCallback(openRatio);
        }
    }

    requestDrag() {
        window.requestAnimationFrame(this.drag.bind(this));
    }
}

Cocoen.defaults = {
    dragElementSelector: '.cocoen-drag',
    dragCallback: null,
};