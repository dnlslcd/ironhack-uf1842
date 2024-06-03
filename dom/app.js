// ¿En tu páis de origen es normal dejar propina? hell no

// 2. Obtener el valor que pone el usuario en el campo Bill Amount
const billAmount = document.querySelector("#bill-amount");
// 3. Obtener el valor que pone el usuario en el campo Percentage Tip
const percentageTip = document.querySelector("#percentage-tip");

const tipAmount = document.querySelector("#tip-amount");

const totalAmount = document.querySelector("#total");


// 1. Asociar un evento click al botón "Calculate"
calculate.addEventListener("click", function(){
    console.log("boton registra click");
    console.log("valor del campo bill amount: " , billAmount.value);
    console.log("valor del campo percentage tip: " , percentageTip.value);


// 4. Calcular el total de la propina en Tip Amount.
    
    const tipAmount = billAmount * (percentageTip / 100);
    console.log(tipAmount);
    

// 5. Calcular el total de la cuenta en el campo Total
    const totalAmount = billAmount + tipAmount;
    console.log(totalAmount);
    
});

