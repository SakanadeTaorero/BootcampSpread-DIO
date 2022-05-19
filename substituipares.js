function substituiPares(array){
    if (!array) return (-1);
    if (!array.length) return console.log(-1);

    const naoZero = (num) => num !== 0;
    const numPar = (num) => num % 2 === 0;

    for (let i = 0; i < array.length; i++){
        if (numPar(array[i]) && naoZero(array[i])) {
            console.log(`trocando ${array[i]} por 0...`);
            array[i] = 0;
        } else if(!naoZero(array[i])){
            console.log('Vixe, você ja esta valendo 0');
        }
    }
    return array ;
}

console.log(substituiPares([10, 15, 23, 24, 53]));
