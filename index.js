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
