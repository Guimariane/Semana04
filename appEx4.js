var opcao = prompt("Digite a opção desejada:\n 1 - Média aritmética\n 2 - Média ponderada");


function calculaMedia(nota1, nota2, nota3){

    var nota1 = Number(document.getElementById('nota1').value);
    var nota2 = Number(document.getElementById('nota2').value);
    var nota3 = Number(document.getElementById('nota3').value);
    
switch (opcao) {
    case "1": {
        var media = (nota1 + nota2 + nota3) / 3;
        alert("A média é: " + media);
        break;
    }
    case "2": {
        var media = (nota1 * 3 + nota2 * 3 + nota3 * 4) / 10;
        alert("A média é: " + media);
        break;
    }  

    default: {
        alert("opção inválida");
        break;
    }        
}}