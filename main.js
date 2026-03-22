const toggle = document.querySelector('#toogle');

toggle.addEventListener("click", () => {
   if(document.documentElement.classList.contains('light')) {
      document.documentElement.classList.remove('light')
   } else {document.documentElement.classList.add('light')}
})