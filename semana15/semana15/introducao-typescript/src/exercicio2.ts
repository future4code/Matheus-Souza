
//----------------------------------------Exercício 2 --------------------------------------------------------
//A)

type estatisticas={
    maior:number,
    menor:number,
    media:number,
}

function obterEstatisticas(numeros:number[]):estatisticas{

    const numerosOrdenados = numeros.sort(
        (a:number, b:number) => a - b
    )

    let soma:number = 0

    for (let num of numeros) {
        soma += num
    }

    const estatisticas:estatisticas= {
        maior: numerosOrdenados[numeros.length - 1],
        menor: numerosOrdenados[0],
        media: soma / numeros.length
    }
    return estatisticas
}
//B)
console.log(obterEstatisticas([10,10,20,30,18,5,899,12]))

type amostraDeIdades = {
    numeros: number[], 
    obterEstatistica: (numeros: number[]) => estatisticas
    }
        
