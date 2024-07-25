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
const slider = document.querySelector('.offers-carousel');
const sliderCont = document.querySelector('.offers-carousel-container');
const carouselItem = document.querySelector('.offers-carousel-item');
const numOfImages = 6;
let currentStep = 0;
let totalSteps =
  numOfImages - Math.floor(slider.clientWidth / carouselItem.clientWidth) + 1;

let sliderStartX;

const thumb = document.querySelector('.scrollbar-thumb');
const track = document.querySelector('.scrollbar-track');
let isDragging = false;
let startX, thumbStartX;
let speed = 0.7;
let movedLeftSlow = false;
let movedRightSlow = false;

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

//slider

sliderCont.addEventListener('mousedown', (e) => {
  if (e.target === sliderCont) {
    dragginStart(e);
  }
});
sliderCont.addEventListener('touchstart', (e) => {
  if (e.target === sliderCont) {
    dragginStart(e.touches[0]);
  }
});

slider.addEventListener('mousedown', (e) => {
  if (e.target === slider) {
    dragginStart(e);
  }
});
slider.addEventListener('touchstart', (e) => {
  if (e.target === slider) {
    dragginStart(e.touches[0]);
  }
});

thumb.addEventListener('mousedown', (e) => {
  if (e.target === thumb) {
    dragginStart(e);
  }
});
thumb.addEventListener('touchstart', (e) => {
  if (e.target === thumb) {
    dragginStart(e.touches[0]);
  }
});

track.addEventListener('mousedown', (e) => {
  if (e.target === track) {
    dragginStart(e);
  }
});
track.addEventListener('touchstart', (e) => {
  if (e.target === track) {
    dragginStart(e.touches[0]);
  }
});

document.addEventListener('mousemove', (e) => {
  if (isDragging) {
    slide(e);
  }
});
document.addEventListener('touchmove', (e) => {
  if (isDragging) {
    slide(e.touches[0]);
  }
});

document.addEventListener('mouseup', () => {
  if (isDragging) {
    adjustThumb();
    adjustSlider();
  }
  draggingEnd();
});
document.addEventListener('touchend', () => {
  if (isDragging) {
    adjustThumb();
    adjustSlider();
  }
  draggingEnd();
});

function dragginStart(e) {
  isDragging = true;
  thumb.style.transition = '0s';
  slider.style.transition = '0s';

  sliderCont.style.cursor = 'grabbing';
  thumb.style.cursor = 'grabbing';
  track.style.cursor = 'grabbing';

  startX = e.clientX;
  thumbStartX = getTranslateX(thumb);
  sliderStartX = getTranslateX(slider);
}

function draggingEnd() {
  isDragging = false;
  sliderCont.style.cursor = 'grab';
  thumb.style.cursor = 'grab';
  track.style.cursor = 'grab';
  lastDirection = 0;
  movedLeftSlow = false;
  movedRightSlow = false;
}

function slide(e) {
  const trackRect = track.getBoundingClientRect();
  const mouseChangeX = (startX - e.clientX) * speed;
  let newThumbX = thumbStartX + mouseChangeX;

  newThumbX = Math.max(
    thumb.offsetWidth * -0.7,
    Math.min(newThumbX, trackRect.width - thumb.offsetWidth * 0.3)
  );

  thumb.style.transform = `translateX(${newThumbX}px)`;

  if (newThumbX > thumbStartX && Math.abs(newThumbX - thumbStartX) < 25) {
    movedRightSlow = true;
  } else if (
    newThumbX < thumbStartX &&
    Math.abs(newThumbX - thumbStartX) < 25
  ) {
    movedLeftSlow = true;
  }

  const sliderWidth = slider.scrollWidth - slider.clientWidth;
  const sliderMoveRatio = sliderWidth / trackRect.width;
  const thumbMove = newThumbX - thumbStartX;
  const newSliderX = sliderStartX - thumbMove * sliderMoveRatio;
  slider.style.transform = `translateX(${newSliderX}px)`;
}

function adjustThumb() {
  const thumbStartX = getTranslateX(thumb);
  const trackWidth = track.clientWidth;
  const stepWidth = trackWidth / totalSteps;

  if (movedLeftSlow && currentStep !== 0) {
    currentStep--;
  } else if (movedRightSlow && currentStep < totalSteps - 1) {
    currentStep++;
  } else {
    currentStep = Math.max(
      0,
      Math.min(Math.round(thumbStartX / stepWidth), totalSteps - 1)
    );
  }
  const newPosition = (currentStep / totalSteps) * track.clientWidth;
  thumb.style.transform = `translateX(${newPosition}px)`;
  thumb.style.transition = '1s';
}

function adjustSlider() {
  const itemWidth = carouselItem.getBoundingClientRect().width;
  slider.style.transform = `translateX(${(-itemWidth - 30) * currentStep}px)`;
  slider.style.transition = '1s';
}

//arrows
arrowSvgs.forEach((svg, index) => {
  isDragging = true;
  svg.addEventListener('click', function () {
    this.style.color = '#747C7F';
    const otherIndex = index === 0 ? 1 : 0;
    arrowSvgs[otherIndex].style.color = '#182cc0';

    if (index === 1 && currentStep < totalSteps - 1) {
      currentStep++;
    } else if (index === 0 && currentStep > 0) {
      currentStep--;
    }
    const newPosition = (currentStep / totalSteps) * track.clientWidth;
    thumb.style.transform = `translateX(${newPosition}px)`;
    const itemWidth = carouselItem.getBoundingClientRect().width;
    slider.style.transform = `translateX(${(-itemWidth - 30) * currentStep}px)`;
  });
});

// Helper function to get translateX value
function getTranslateX(element) {
  const style = window.getComputedStyle(element);
  const matrix = new DOMMatrixReadOnly(style.transform);
  return matrix.m41;
}
