export const goToLogin=(history)=>{
    history.push("/login")
}
export const goAddRecipe=(history)=>{
    history.push("/adicionar")
}
export const goToRecipeDetail=(history,id)=>{
    history.push(`detalhe/${id}`)
}
export const goToRecipesList=(history)=>{
    history.push("/")
}
export const goToSignUp=(history)=>{
    history.push("/cadastro")
}