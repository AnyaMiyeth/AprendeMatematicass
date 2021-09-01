function operacion() {
    
    var op = document.getElementById("cmbOperaciones").value;
    var numero1 = document.getElementById("numero1").value;
    var numero2 = document.getElementById("numero2").value;
    var resultado;

    switch (op) {
        case "suma":
            resultado = suma(numero1, numero2);
            break
        case "resta":
            resultado = resta(numero1, numero2);
            break;
        case "multiplicacion":
            resultado = multiplicacion(numero1, numero2);
            break;
        case "division":
            resultado = division(numero1, numero2);
            break;
    }

    document.getElementById("resultado").value = resultado;
    guardar(numero1, numero2, resultado, op);

}

function guardar(numero1, numero2, resultado, op) {
    var operacionNew = { "numero1": numero1, "numero2": numero2, "resultado": resultado, "operacion": op }
   
    if (JSON.parse(localStorage.getItem('dato')) != null) {
        operaciones = JSON.parse(localStorage.getItem('dato'));
    }
    operaciones.push(operacionNew);
    localStorage.setItem('dato', JSON.stringify(operaciones));
    var datosTabla = "";
    operaciones.forEach(element => {
        datosTabla += "<tr>"
        datosTabla += "<td>" + element.numero1 + "</td>"
        datosTabla += "<td>" + element.numero2 + "</td>"
        datosTabla += "<td>" + element.resultado + "</td>"
        datosTabla += "<td>" + element.operacion + "</td>"
        datosTabla += "</tr>"
    });
    document.getElementById("tbCuerpo").innerHTML = datosTabla;
}
function suma(numero1, numero2) {
    var valor = parseInt(numero1) + parseInt(numero2);
    return valor;
}

function resta(numero1, numero2) {
    var valor = Number(numero1) - Number(numero2);
    return valor;
}

function multiplicacion(numero1, numero2) {
    var valor = Number(numero1) * Number(numero2);
    return valor;
}

function division(numero1, numero2) {
    if (numero2 === 0) {
        alert("No es posible hacer una división por cero")
        return null
    }
    var valor = Number(numero1) / Number(numero2);
    return valor;
}

