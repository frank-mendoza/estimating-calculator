/**
 * Toggle navigation on SP view
 */

const navigationToggle = () => {
  const navigation = document.querySelector('.header')
  const navigationMenu = document.querySelector('.header__hamburger')

  if(navigationMenu && navigation) {
    navigationMenu.addEventListener('click', () => {
      navigation.classList.toggle('header--active')
    })
  }
}

export default navigationToggle
