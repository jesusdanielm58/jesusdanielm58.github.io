function Slider(config) {

    this.slideAutoPlay = config.slideAutoPlay;
    this.slideTime = config.slideTime;
    this.indicatorsOl = document.querySelector('.krd-slider-indicators');
    this.sliderItem = document.querySelectorAll('.krd-slider-item');
    this.current = document.querySelector(".active");
    this.sliderControl = document.querySelectorAll('.krd-slider-control');
    this.currentInfoAll = document.querySelector(".all-slide");
    this.createIndicators();
    this.indicators = document.querySelectorAll('.krd-slider-indicators li');
    this.assignEvent();
    this.slidePlay();
}

Slider.prototype.slidePlay = function () {
    this.timeAutoPlay = setInterval(this.autoplay.bind(this), this.slideTime);
}

Slider.prototype.nextSlide = function () {
    var currentNew = this.current.nextElementSibling;
    if(currentNew){
        this.current.classList.remove('active');
        currentNew.classList.add('active')
        this.current = currentNew;
    }else{
        this.current.classList.remove('active');
        this.current = this.current.parentNode.firstElementChild;
        this.current.classList.add('active')
    }
    this.stopSlide();
    this.slidePlay();
    this.addClassActive(this.current.dataset.slideId);
}

Slider.prototype.prevSlide = function () {
    var currentNew = this.current.previousElementSibling;
    if(currentNew){
        this.current.classList.remove('active');
        currentNew.classList.add('active')
        this.current = currentNew;
    }else{
        this.current.classList.remove('active');
        this.current = this.current.parentNode.lastElementChild;
        this.current.classList.add('active')
    }
    this.stopSlide();
    this.slidePlay();
    this.addClassActive(this.current.dataset.slideId);
}

Slider.prototype.stopSlide = function () {
    clearInterval(this.timeAutoPlay);
}

Slider.prototype.changeSlide = function (id) {
    var slide = document.querySelector("[data-slide-id='"+id+"']");
    [].forEach.call(this.sliderItem, function (elem) {
        elem.classList.remove('active');
    });
    slide.classList.add('active');
    this.current = slide;
    this.stopSlide();
    this.slidePlay();
    this.addClassActive(id);
}

Slider.prototype.createIndicators = function () {
    for (var i = 0; i < this.sliderItem.length; i++){
        var li = document.createElement('li');
        li.setAttribute("data-slide-to", i);
        this.indicatorsOl.appendChild(li);
        this.sliderItem[i].setAttribute("data-slide-id", i);
    }
}



Slider.prototype.control = function (e) {
    e.preventDefault();
    var that = e.target;
    console.log(that);
    if(that.dataset.slide == 'next'){
        this.nextSlide();
    }
    if(that.dataset.slide == 'prev'){
        this.prevSlide();
    }
}

Slider.prototype.assignEvent = function () {
    this.indicators[0].classList.add('active');
    for(var i = 0; i < this.indicators.length; i++){
        this.indicators[i].onclick = function (e) {
            var attr = e.target.dataset.slideTo;
            this.changeSlide(attr);
        }.bind(this);
    }
    for(var i = 0; i< this.sliderControl.length; i++){
        this.sliderControl[i].onclick = function (e) {
            this.control(e);
        }.bind(this);
    }
}

Slider.prototype.addClassActive = function (id) {
    var indicatorAll = document.querySelectorAll("[data-slide-to");
    [].forEach.call(indicatorAll, function (elem) {
        elem.classList.remove('active');
    });
    document.querySelector("[data-slide-to='"+id+"']").classList.add('active');
}

Slider.prototype.autoplay = function () {
    if(this.slideAutoPlay){
        this.nextSlide();
    }
}

new Slider({
    slideAutoPlay: false,
    slideTime: 5500
});