const FibonacciSequencia = (numero) => {
    let soma = 1;
    let i = 0;

    do {
        if(numero == 0 || numero == soma){
            console.log("este número pertence a sequência");
            return;
        }
        soma += i;
        i = soma - i;
    } while(i < numero);

    console.log("O número não pertence a sequência");
}

let numero = 21;
FibonacciSequencia(numero);