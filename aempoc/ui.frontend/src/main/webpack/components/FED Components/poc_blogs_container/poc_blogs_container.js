
$(document).ready(function () {
  // Initialize the carousel only if .blogs-container is present in the DOM
  if ($('.blogs-container').length > 0) {
      Carousel.init();
  }
});

const Carousel = {
  timeRunning: 3000,
  timeAutoNext: 7000,
  runTimeOut: null,
  runNextAuto: null,

  init: function () {
      // Cache DOM elements
      this.nextDom = $('#next');
      this.prevDom = $('#prev');
      this.carouselDom = $('.carousel');
      this.sliderDom = this.carouselDom.find('.list');
      this.thumbnailBorderDom = this.carouselDom.find('.thumbnail');
      this.thumbnailItemsDom = this.thumbnailBorderDom.find('.item');
      this.timeDom = this.carouselDom.find('.time');

      // Initial setup
      this.thumbnailBorderDom.append(this.thumbnailItemsDom.first());

      // Event listeners
      this.nextDom.on('click', () => this.showSlider('next'));
      this.prevDom.on('click', () => this.showSlider('prev'));

      // Start automatic slider
      this.runNextAuto = setTimeout(() => {
          this.nextDom.click();
      }, this.timeAutoNext);
  },

  showSlider: function (type) {
      const sliderItemsDom = this.sliderDom.find('.item');
      const thumbnailItemsDom = this.thumbnailBorderDom.find('.item');

      if (type === 'next') {
          this.sliderDom.append(sliderItemsDom.first());
          this.thumbnailBorderDom.append(thumbnailItemsDom.first());
          this.carouselDom.addClass('next');
      } else {
          this.sliderDom.prepend(sliderItemsDom.last());
          this.thumbnailBorderDom.prepend(thumbnailItemsDom.last());
          this.carouselDom.addClass('prev');
      }

      // Clear and reset animation timeout
      clearTimeout(this.runTimeOut);
      this.runTimeOut = setTimeout(() => {
          this.carouselDom.removeClass('next prev');
      }, this.timeRunning);

      // Clear and reset auto slider timeout
      clearTimeout(this.runNextAuto);
      this.runNextAuto = setTimeout(() => {
          this.nextDom.click();
      }, this.timeAutoNext);
  },
};
