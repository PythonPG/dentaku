(function() {
  var Dentaku = document.dentaku;
  var FlagNum = false;
  function NumPress (Num) {
    if (FlagNum) { 
      Dentaku.readvalue.value  = Num;
      FlagNum = false;
    }
    else {
      if (FlagNum.readvalue.value == "0") {
        Dentaku.readvalue.value = Num;
      } else {
        Dentaku.readvalue.value += Num;
      }
    }
  }
})();