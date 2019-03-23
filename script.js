var cor = document.getElementById('cor')
var red = document.getElementById('r')
var green = document.getElementById('g')
var blue = document.getElementById('b')

async function updateColor(r,g,b) {
    let color = "rgb("+r.value+","+ g.value +","+b.value+")"

    cor.style.backgroundColor = color

    console.log(color)
}

setInterval(updateColor,1,red,green,blue)

