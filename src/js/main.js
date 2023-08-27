import burger from './modules/burger'
import tabs from './modules/tabs'
window.addEventListener('DOMContentLoaded', () => {
  burger()
  tabs({
    tabsSelector: '.posts__item',
    tabsContentSelector: '.posts__main-post',
    tabByDefault: 1,
    breakpoint: 768
  })
})