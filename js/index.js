

/* event.preventDefault();
 */


var items = document.querySelectorAll('.item');

items.forEach(function(item) {
  var minusButton = item.querySelector('.minus-btn');
  var plusButton = item.querySelector('.plus-btn');
  var inputField = item.querySelector('.input-btn');
  var resultField = item.querySelector('.result-btn');  

  minusButton.addEventListener('click', function minusProduct() {
    var currentValue = Number(inputField.value);
    if (currentValue > 0) {
      inputField.value = currentValue - 1;
      var x = parseInt(item.querySelector('.price-item').value);
      resultField =  item.querySelector('.result-btn').value = x* inputField.value;
      document.querySelector('.total-result-input').value = [].slice.call(document.querySelectorAll(".total-price > input")).reduce((acc, el) => acc + parseInt(el.value), 0)
    } else inputField.value = 0
  
  });

  plusButton.addEventListener('click', function plusProduct() {
    var currentValue = Number(inputField.value);
    if (currentValue < 100) {
    inputField.value = currentValue + 1;
   var x = parseInt(item.querySelector('.price-item').value);
   resultField = item.querySelector('.result-btn').value = Number(x)* Number(inputField.value);
   document.querySelector('.total-result-input').value = [].slice.call(document.querySelectorAll(".total-price > input")).reduce((acc, el) => acc + parseInt(el.value), 0)
  } else inputField.value = 100
  });

});


