class Calculate {
  first = 0;
  signs = "";
  second = 0;
  operation = "";

  //Constructor
  constructor(first = 0, second = 0) {
    this.first = first;
    this.second = second;
  }

  //setters y getters
  get first() {
    return this.first;
  }

  get second() {
    return this.second;
  }

  set signs(sign = "") {
    this.signs = sign;
  }

  get signs() {
    return this.signs;
  }

  get operation() {
    return this.operation;
  }

  get mathx() {
    return mates;
  }
  //setters y getters

  //calculate every variable in the class
  evaluate() {
    this.operation = `${this.first}`;
    if (this.second != 0) {
      //in this moment, it check if second val is a negative number.
      this.operation += ` ${this.signs} ${
        this.second < 0 ? "(" + this.second + ")" : this.second
      } `;
      this.first = apply(this);
    }
    console.log(this.first);
    saveStorage(this.operation + `=  ${this.first}.`);
    return this.first;
  }

  reset() {
    this.first = 0;
    this.second = 0;
    this.signs = "";
    this.operation = "";
  }

  //Set the values in the specific variable
  set(number) {
    let digit = Number.parseFloat(number);
    //If it empty
    if (this.first == 0) {
      this.first = digit;
      //If the second variable is empty
    } else if (this.second == 0) {
      this.second = digit;
      //make the fibbonacci assingment taking the sign.
    } else {
      this.second = digit;
    }
  }
  //end class
}

/**Apply the operations using the class Calculate as variable and return a value.
 * @param vals Varible typeof Calculate to evaluate the operation.
 */
function apply(vals) {
  //Apply the specific calc using the sign.
  let total = 0;
  switch (vals.signs) {
    case "+":
      if (this.second != 0) {
        total = vals.first + vals.second;
      }
      break;
    case "-":
      if (this.second != 0) {
        return vals.first - vals.second;
      }
      break;
    case "x":
      if (this.second != 0) {
        total = vals.first * vals.second;
      }
      break;
    case "÷":
      if (this.second == 0) {
        total = vals.first / vals.second;
      }
      break;
    case "%":
      if (this.second != 0) {
        total = vals.first % vals.second;
      }
      break;
    case "=":
    default:
      total = vals.first;
  }
  return checkin(total);
}

// return a new Calculate class
function getCalculate() {
  return new Calculate();
}
/** Return a checked number with not more than 11 digits.
 * @param digit the digit to check.
  */
function checkin(val = 0) {
  if ((val+"").length > 9) {
    val = val.toFixed(9);
  }
  return val;
}

//Clase estatica encargada de calculos especiales.
class mates {
  //SQRL : RAIZ CUADRADA
  static getSqrt(val = 0) {
    return checkin( Math.sqrt(val) );
  }

  //Factorial
  static factorial(num = 0) {
    if (num < 0) return -1;
    else if (num == 0) return 1;
    else return num * factorialize(num - 1);
  }

  //up 2 number
  static up2(val = 0) {
    return checkin( Math.pow(val, 2) );
  }
}
