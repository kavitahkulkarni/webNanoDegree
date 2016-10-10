var submit = document.querySelector('.submit');


//Function to validate the Credit Card number
function isValidCC(ccNumber, ccMV) {
  if (ccMV == "Visa") {
      // Visa: length 16, prefix 4, dashes optional.
      var re = /^4\d{3}-?\d{4}-?\d{4}-?\d{4}$/;
   } else if (ccMV == "Master Card") {
      // Mastercard: length 16, prefix 51-55, dashes optional.
      var re = /^5[1-5]\d{2}-?\d{4}-?\d{4}-?\d{4}$/;
   }
   if(!re.test(ccNumber)) {
    return false;
   } else {
    return true;
   }
}

// Function to update the progress bar and
// show the input fields for different
// billing address if the checkbox is checked
var useDiffBilling = document.querySelector('#diff-billing-address');
useDiffBilling.addEventListener('change', function (e) {
  var valeur = 0;
  if (this.checked) {
    if ( $(this).attr('value') > valeur )
      {
           valeur =  $(this).attr('value');
      }
    document.getElementById('showProgress').innerHTML = valeur+'%';
    $('.new-billing').css('opacity', '1');
    $('.new-billing').css('max-height', '100px');
    $('.new-billing').css('overflow', 'visible');
  }
  $('.progress-bar').css('width', valeur+'%').attr('aria-valuenow', valeur);
});


// Submit order
submit.onclick = function () {
  var ccInput = document.querySelector('#cc-number');
  var ccType = document.querySelector('#cc-type');
  var ccValidity = isValidCC(ccInput.value, ccType.value);
  if (ccValidity == true) {
    alert("Placing the order\n\nThanks for your submission!");
  } else {
    alert("Please enter correct card number");
  }
};
