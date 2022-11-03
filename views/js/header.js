const nav = document.querySelector("nav"),
      search = document.getElementById('search')
      ;

const menuClicked = () => {
  nav.classList.toggle('expandNav');
}

const menuSearchClicked = () => {
  search.classList.toggle('expandSearch');
}

