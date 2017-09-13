document.write('<h1>webpack Image loader</h1>')

var img = document.createElement('img')
img.src = require('./e1.jpg')
document.body.appendChild(img)

var img2 = document.createElement('img')
img2.src = require('./e2.jpg')
document.body.appendChild(img2)