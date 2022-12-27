const nav = document.querySelector("nav"),
searchForm = document.getElementById('search')
searchInp = document.getElementById('searchInp')
;

const toggleShow = (elem) => {
  if (elem.offsetHeight === 0) {
    gsap.to(elem, {
      height: 'auto',
      opacity: 1,
      marginTop: '0.3rem'
    })
  } else {
    gsap.to(elem, {
      height: 0,
      opacity: 0,
      marginTop: 0
    })
  }
}

const menuClicked = () => {
  toggleShow(nav)
}

const menuSearchClicked = () => {
  toggleShow(searchForm)
}