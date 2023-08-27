const tabs = ({
  tabsSelector,
  tabsContentSelector,
  activeClass='active',
  tabByDefault = 0,
  breakpoint = false,
} = {}) => {
  const tabs = document.querySelectorAll(tabsSelector),
    tabsContent = document.querySelectorAll(tabsContentSelector)

  const hideTabsContent = () => {
    tabsContent.forEach((item) => {
      item.classList.add('hide')
    })

    tabs.forEach((item) => {
      item.classList.remove(activeClass)
    })
  }

  hideTabsContent()
  showTabContent(
    tabByDefault < tabs.length - 1 ? tabByDefault : tabs.length - 1,
    true
  )

  function showTabContent(index, start = false) {
    hideTabsContent()
    tabsContent[index].classList.remove('hide')
    tabs[index].classList.add(activeClass)
    if (breakpoint && !start) {
      const width = parseInt(window.getComputedStyle(document.body).width)
      if (width <= 768) {
        window.scrollTo({
          top: tabsContent[index].offsetTop - 80,
          behavior: 'smooth',
          left: 0,
        })
      }
    }
  }

  tabs.forEach((tab, i) => {
    tab.addEventListener('click', () => {
      if (tab === tabs[i]) {
        showTabContent(i)
      }
    })
  })
}

export default tabs
