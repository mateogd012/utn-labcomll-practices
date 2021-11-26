var pesos = document.getElementById("pesos");
var tipoMoneda = document.getElementById("moneda");

var nuevaMoneda = document.getElementById("nombre");
var valNuevaMoneda = document.getElementById("valor");

var precioMonedas = {
    dolar:201,
    euro:231,
}

function validacion(){
    if (Number(pesos.value)){
        return true
    }
    else{
        alert("Error")
        return False
    }
}

function calcular(){
    if (validacion()){
        var valPeso = Number(pesos.value);
        var valMoneda = Number(precioMonedas[tipoMoneda.value]);
        console.log(precioMonedas);
        console.log(tipoMoneda.value);

        resultado = valPeso * valMoneda;

        return document.querySelector("h3").innerText = "Total = $ " + resultado.toFixed(2);
    }
}

function validacionNuevaMoneda(){
    if (!nuevaMoneda.value) {
        alertError(inputNombre.id);
      return false;
    }
    if (!Number(valNuevaMoneda.value)) {
        alertError(inputValor.id);
        return false;
    }
    return true;
}

function addMoneda(){
    if (validacionNuevaMoneda()){
        var nombreMoneda = nuevaMoneda.value;
        var valorMoneda = valNuevaMoneda.value;
        tipoMoneda.options.add(new Option(nombreMoneda, nombreMoneda));

        precioMonedas[nombreMoneda] = valorMoneda;
    }

}