//----------------------interpretação de código---------------
//
//........................ EX 1 ..............................
//A)vai retornar os itens,o index e mostrar a array completa
//
//........................ EX 2 ..............................
//
//A)vai mostrar o nome de cada item da array
//
//........................ EX 3 ..............................
//
//A)vai retornar os itens diferentes de chijo
//
//----------------------escrita  de código--------------------
//
//........................ EX 1 ..............................

const pets = [
    { nome: "Lupin", raca: "Salsicha"},
    { nome: "Polly", raca: "Lhasa Apso"},
    { nome: "Madame", raca: "Poodle"},
    { nome: "Quentinho", raca: "Salsicha"},
    { nome: "Fluffy", raca: "Poodle"},
    { nome: "Caramelo", raca: "Vira-lata"},
 ]
 const nomesDosPets = pets.map ((nomes)=>{
    return nomes.nome
 })
console.log(nomesDosPets)

const salsicha = pets.filter ((salsichas) =>{
    return salsichas.raca ==="Salsicha"
})
console.log(salsicha)