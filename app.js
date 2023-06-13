console.log('Allvvo')
const cols =document.querySelectorAll('.col')

document.addEventListener('keydown' , (event) => {
  //event.preventDefault()
   if  (event.code.toLowerCase()  === 'space') {
    setRandomColorls()
   } 
} )

document.addEventListener('click' , (event) => {
    const type = event.target.dataset.type

    if ( type === "lock" ) {
        const node = event.target.tagName.toLowerCase() === "i"
        ? event.target
        : event.target.chidren[0]

    node.classList.toggle('fa-lock-open')
    node.classList.toggle('fa-lock')
    
        } else if (type === "copy"){
            copyToClickBoard(event.target.textContent)
        }
    }   
  )

function generereRandomColor(){
    const hexCodes = '0123456789ABCDEF'
    let color = ""
    for (let i = 0; i < 6; i++){
        color += hexCodes[Math.floor(Math.random()*hexCodes.length)]
    }
    return '#' + color
}

function copyToClickBoard(text) {
    return navigator.clipboard.writeText(text)
}

function setRandomColorls(){
    const colors = []
    cols.forEach(col=>{
    const isLoced = col.querySelector("i").classList.contains('fa-lock')
    const text = col.querySelector('h2')
    const buttom = col.querySelector('button')
    const color = chroma.random()
    
    if (isLoced) {
        return
    }

    text.textContent = color
    col.style.background = generereRandomColor()   
    setTextColor(text, color)
    setTextColor(buttom, color)
    })
}
function setTextColor (text,color){
    const luminance = chroma(color).luminance()
    text.style.color = luminance > 0.5 ? 'black' : 'white'
}

function updateColorHash(colors = []){
    document.location.hash = colors.toString()
}

setRandomColorls()