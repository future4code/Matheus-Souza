const ListaDeTarefas = []

const lista=(tarefa)=>{
    
    ListaDeTarefas.push(tarefa)
}

const result=lista(process.argv)

console.log(ListaDeTarefas) 
