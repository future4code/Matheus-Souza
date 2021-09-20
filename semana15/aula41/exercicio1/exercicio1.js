//--------------------------------------------EX 01 --------------------------

//A)colocando o valor do index que queromos acessar
//
//B)
/* const nome=process.argv[2]
const idade=process.argv[3]
console.log('seu nome é '+nome+'! você tem',idade,' anos de idade.') */
//C) 
const inputName=process.argv[2]
const inputAge=Number(process.argv[3])
const FutureAge=inputAge+7
console.log('seu nome é '+inputName+'! você tem',inputAge,'anos.Em sete anos você tera '+FutureAge) 