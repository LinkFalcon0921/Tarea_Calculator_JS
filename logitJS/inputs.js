const allElems = Array.from(document.getElementById("bottons-list").children);
//Make the cals
const calcs = getCalculate();

addBottonsNumbers();

//Functions after this lines

/** Set the numeric bottons */
function addBottonsNumbers() {
  //Filter the input
  let elems = allElems.filter((ch) => isNaN(ch));

  elems.forEach(function (elem) {
    //when you click a number, get the value and add it.
    //Cuando clickees un numero, obtendras el valor asignado.
    elem.onclick = function () {
      //Remove the focus of the botton
      elem.blur();

      setAction(elem.value);
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
      elem.blur();

      //asign the value.
      calcs.signs = elem.value;
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
    elem.blur();

    let info = `${valnum.textContent}!`;
    valnum.textContent = calcs.mathx.factorial(valnum.textContent);

    info += ` = ${valnum.textContent}.`;
    saveStorage(info);
  };
  //SQRT
  cleanA = getBotton("√n");
  cleanA.onclick = function () {
    //Remove the focus of the botton
    elem.blur();

    let info = `${this.value.charAt(0)}${valnum.textContent}`;
    valnum.textContent = calcs.mathx.getSqrt(valnum.textContent);

    info += ` = ${valnum.textContent}.`;
    saveStorage(info);
  };

  //POW 2
  cleanA = getBotton("n²");
  cleanA.onclick = function () {
    //Remove the focus of the botton
    elem.blur();

    let info = `${valnum.textContent}${this.value.charAt(1)}`;
    valnum.textContent = calcs.mathx.up2(valnum.textContent);

    info += ` = ${valnum.textContent}.`;
    saveStorage(info);
  };
}

/** Return a bottons with the specific value inside of the bottons list.
 * @param value value to search in the dom.
 */
function getBotton(val = "") {
  return allElems.find((ch) => ch.value === val);
}
