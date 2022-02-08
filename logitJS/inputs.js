const allElems = Array.from(document.getElementById("bottons-list").children);
//Make the cals
const calcs = getCalculate();

addBottonsNumbers();

//Functions after this lines

/** Set the numeric bottons */
function addBottonsNumbers() {
  //Filter each input
  let elems = allElems.filter((ch) => isNaN(ch));

  elems.forEach(function (elem) {
    //when you click a number, get the value and add it.
    //Cuando clickees un numero, obtendras el valor asignado.
    elem.onclick = function () {
      //Remove the focus of the botton
      this.blur();

      setAction(this.value);
    };
  });

  //Aditionals listeners
  addBottonsxtra();
  equalBotton();
  cleansBottons();
  specialBottons();
}

function addBottonsxtra() {
  //Filter the operators
  let elems = allElems.filter(
    (ch) =>
      ch.value === "+" ||
      ch.value === "-" ||
      ch.value === "x" ||
      ch.value === "%" ||
      ch.value === "÷"
  );

  elems.forEach(function (elem) {
    elem.onclick = function () {
      //Remove the focus of the botton
      this.blur();

      //asign the value.
      calcs.signs = this.value;
      calcs.set(valnum.textContent);
      //Get the new sign.
      clearAll();
    };
  });
}

function equalBotton() {
  //= botton
  let iqual = getBotton("=");
  iqual.onclick = function () {
    //Put the focus in this element
    this.focus();

    //assign the value
    calcs.set(valnum.textContent);
    valnum.textContent = calcs.evaluate();
    calcs.reset();
  };
}

function cleansBottons() {
  //Boton C: clean everything.
  let cleanA = getBotton("C");
  cleanA.onclick = function () {
    clearAll();
    calcs.reset();
  };

  cleanA = getBotton("CE");
  cleanA.onclick = function () {
    clearAll();
  };
}

function specialBottons() {
  //Factorial
  let cleanA = getBotton("n!");
  cleanA.onclick = function () {
    //Remove the focus of the botton
    this.blur();

    let val = calcs.mathx.factorial(valnum.textContent);
    textSpecial(1,this,val);
  };
  //SQRT
  cleanA = getBotton("&radic;n");
  cleanA.onclick = function () {
    //Remove the focus of the botton
    this.blur();

    let val = calcs.mathx.getSqrt(valnum.textContent);
    textSpecial(0,this,val);
  };

  //POW 2
  cleanA = getBotton("n&sup2;");
  cleanA.onclick = function () {
    //Remove the focus of the botton
    this.blur();

    let val = calcs.mathx.up2(valnum.textContent);
    textSpecial(1,this,val);
  };
}

/** Return a bottons with the specific value inside of the bottons list.
 * @param value value to search in the dom.
 */
function getBotton(val = "") {
  let obj = document.createElement('span');
  obj.innerHTML = val;
  return allElems.find((ch) => ch.value === obj.innerHTML);
}

/** Assign the result to the window amd also save it in the historial.
 * @param loc location of the special digit.
 * @param oper Dom element.
 * @param total new value for the window.
 */
function textSpecial(loc=0, oper, total){
  let info = `${(loc == 1)?valnum.textContent:oper.value.charAt(loc)}${(loc == 0)?valnum.textContent:oper.value.charAt(loc)}`;
    valnum.textContent = total;
    
    info += ` = ${total}.`;
    saveStorage(info);
}