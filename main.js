let previousDisplay = document.getElementsById("previous-operand")
let correntDisplay = document.getElementsById("current-operand")

function clearDisplay(){
  previousDisplay.getNumValue = ' '
  correntDisplay.clearDisplay = ' '

}
function getNumValue(num){
  correntDisplay.value += num;



}
function calculate(){
  if(correntDisplay.value = eval(correntDisplay.value)){

  }
}