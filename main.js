const screen = document.querySelector('#screen')
const acBtn = document.querySelector('#ac-btn')
const cBtn = document.querySelector('#c-btn')
const resultBtn = document.querySelector('#result')

const clearAll = () => {
  screen.value = '';
}

const clearLast = () => {
  if(String(screen.value).length <= 1){
    screen.value = ''
  } else{
    let screenString = String(screen.value).slice(0, -1);
  
    screen.value = screenString;
  }
}

const show = (e) => {
  if(e.target.classList.contains('show')){
    screen.value += e.target.value
  }
}

const calculate = () => {
  let result = eval(screen.value);

  if(String(result).length > 13){
    result = String(result).slice(0, -1)
  }

  screen.value = result;
}

acBtn.addEventListener('click', () => {
  clearAll();
})

cBtn.addEventListener('click', () => {
  clearLast();
})

document.addEventListener('click', show)

resultBtn.addEventListener('click', () => {
  if(screen.value != ''){
    calculate();
  }
})




