var somar = require ("./Funções/Somar")

function somar(a, b) {
    return a + b ;
}
function subtrair(a, b) {
    return a - b ;
}
function multiplicar(a, b) {
    return a * b ;
}
function dividir(a, b){
    if (b === 0){
        throw new Error("Divisão por zero não permitida");
    }
    return a / b;
}

function calcular(operacao, a, b) {
    switch (operacao) {
        case 'somar':
            return somar(a, b);
        case 'subtrair':
            return subtrair(a, b);
        case 'multiplicar':
            return multiplicar(a, b);
        case 'dividir':
            return dividir(a, b);
        default:
            throw new Error("Operação não suportada");
    }   
}

// Exemplo de uso
try{
    console.log("Soma", calcular ('somar', 5, 3));
    console.log("Subtração", calcular ('subtrair', 5, 3));
    console.log("Multiplicação", calcular('multiplicar', 5, 3));
    console.log("Divisão", calcular ('dividir', 5, 3)); 
} catch (error) {
    console.error("Erro:", error.message);
}
