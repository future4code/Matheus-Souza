//----------------------interpretação de código---------------
//
//........................ EX 1 ..............................
//
//vai contar de 1 até 5
//
//........................ EX 2 ..............................
//
//A)vai mostrar todos os numeros maiores que o 19
//B)da console log na lista
//........................ EX 3 ..............................
//imprime 4 linhas de asteriscos cada linha com 1 * a mais
//
//----------------------escrita de código---------------
//
//........................ EX 1 ..............................
//
let pets = prompt("quantos pets vc tem?")
let totalPets = []

verificaPets = (numero) => {
    if (numero === 0) {
        console.log("você pode adotar um pet ")
    } else {
        let inicio = 0
        let usuario = numero
        while (inicio < usuario) {
            let nomePet = prompt("qual nome de todos seu pets?")
            let adicionaPet = totalPets.push(nomePet)
            inicio++
        }
    }
    console.log(totalPets)
}

verificaPets(pets)