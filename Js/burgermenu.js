
  
    'use strict';
  
    const hamburgerMenu = document.querySelector('.hamburger-menu');
    const verticalMenu = document.querySelector('.vertical-menu');
    const menuItems = document.querySelectorAll('.menu-item');
    const dropdownMenus = document.querySelectorAll('.dropdown-menu');
    let activeMenuItem = null;
    let activeDropdownMenu = null;

    hamburgerMenu.addEventListener('click', () => {
      if (verticalMenu.classList.contains('open')) {
        closeMenu();
      } else {
        openMenu();
      }
    });

    function openMenu() {
      verticalMenu.classList.add('open');
      menuItems.forEach((menuItem, index) => {
        setTimeout(() => {
          menuItem.style.opacity = '1';
          menuItem.style.transform = 'translateY(0)';
        }, index * 100);
      });
    }

    function closeMenu() {
      verticalMenu.classList.remove('open');
      menuItems.forEach((menuItem, index) => {
        setTimeout(() => {
          menuItem.style.opacity = '0';
          menuItem.style.transform = 'translateY(-20px)';
        }, index * 100);
      });
    }

    menuItems.forEach((menuItem) => {
      menuItem.addEventListener('click', () => {
        if (menuItem.classList.contains('active')) {
          menuItem.classList.remove('active');
          activeMenuItem = null;
        } else {
          if (activeMenuItem) {
            activeMenuItem.classList.remove('active');
          }
          menuItem.classList.add('active');
          activeMenuItem = menuItem;
        }
      });
    });

 dropdownMenus.forEach((dropdownMenu) => {
      const parentMenuItem = dropdownMenu.parentElement;

      parentMenuItem.addEventListener('click', (event) => {
        event.stopPropagation(); // Prevent the parent menu item from closing when clicking the dropdown menu

        if (dropdownMenu.classList.contains('open')) {
          dropdownMenu.classList.remove('open');
        } else {
          if (activeDropdownMenu) {
            activeDropdownMenu.classList.remove('open');
          }
          dropdownMenu.classList.add('open');
          activeDropdownMenu = dropdownMenu;
        }
      });
    });

document.addEventListener('click', (event) => {
  if (!event.target.closest('.vertical-menu') && !event.target.closest('.hamburger-menu')) {
    if (verticalMenu.classList.contains('open')) {
      closeMenu();
    }
  }
});

let touchStartX = 0;
let touchEndX = 0;

document.addEventListener('touchstart', (event) => {
  touchStartX = event.changedTouches[0].screenX;
}, false);

document.addEventListener('touchend', (event) => {
  touchEndX = event.changedTouches[0].screenX;
  handleSwipe();
}, false);

function handleSwipe() {
  if (touchEndX < touchStartX) {
    if (verticalMenu.classList.contains('open')) {
      closeMenu();
    }
  }
};
