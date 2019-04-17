

function validateCreditCard(creditCard){
  var creditCard = document.getElementById('userInput').value;
  var numbers = creditCard.length;
  if(numbers !==16){
    document.getElementById('resultOne').innerHTML= "less than 16 digits";
    return false;
  }
  if(isNaN(creditCard)){
    document.getElementById('resultOne').innerHTML= "must include only digits";
    return false;
  }
if(creditCard[creditCard.length-1]%2 !== 0){
  document.getElementById('resultOne').innerHTML= "last digit must be even";
  return false;
}

var sum = 0;
var creditCardArray = creditCard.split('');
for(var i = 0;i < creditCardArray.length; i++ ){
  sum += parseInt(creditCardArray[i]);
}
if(sum<=16){
  document.getElementById('resultOne').innerHTML= "sum not greater than 16";
  return false;
}

  var emptyObj = {};
  for(var i =0; i < creditCard.length; i++){
  emptyObj[creditCard[i]] = true;
  }
if(Object.keys(emptyObj).length < 2){
    document.getElementById('resultOne').innerHTML="Sorry, you only have 1 unique number in your credit card number, you need to have at least 2 different numbers.";
    return false;
  }
else{
  window.alert("Congrats! That is a valid CC# ^_^");
}
}
