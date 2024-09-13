let palavra = "testado";

const qntdLetraA = (palavra) => {
    let qntd = 0;
    for(let i = 0; i < palavra.length; i++){
        if(palavra[i] == 'a' || palavra[i] == 'A'){
            qntd++;
        }
    }

    if(qntd > 0){
        console.log("Quantidade de letras a/A: " + qntd);
    } else {
        console.log("Não há letras a/A");
    }
}

qntdLetraA(palavra);