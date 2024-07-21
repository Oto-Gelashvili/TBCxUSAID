//*************** HEADER/NAVIGATION *************

// DOM Content Loaded Event
document.addEventListener('DOMContentLoaded', function () {
  initializeToolsDropdownLine();
});

// Utility Functions
function hideActive() {
  underlines.forEach((underline) => {
    underline.style.transform = 'scaleX(0)';
  });
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
  dropdownMenuElementsUL.forEach((ul) => {
    ul.style.maxHeight = '0';
  });
  ulArrows.forEach((arrow) => {
    arrow.style.transform = 'rotate(0)';
  });
}

function checkScreenWidth() {
  if (window.innerWidth >= 1024) {
    unsetDropdowns();
  }
}

function initializeToolsDropdownLine() {
  const toolsDropdownLine1 = document.querySelector('.tools-dropdown-line-1');
  if (toolsDropdownLine1) {
    toolsDropdownLine1.style.transform = 'translateZ(0) scaleX(1) rotate(0deg)';
  }
}

// Logo Click Functionality
const logos = document.querySelectorAll('[id="logo-desktop"]');
logos.forEach((logo) => {
  logo.addEventListener('click', () => {
    window.location.href = window.location.href;
  });
});

// Navigation Menu Functionality
const navMenuWrappers = document.querySelectorAll('.nav-menu .pointer');
const underlines = document.querySelectorAll('.underline');
const hiddenMenuCont = document.querySelector('.hidden-menu-container');
const hiddenDropdownLists = document.querySelectorAll('.hidden-dropdown-list');

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

document.addEventListener('click', hideActive);

// Language Switch Functionality
const nonActiveLang = document.querySelector('.non-active-language');
const activeLanguage = document.querySelector('.avtive-language');
const geoContent = document.querySelectorAll('.geo');
const engContent = document.querySelectorAll('.eng');

nonActiveLang.addEventListener('click', () => {
  if (activeLanguage.innerText === 'ქარ') {
    activeLanguage.innerText = 'ENG';
    nonActiveLang.innerText = 'ქარ';
    geoContent.forEach((element) => element.classList.remove('active'));
    engContent.forEach((element) => element.classList.add('active'));
  } else {
    activeLanguage.innerText = 'ქარ';
    nonActiveLang.innerText = 'ENG';
    engContent.forEach((element) => element.classList.remove('active'));
    geoContent.forEach((element) => element.classList.add('active'));
  }
});

// Tools Dropdown Functionality
const toolsDropdown = document.querySelector('.tools-dropdown');
const toolsDropdownMenu = document.querySelector('.tools-dropdown-menu');
const toolsDropdownLine1 = document.querySelector('.tools-dropdown-line-1');
const toolsDropdownLine2 = document.querySelector('.tools-dropdown-line-2');
const toolsDropdownLine3 = document.querySelector('.tools-dropdown-line-3');

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
  }
});

// Responsive Design
window.addEventListener('resize', checkScreenWidth);

// Dropdown Menu Elements Functionality
const dropdownMenuElements = document.querySelectorAll(
  '.dropdown-menu-element'
);
const dropdownMenuElementsUL = document.querySelectorAll(
  '.dropdown-menu-element ul'
);
const ulArrows = document.querySelectorAll('.fa-angle-down');

dropdownMenuElements.forEach((element, index) => {
  element.addEventListener('click', () => {
    const isExpanded =
      dropdownMenuElementsUL[index].style.maxHeight === '14rem';
    dropdownMenuElementsUL.forEach((ul) => {
      ul.style.maxHeight = '0';
      ul.style.paddingTop = '0';
    });
    ulArrows.forEach((arrow) => {
      arrow.style.transform = 'rotate(0)';
    });
    if (!isExpanded) {
      dropdownMenuElementsUL[index].style.maxHeight = '14rem';
      dropdownMenuElementsUL[index].style.paddingTop = '2rem';
      ulArrows[index].style.transform = 'rotate(180deg)';
    }
  });
});
