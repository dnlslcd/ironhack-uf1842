// ¿En tu páis de origen es normal dejar propina? somos tercermundistas

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

    valueOfBillAmount = parseFloat(billAmount.value);
    valueOfPercentageTip = parseFloat(percentageTip.value);

// 4. Calcular el total de la propina en Tip Amount.
    const valueOftipAmount = valueOfBillAmount * (valueOfPercentageTip / 100);
    console.log("Valor del campo tip amount: ", valueOftipAmount);

// 5. Calcular el total de la cuenta en el campo Total
    const valueOftotalAmount = valueOfBillAmount + valueOftipAmount;
    console.log("Valor del campo total: ", valueOftotalAmount);

// 6. Actualizar el dom para mostrar los campos tip amount y total
    tipAmount.value = valueOftipAmount.toFixed(2);
    totalAmount.value = valueOftotalAmount.toFixed(2);
});




// //     // 4. Calcular el total de la propina en Tip Amount.
// //     const totalPropina = valueOfBillAmount * (valueOfPercentageTip / 100);
// //     console.log("Valor del campo tip amount: ", tipAmount);


// //     // 6. Actualizar el dom para mostrar los campos tip amount y total
// //     tipAmount.value = totalPropina.toFixed(2);
// //     totalAmount.value = "";
// // });