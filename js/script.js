const field = document.querySelector('.middle-part')
const display = document.querySelector('.display')

let arr = []
let num1 = ''
let num2 = ''
let act = ''
let finalDisp = '0'
display.innerText = '0'
for (let i = 0; i < 17; i++) {
  let elem = document.createElement('div')
  elem.classList.add('button')
  field.append(elem)
  arr.push(elem)
}

arr[0].innerText = '1'
arr[1].innerText = '2'
arr[2].innerText = '3'
arr[3].innerText = '4'
arr[4].innerText = '5'
arr[5].innerText = '6'
arr[6].innerText = '7'
arr[7].innerText = '8'
arr[8].innerText = '9'
arr[9].innerText = '0'
arr[10].innerText = '+'
arr[10].classList.add('act')
arr[11].innerText = '-'
arr[11].classList.add('act')
arr[12].innerText = '*'
arr[12].classList.add('act')
arr[13].innerText = '/' 
arr[13].classList.add('act')
arr[14].innerText = '.'
arr[14].classList.add('act')
arr[15].innerText = 'C'
arr[15].classList.add('act')
arr[16].innerText = '='
arr[16].classList.add('actGreen')
arr[16].classList.add('bottom-button')

for (let i = 0; i < arr.length; i++) {
    arr[i].addEventListener('click', () => {
        if(act.length == 0 && arr[i].classList.innerText == 'act'){
          display.innerText='0';
          console.log(display.innerText)
        }
        if (act.length == 1 && arr[i].innerText == parseInt(arr[i].innerText)){
          num2 += arr[i].innerText
          console.log(num2)
          display.innerText = num2 
        } else if (arr[i].innerText == '.' && act.length == 1 ){
          num2 += arr[i].innerText
          console.log(num2)
          display.innerText = (Math.abs(parseInt(num2))+'.')
                              .toString()
                              .split('')
                              .reverse()
                              .join('')
        } else if (arr[i].innerText == parseInt(arr[i].innerText)){
          num1 += arr[i].innerText
          console.log(num1)
          display.innerText = num1
        } else if (arr[i].innerText == '.' && num1 != '' ){
          num1 += arr[i].innerText
          console.log(num1)
          display.innerText = (Math.abs(parseInt(num1))+'.')
                              .toString()
                              .split('.')
                              .reverse()
                              .join('.')
        } else if (arr[i].innerText != parseInt(arr[i].innerText) && num1 != '' ){
          act += arr[i].innerText
          display.innerText = act 
        } 
        if(act[1] == '='){
          finalDisp = (eval(`${(num1)}${act[0]}${(num2)}`)).toFixed(2);
          if(parseInt(finalDisp) < 0){
            display.innerText = Math.abs(finalDisp.slice(1,-1)) + '-';
            num1 = '';
            num2 = '';
            act = '';
          }else{
            display.innerText = Math.abs(finalDisp)
            num1 = '';
            num2 = '';
            act = '';
          }
        }
        if (arr[i].innerText === 'C') {
          num1 = '';
          num2 = '';
          act = '';
          display.innerText = '0';
        };
    }); 
};