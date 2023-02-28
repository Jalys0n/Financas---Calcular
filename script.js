/*ids: inputsalario ; inputrenda ; */

function calculoreserva(){
var salario, despesas,mes;
            salario = document.getElementById("inputrenda").value;
            despesas = document.getElementById('inputdividas').value;
            mes = document.getElementById('inputmes').value;
    total = despesas * mes;
    guardarquantia = total/12; 

        document.write(`A ideia de se manter ${mes} meses parados requer uma quantia de ${guardarquantia} por 12 meses, no mínimo.`)
}
