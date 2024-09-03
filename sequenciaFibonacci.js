// Desafio 1 - sequência de fibonacci
function fibonacci(n) {
    let a = 0;
    let b = 1;

    while (b < n) {
        let temporario = b;
        b = a + b;
        a = temporario;
    }

    // Veficação se n é igual a b
    return b === n || n === 0;
}

const num = 124; // prompt("Digite um número qualquer: ")

// Verificação do número se pertence à sequência de Fibonacci
if (fibonacci(num)) {
    console.log("O número " + num + " pertence à sequência de Fibonacci.");
} else {
    console.log("O número " + num + " não pertence à sequência de Fibonacci.");
}
