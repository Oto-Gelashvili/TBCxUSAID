const logo = document.getElementById('Layer_1');
logo.addEventListener('click', () => {
  window.location.href = window.location.href;
});

const navMenuWrappers = document.querySelectorAll('.nav-menu .pointer');
const underlines = document.querySelectorAll('.underline');
const hiddenMenu = document.querySelector('.hidden-menu');
const hiddenDropdownLists = document.querySelectorAll('.hidden-dropdown-list');

navMenuWrappers.forEach((paragraph, index) => {
  paragraph.addEventListener('click', (event) => {
    event.stopPropagation();
    const isActive = underlines[index].style.transform === 'scaleX(1)';
    hideActive();
    if (!isActive) {
      underlines[index].style.transform = 'scaleX(1)';
      setTimeout(() => {
        hiddenMenu.style.opacity = '1';
      }, 300);
      setTimeout(() => {
        hiddenDropdownLists[index].style.opacity = '1';
      }, 500);
    }
  });
});

function hideActive() {
  underlines.forEach((underline) => {
    underline.style.transform = 'scaleX(0)';
  });
  hiddenMenu.style.opacity = '0';
  hiddenDropdownLists.forEach((dropdown) => {
    dropdown.style.opacity = '0';
  });
}

document.addEventListener('click', () => {
  hideActive();
});
const nonActiveLang = document.querySelector('.non-active-language');
const activeLanguage = document.querySelector('.avtive-language');
const geoContent = document.querySelectorAll('.geo');
const engContent = document.querySelectorAll('.eng');
nonActiveLang.addEventListener('click', () => {
  debugger;
  if (activeLanguage.innerText === 'ქარ') {
    activeLanguage.innerText = 'ENG';
    nonActiveLang.innerText = 'ქარ';
    geoContent.forEach((element) => {
      element.classList.remove('active');
    });
    engContent.forEach((element) => {
      element.classList.add('active');
    });
  } else {
    activeLanguage.innerText = 'ქარ';
    nonActiveLang.innerText = 'ENG';
    engContent.forEach((element) => {
      element.classList.remove('active');
    });
    geoContent.forEach((element) => {
      element.classList.add('active');
    });
  }
});
