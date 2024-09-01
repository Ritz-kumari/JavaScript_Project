const upperSet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerSet = "abcdefghijklmnopqrstuvwxyz";
const numbers = "0123456789";
const symbol = "@#$";

//selectors
const passwordBox = document.getElementById('pass-box')
const totalChar = document.getElementById('total-char')
const upperInput = document.getElementById('upper-case')
const lowerInput = document.getElementById('lower-case')
const numberInput = document.getElementById('number')
const symbolInput = document.getElementById('symbol')

const getRandomData = (dataSet) =>{
    return dataSet[Math.floor(Math.random()*dataSet.length)]
// Let's say dataSet is an array with 5 elements: ['a', 'b', 'c', 'd', 'e'].
// Math.random() might generate 0.457.
// Suppose dataSet.length is 5. So Math.random() * dataSet.length would be 0.457 * 5 = 2.285.
// Math.floor(2.285) results in 2.
// dataSet[2] gives you the element at index 2, which is 'c'

}

const generatePassword = (password = '') =>{
    if (upperInput.checked){
        password+= getRandomData(upperSet)
    }

    if (lowerInput.checked){
        password+= getRandomData(lowerSet)
    }

    if (numberInput.checked){
        password+= getRandomData(numbers)
    }

    if (symbolInput.checked){
        password+= getRandomData(symbol)
    }

    if (password.length < totalChar.value){
        return generatePassword(password)
    }
    passwordBox.innerHTML=truncateString(password, totalChar.value)
    console.log(password)
}

document.getElementById('btn').addEventListener(
    'click', 
    function(){
        generatePassword()
    }
)

function truncateString(str, length) {
    if (str.length > length) {
      return str.substring(0, length); // Adds an ellipsis for indication
    } else {
      return str;
    }
  }