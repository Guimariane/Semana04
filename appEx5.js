function calculoSalario(){

var salarioBruto = Number(document.getElementById('salario').value)
var resultado = (salarioBruto * 0.08) 
var resultadoAnual = resultado * 12

alert("O seu FGTS é R$" + resultado)
alert("No ano você vai receber R$" + resultadoAnual)

}