

$(document).ready(function () {
    $("#btnOperacion").click(function () {
        op = $("#cmbOperaciones").val();
        alert(op);
        switch (op) {
            case "suma":
                var numero1 = $("#numero1").val();
                var numero2 = $("#numero2").val();
                var resultado = Number(numero1) + Number(numero2);
                $("#resultado").val(resultado);
                alert(resultado);
                $("#btnOperacion").addClass("redondo");
                break;
            case "resta":
                var numero1 = $("#numero1").val();
                var numero2 = $("#numero2").val();
                var resultado = Number(numero1) - Number(numero2);
                $("#resultado").val(resultado);
                alert(resultado);
                break;
        }
    })

  $("#btnCambio").click(function(){
    $("#div1").load("../index.html");
  });

});