const copyright = document.querySelector('.copyright');

const home = document.querySelector('.home');
const aboutme = document.querySelector('.about-me');
const aboutmemain = document.querySelector('.about-me-main');
const introContainer = document.querySelector('.intro-container');
const blogGrid = document.querySelector('.blog-grid');
const introTitle = document.querySelector('.intro-title')
const mainArticle = document.querySelector('.main-article')

const dateSnapshot = new Date();
copyright.innerHTML = `
Copyright &#169;${dateSnapshot.getFullYear().toString()}
`

home.addEventListener('click', function() {
  aboutmemain.style.display = 'none'
  introContainer.style.display = 'block'
  blogGrid.style.display = 'grid'
  mainArticle.style.display = 'none'
})

aboutme.addEventListener('click', function() {
  aboutmemain.style.display = 'block'
  introContainer.style.display = 'none'
  blogGrid.style.display = 'none'
  mainArticle.style.display = 'none'
})

introTitle.addEventListener('click', function() {
  aboutmemain.style.display = 'none'
  mainArticle.style.display = 'block'
  introContainer.style.display = 'none'
  blogGrid.style.display = 'none'
})
