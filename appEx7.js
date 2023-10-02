var dataHoje = new Date().toLocaleDateString()

function EscreverCarta() {
    var nomeFuncionario = document.getElementById('nome-funcionario').value
    var dataInicio = document.getElementById('inicio-ferias').value
    var dataFim = document.getElementById('fim-ferias').value
    
    var cartaFerias = `Caro(a) responsável 
    Gostaria de solicitar minhas férias: 
    
    Nome do funcionário: ${nomeFuncionario} 
    Data de inicio: ${dataInicio}
    Data de fim: ${dataFim}
    
    Agradeço a atenção
    
    Atenciosamente, ${nomeFuncionario}
    
    Gerado em ${dataHoje}
    `
    
    console.log(cartaFerias)

}
