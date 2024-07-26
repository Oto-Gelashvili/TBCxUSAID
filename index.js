// DOM Element Selections
const logos = document.querySelectorAll('[id="logo-desktop"]');
const navMenuWrappers = document.querySelectorAll('.nav-menu .pointer');
const underlines = document.querySelectorAll('.underline');
const hiddenMenuCont = document.querySelector('.hidden-menu-container');
const hiddenDropdownLists = document.querySelectorAll('.hidden-dropdown-list');
const nonActiveLang = document.querySelector('.non-active-language');
const activeLanguage = document.querySelector('.avtive-language');
const geoContent = document.querySelectorAll('.geo');
const engContent = document.querySelectorAll('.eng');
const toolsDropdown = document.querySelector('.tools-dropdown');
const toolsDropdownMenu = document.querySelector('.tools-dropdown-menu');
const toolsDropdownLine1 = document.querySelector('.tools-dropdown-line-1');
const toolsDropdownLine2 = document.querySelector('.tools-dropdown-line-2');
const toolsDropdownLine3 = document.querySelector('.tools-dropdown-line-3');
const main = document.querySelector('main');
const dropdownMenuElements = document.querySelectorAll(
  '.dropdown-menu-element'
);
const dropdownMenuElementsUL = document.querySelectorAll(
  '.dropdown-menu-element ul'
);
const ulArrows = document.querySelectorAll('.fa-angle-down');
const kitContainers = document.querySelectorAll('.kit-container');
const anchors = document.querySelectorAll('a');
const arrowSvgs = document.querySelectorAll('.arrow-container svg');
const sliders = document.querySelectorAll('.slider');
const sliderContainers = document.querySelectorAll('.slider-cont');
const thumbs = document.querySelectorAll('.scrollbar-thumb');
const tracks = document.querySelectorAll('.scrollbar-track');
const carouselItems = document.querySelectorAll('.offers-carousel-item');
const numOfImagesArray = [6, 3];

// Utility Functions
function hideActive() {
  underlines.forEach((underline) => (underline.style.transform = 'scaleX(0)'));
  hiddenMenuCont.style.opacity = '0';
  hiddenMenuCont.style.pointerEvents = 'none';
  hiddenDropdownLists.forEach((dropdown) => {
    dropdown.style.opacity = '0';
    dropdown.style.pointerEvents = 'none';
  });
}

function unsetDropdowns() {
  toolsDropdownLine1.style.transform = 'translateZ(0) scaleX(1) rotate(0deg)';
  toolsDropdownLine1.style.width = '11px';
  toolsDropdownLine2.style.opacity = '1';
  toolsDropdownLine3.style.transform = 'scaleX(1) rotate(0deg)';
  toolsDropdownLine3.style.width = '15px';
  toolsDropdownMenu.classList.remove('active');
  main.style.display = 'unset';
  dropdownMenuElementsUL.forEach((ul) => (ul.style.maxHeight = '0'));
  ulArrows.forEach((arrow) => (arrow.style.transform = 'rotate(0)'));
}

function checkScreenWidth() {
  if (window.innerWidth >= 1024) {
    unsetDropdowns();
  }
}

function initializeToolsDropdownLine() {
  if (toolsDropdownLine1) {
    toolsDropdownLine1.style.transform = 'translateZ(0) scaleX(1) rotate(0deg)';
  }
}
// Remove focus from the element
anchors.forEach((link) => {
  link.addEventListener('pointerleave', () => {
    link.blur();
    document.querySelector('.primary-hero button').blur();
  });
});

// Language Change Functions
function changeLanguage(fromLang, toLang) {
  const links = document.getElementsByTagName('a');
  for (let link of links) {
    const href = link.getAttribute('href');
    if (href && href.startsWith(`https://tbcconcept.ge/${fromLang}/`)) {
      const newHref = href.replace(
        `https://tbcconcept.ge/${fromLang}/`,
        `https://tbcconcept.ge/${toLang}/`
      );
      link.setAttribute('href', newHref);
    }
  }
}

function changeLanguageToEnglish() {
  changeLanguage('ge', 'en');
}

function changeLanguageToGeorgian() {
  changeLanguage('en', 'ge');
}

// Event Listeners

// Initialization
document.addEventListener('DOMContentLoaded', initializeToolsDropdownLine);

// Global click handler to hide menu
document.addEventListener('click', hideActive);

// Responsive design handler
window.addEventListener('resize', checkScreenWidth);

// Logo click functionality
logos.forEach((logo) => {
  logo.addEventListener('click', () => {
    window.location.href = window.location.href;
  });
});

// Navigation menu functionality
navMenuWrappers.forEach((paragraph, index) => {
  paragraph.addEventListener('click', (event) => {
    event.stopPropagation();
    const isActive = underlines[index].style.transform === 'scaleX(1)';
    hideActive();
    if (!isActive) {
      underlines[index].style.transform = 'scaleX(1)';
      setTimeout(() => {
        hiddenMenuCont.style.opacity = '1';
        hiddenMenuCont.style.pointerEvents = 'auto';
      }, 300);
      setTimeout(() => {
        hiddenDropdownLists[index].style.opacity = '1';
        hiddenDropdownLists[index].style.pointerEvents = 'auto';
      }, 500);
    }
  });
});

// Language switch functionality
nonActiveLang.addEventListener('click', () => {
  if (activeLanguage.innerText === 'ქარ') {
    activeLanguage.innerText = 'ENG';
    nonActiveLang.innerText = 'ქარ';
    geoContent.forEach((element) => element.classList.remove('active'));
    engContent.forEach((element) => element.classList.add('active'));
    changeLanguageToEnglish();
  } else {
    activeLanguage.innerText = 'ქარ';
    nonActiveLang.innerText = 'ENG';
    engContent.forEach((element) => element.classList.remove('active'));
    geoContent.forEach((element) => element.classList.add('active'));
    changeLanguageToGeorgian();
  }
});

// Tools dropdown functionality
toolsDropdown.addEventListener('click', () => {
  if (toolsDropdownLine1.style.width === '20px') {
    unsetDropdowns();
  } else {
    toolsDropdownLine1.style.transform = 'scaleX(1) rotate(-45deg)';
    toolsDropdownLine1.style.width = '20px';
    toolsDropdownLine2.style.opacity = '0';
    toolsDropdownLine3.style.transform = 'scaleX(1)  rotate(45deg)';
    toolsDropdownLine3.style.width = '20px';
    toolsDropdownMenu.classList.add('active');
    main.style.display = 'none';
  }
});

// Dropdown menu elements functionality
dropdownMenuElements.forEach((element, index) => {
  element.addEventListener('click', () => {
    const isExpanded =
      dropdownMenuElementsUL[index].style.maxHeight === '14rem';
    dropdownMenuElementsUL.forEach((ul) => {
      ul.style.maxHeight = '0';
      ul.style.paddingTop = '0';
    });
    ulArrows.forEach((arrow) => (arrow.style.transform = 'rotate(0)'));
    if (!isExpanded) {
      dropdownMenuElementsUL[index].style.maxHeight = '14rem';
      dropdownMenuElementsUL[index].style.paddingTop = '2rem';
      ulArrows[index].style.transform = 'rotate(180deg)';
    }
  });
});

// Kit containers click functionality
kitContainers.forEach((kit) => {
  kit.addEventListener('click', () => {
    const lang = activeLanguage.innerText === 'ქარ' ? 'ge' : 'en';
    let url;
    if (kit.classList.contains('1')) {
      url = `https://tbcconcept.ge/${lang}/singleview/245-digital-kit`;
    } else if (kit.classList.contains('2')) {
      url = `https://tbcconcept.ge/${lang}/singleview/3300-premium-kit`;
    } else {
      url = `https://tbcconcept.ge/${lang}/singleview/3301-concept-360`;
    }
    window.location.href = url;
  });
});
class Slider {
  constructor(
    slider,
    sliderCont,
    thumb,
    track,
    carouselItem,
    numOfImages,
    arrowSvgs
  ) {
    this.slider = slider;
    this.sliderCont = sliderCont;
    this.thumb = thumb;
    this.track = track;
    this.carouselItem = carouselItem;
    this.numOfImages = numOfImages;
    this.arrowSvgs = arrowSvgs;
    this.currentStep = 0;
    this.isDragging = false;
    this.startX = 0;
    this.thumbStartX = 0;
    this.sliderStartX = 0;
    this.speed = 0.7;
    this.movedLeft = false;
    this.movedRight = false;
    this.totalSteps =
      this.numOfImages -
      Math.floor(slider.clientWidth / carouselItem.clientWidth) +
      1;
    this.setThumbWidth();
    this.initEvents();

    window.addEventListener(
      'resize',
      this.debounce(() => {
        this.reinitialize();
      }, 250)
    );
  }

  setThumbWidth() {
    const thumbWidth = this.track.clientWidth / this.totalSteps - 1;
    this.thumb.style.width = `${thumbWidth}px`;
  }
  reinitialize() {
    this.totalSteps =
      this.numOfImages -
      Math.floor(this.slider.clientWidth / this.carouselItem.clientWidth) +
      1;

    this.currentStep = 0;
    this.thumb.style.transform = 'translateX(0)';
    this.slider.style.transform = 'translateX(0)';
    this.setThumbWidth();

    this.adjustSlider();
    this.adjustThumb();
  }
  debounce(func, wait) {
    let timeout;
    return (...args) => {
      clearTimeout(timeout);
      timeout = setTimeout(() => func.apply(this, args), wait);
    };
  }
  initEvents() {
    this.sliderCont.addEventListener('mousedown', (e) => this.draggingStart(e));
    this.sliderCont.addEventListener('touchstart', (e) =>
      this.draggingStart(e.touches[0])
    );

    this.slider.addEventListener('mousedown', (e) => this.draggingStart(e));
    this.slider.addEventListener('touchstart', (e) =>
      this.draggingStart(e.touches[0])
    );

    this.thumb.addEventListener('mousedown', (e) => this.draggingStart(e));
    this.thumb.addEventListener('touchstart', (e) =>
      this.draggingStart(e.touches[0])
    );

    this.track.addEventListener('mousedown', (e) => this.draggingStart(e));
    this.track.addEventListener('touchstart', (e) =>
      this.draggingStart(e.touches[0])
    );
    document.addEventListener(
      'mousemove',
      (e) => this.isDragging && this.slide(e)
    );
    document.addEventListener(
      'touchmove',
      (e) => this.isDragging && this.slide(e.touches[0])
    );

    document.addEventListener(
      'mouseup',
      () => this.isDragging && this.endDragging()
    );
    document.addEventListener(
      'touchend',
      () => this.isDragging && this.endDragging()
    );
    this.arrowSvgs.forEach((svg, index) => {
      svg.addEventListener('click', () => this.handleArrowClick(index));
    });
  }

  handleArrowClick(index) {
    const isLeftArrow = index % 2 === 0;
    const isRightArrow = index % 2 === 1;

    if (this.arrowSvgs) {
      this.arrowSvgs[index].style.color = '#747C7F';
      this.arrowSvgs[isLeftArrow ? index + 1 : index - 1].style.color =
        '#182cc0';
    }

    if (isRightArrow && this.currentStep < this.totalSteps - 1) {
      this.currentStep++;
    } else if (isLeftArrow && this.currentStep > 0) {
      this.currentStep--;
    }

    const newPosition =
      (this.currentStep / this.totalSteps) * this.track.clientWidth;
    this.thumb.style.transform = `translateX(${newPosition}px)`;
    const itemWidth = this.carouselItem.getBoundingClientRect().width;
    if (this.currentStep === this.totalSteps - 1) {
      this.slider.style.transform = `translateX(${
        -this.slider.scrollWidth + this.slider.clientWidth
      }px)`;
    } else {
      this.slider.style.transform = `translateX(${
        (-itemWidth - 30) * this.currentStep
      }px)`;
    }
  }
  draggingStart(e) {
    this.isDragging = true;
    this.thumb.style.transition = '0s';
    this.slider.style.transition = '0s';

    this.sliderCont.style.cursor = 'grabbing';
    this.thumb.style.cursor = 'grabbing';
    this.track.style.cursor = 'grabbing';

    this.startX = e.clientX;
    this.thumbStartX = this.getTranslateX(this.thumb);
    this.sliderStartX = this.getTranslateX(this.slider);
  }

  endDragging() {
    this.isDragging = false;
    this.adjustThumb();
    this.adjustSlider();

    // The rest of the endDragging logic
    this.sliderCont.style.cursor = 'grab';
    this.thumb.style.cursor = 'grab';
    this.track.style.cursor = 'grab';
    this.movedLeft = false;
    this.movedRight = false;
  }

  slide(e) {
    const trackRect = this.track.getBoundingClientRect();
    const mouseChangeX = (this.startX - e.clientX) * this.speed;
    let newThumbX = this.thumbStartX + mouseChangeX;

    newThumbX = Math.max(
      this.thumb.offsetWidth * -0.7,
      Math.min(newThumbX, trackRect.width - this.thumb.offsetWidth * 0.3)
    );

    this.thumb.style.transform = `translateX(${newThumbX}px)`;

    if (newThumbX > this.thumbStartX) {
      this.movedRight = true;
    } else if (newThumbX < this.thumbStartX) {
      this.movedLeft = true;
    }

    const sliderWidth = this.slider.scrollWidth - this.slider.clientWidth;
    const sliderMoveRatio = sliderWidth / trackRect.width;
    const thumbMove = newThumbX - this.thumbStartX;
    const newSliderX = this.sliderStartX - thumbMove * sliderMoveRatio;
    this.slider.style.transform = `translateX(${newSliderX}px)`;
  }

  adjustThumb() {
    const thumbStartX = this.getTranslateX(this.thumb);
    const trackWidth = this.track.clientWidth;
    const stepWidth = trackWidth / this.totalSteps;

    if (this.movedLeft && this.currentStep !== 0) {
      this.currentStep = Math.max(
        0,
        Math.min(Math.floor(thumbStartX / stepWidth), this.totalSteps - 1)
      );
    } else if (this.movedRight && this.currentStep < this.totalSteps - 1) {
      this.currentStep = Math.max(
        0,
        Math.min(Math.ceil(thumbStartX / stepWidth), this.totalSteps - 1)
      );
    }
    //  else {
    //   this.currentStep = Math.max(
    //     0,
    //     Math.min(Math.round(thumbStartX / stepWidth), this.totalSteps - 1)
    //   );
    // }
    const newPosition =
      (this.currentStep / this.totalSteps) * this.track.clientWidth;
    this.thumb.style.transform = `translateX(${newPosition}px)`;
    this.thumb.style.transition = '1s';
  }

  adjustSlider() {
    const itemWidth = this.carouselItem.getBoundingClientRect().width;
    if (this.currentStep === this.totalSteps - 1) {
      this.slider.style.transform = `translateX(${
        -this.slider.scrollWidth + this.slider.clientWidth
      }px)`;
    } else {
      this.slider.style.transform = `translateX(${
        (-itemWidth - 30) * this.currentStep
      }px)`;
    }
    this.slider.style.transition = '1s';
  }

  // Helper function to get translateX value
  getTranslateX(element) {
    const style = window.getComputedStyle(element);
    const matrix = new DOMMatrixReadOnly(style.transform);
    return matrix.m41;
  }
}

sliders.forEach((slider, index) => {
  new Slider(
    slider,
    sliderContainers[index],
    thumbs[index],
    tracks[index],
    carouselItems[index],
    numOfImagesArray[index],
    arrowSvgs
  );
});

// digital bank link
document.querySelector('.low').addEventListener('click', function () {
  var userAgent = navigator.userAgent || navigator.vendor || window.opera;

  if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
    // iOS device
    window.location.href = 'https://apps.apple.com/us/app/tbc-bank/id766598432';
  } else {
    // Assume Android or other device
    window.location.href =
      'https://play.google.com/store/apps/details?id=com.icomvision.bsc.tbc&hl=en';
  }
});
