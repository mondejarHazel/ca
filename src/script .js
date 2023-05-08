function clearResult() {
  document.getElementById("input-field").value = "0";
}

function Delete() {
  const inputField = document.getElementById("input-field");
  const currentValue = inputField.value;
  
  if (currentValue.length > 1) {
    const newValue = currentValue.slice(0, -1);
    inputField.value = newValue;
  } else {
    inputField.value = "0";
  }
}


function percentage() {
  const inputField = document.getElementById("input-field");
  inputField.value = parseFloat(inputField.value) / 100;
}

function operationD() {
  const inputField = document.getElementById("input-field");
  inputField.value += "/";
}

function addnumber7() {
  const inputField = document.getElementById("input-field");
  if (inputField.value === "0") {
    inputField.value = "7";
  } else {
    inputField.value += "7";
  }
}

function addnumber8() {
  const inputField = document.getElementById("input-field");
  if (inputField.value === "0") {
    inputField.value = "8";
  } else {
    inputField.value += "8";
  }
}

function addnumber9() {
  const inputField = document.getElementById("input-field");
  if (inputField.value === "0") {
    inputField.value = "9";
  } else {
    inputField.value += "9";
  }
}

function operationM() {
  const inputField = document.getElementById("input-field");
  inputField.value += "*";
}

function addnumber4() {
  const inputField = document.getElementById("input-field");
  if (inputField.value === "0") {
    inputField.value = "4";
  } else {
    inputField.value += "4";
  }
}

function addnumber5() {
  const inputField = document.getElementById("input-field");
  if (inputField.value === "0") {
    inputField.value = "5";
  } else {
    inputField.value += "5";
  }
}

function addnumber6() {
  const inputField = document.getElementById("input-field");
  if (inputField.value === "0") {
    inputField.value = "6";
  } else {
    inputField.value += "6";
  }
}

function operationS() {
  const inputField = document.getElementById("input-field");
  inputField.value += " - ";
}

function addnumber1() {
  const inputField = document.getElementById("input-field");
  if (inputField.value === "0") {
    inputField.value = "1";
  } else {
    inputField.value += "1";
  }
}
function addnumber2() {
  const inputField = document.getElementById("input-field");
  if (inputField.value === "0") {
  inputField.value = "2";
  } else {
  inputField.value += "2";
  }
  }
  
  function addnumber3() {
  const inputField = document.getElementById("input-field");
  if (inputField.value === "0") {
  inputField.value = "3";
  } else {
  inputField.value += "3";
  }
  }
  
  function operationA() {
  const inputField = document.getElementById("input-field");
  inputField.value += " + ";
  }
  
  function addnumber0() {
  const inputField = document.getElementById("input-field");
  if (inputField.value === "0") {
  inputField.value = "0";
  } else {
  inputField.value += "0";
  }
  }
  
  function addDecimal() {
  const inputField = document.getElementById("input-field");
  if (!inputField.value.includes(".")) {
  inputField.value += ".";
  }
  }
  
  function calculateResult() {
  const inputField = document.getElementById("input-field");
  const result = eval(inputField.value);
  inputField.value = result;
  }


