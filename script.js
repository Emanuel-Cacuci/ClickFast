// Une fois que le HTML ressemble à ce que vous voulez : 
// 1. Faire une variable count, qui stockera le nombre de clics
// 2. Faire un eventListener sur le bouton



// CLICK

  let counterVal = 0;

  function incrementClick() {
    updateDisplay(++counterVal);
  }

  function resetCounter() {
    counterVal = 0;
    updateDisplay(counterVal);
  }

  function updateDisplay(val) {
    document.getElementById('counter-label').innerHTML = val;
  }

  // TIMMER

    var myVar = setInterval(function(){ myTimer() }, 1000);
    var secondlimit = 10;

    function myTimer() {
    if(secondlimit == 0)
    {
        myStopFunction();
    }

    document.getElementById("safeTimerDisplay").innerHTML = '00:' + zeroPad(secondlimit,2);
    secondlimit = secondlimit  - 1;

    }

    function myStopFunction() {
        clearInterval(myVar);
    }

    function resetCounter() {
      counterVal = 0;
      updateDisplay(counterVal);
    }

    function updateDisplay(val) {
      document.getElementById('counter-label').innerHTML = val;
    }


    function zeroPad(num, places) {
      var zero = places - num.toString().length + 1;
      return Array(+(zero > 0 && zero)).join("0") + num;
    }