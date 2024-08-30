const colorGenerator = () => {
    const randomNumber = Math.floor(Math.random()*1677)
    const randomCode = "#"+ randomNumber.toString(16)
    document.body.style.backgroundColor=randomCode
    document.getElementById("color-code").innerHTML=randomCode
    console.log(randomNumber, randomCode)
}

document.getElementById("btn").addEventListener("click",colorGenerator)