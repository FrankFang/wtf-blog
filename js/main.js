items = document.querySelectorAll('x-markdown')

Array.prototype.forEach.call(items, (item)=>{
  html = marked(item.textContent)
  item.innerHTML = html
})


